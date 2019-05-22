var express=require("express");
var router=express.Router();
var Blog=require("../models/blog");

// =================
// BLOG ROUTES
// =================

router.get("/",function(req,res){
    res.render("landing");
});

router.get("/blogs",isLoggedIn,function(req,res){
    Blog.find({},function(err,blogs){
        if(err){
            console.log(err);
        }else{
            res.render("blogviews/blog",{blogs:blogs}); 
        }

    })
    
});

router.get("/blogs/new",isLoggedIn,function(req,res){
    res.render("blogviews/blognew");
});


router.post("/blogs",isLoggedIn,function(req,res){
    var newblog={
        title: req.body.title,
        author: {
            id: req.user._id,
            username: req.user.username
        },
        description: req.body.description
    }
    Blog.create(newblog,function(err,blognew){
        if(err){
            console.log(err);
        }else{
            res.redirect("/blogs")
        }
    })
})


router.get("/blogs/:id",isLoggedIn,function(req,res){
    Blog.findById(req.params.id).populate("comments").exec(function(err,foundblog){
        if(err){
            console.log(err);
        }else{
            res.render("blogviews/blogshow",{foundblog:foundblog});
        }
    })
});

router.get("/blogs/:id/edit",isLoggedIn,function(req,res){
    Blog.findById(req.params.id,function(err,editblog){
        if(err){
            console.log(err);
        }else{
            res.render("blogviews/editblog",{editblog:editblog})
        }

    });
});


router.put("/blogs/:id",isLoggedIn,function(req,res){
    Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedblog){
        if(err){
            console.log(err);
        }else{
            res.redirect("/blogs/"+req.params.id);
        }
    });
});

router.delete("/blogs/:id",isLoggedIn,function(req,res){
    Blog.findByIdAndRemove(req.params.id,function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/blogs");
        }
    })
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};


module.exports=router;