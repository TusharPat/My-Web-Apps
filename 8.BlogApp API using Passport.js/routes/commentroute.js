var express=require("express");
var router=express.Router();
var Blog=require("../models/blog");
var Comment=require("../models/comment");

// =================
// COMMENTS ROUTES
// =================

router.get("/blogs/:id/comments/new",isLoggedIn, function(req, res){
    // find campground by id
    Blog.findById(req.params.id, function(err, foundblog){
        if(err){
            console.log(err);
        } else {
             res.render("commentviews/newcomment", {foundblog: foundblog});
        }
    })
});

router.post("/blogs/:id/comments",isLoggedIn, function(req, res){
//    //lookup campground using ID
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            console.log(err);
            res.redirect("/blogs");
        } else {
         Comment.create(req.body.comment, function(err, newcomment){
            if(err){
                console.log(err);
            }else{
                newcomment.author.id = req.user._id;
                newcomment.author.username = req.user.username;
                newcomment.save();
                blog.comments.push(newcomment);
                blog.save();
                res.redirect('/blogs/' + req.params.id);
                console.log(newcomment);
            }
         });
        }
});
});


router.get("/blogs/:id/comments/:comment_id/edit",isLoggedIn,function(req,res){
    Comment.findById(req.params.comment_id,function(err,foundcomment){
         if(err){
             console.log(err);
         }else{
             res.render("commentviews/editcomment",{foundcomment:foundcomment,blog_id:req.params.id});
         }
     });
   
});



router.put("/blogs/:id/comments/:comment_id/edit",isLoggedIn,function(req,res){
    Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,foundcomment){
         if(err){
             console.log(err);
         }else{
            res.redirect("/blogs/"+req.params.id);
         }
     });
    // res.send("comment PUT route");
});

router.delete("/blogs/:id/comments/:comment_id",isLoggedIn,function(req,res){
    Comment.findByIdAndRemove(req.params.comment_id,function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/blogs/"+req.params.id);
        }
    })
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};


module.exports=router;