var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    methodOverride = require("method-override"),
    Blog           = require("./models/blog");
    Comment        = require("./models/comment"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    User          = require("./models/user");

mongoose.connect('mongodb://localhost:27017/blogapp', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride('_method'));
app.use(express.static(__dirname + "/public"));



// =======================
// CONFIGURE AUTHENTICATION 
// ========================
// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "JaiGurudev",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
 });


// ===========
// Blog Routes
// ===========
var blogRoute=require("./routes/blogroute");
app.use("/",blogRoute);

// =============
// COMMENT ROUTE
// =============
var commentRoute=require("./routes/commentroute");
app.use("/",commentRoute);

// =====================
// AUTHENTICATION ROUTES
// =====================

app.get("/login",function(req,res){
    res.render("login")
});


app.get("/signup",function(req,res){
    res.render("signup")
});

app.post("/signup",function(req,res){
    var newUser=new User({username:req.body.username});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.redirect("/")
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/blogs");
        });
    });
});

app.post('/login',
  passport.authenticate('local', { successRedirect: '/blogs',
                                   failureRedirect: '/login', })
);

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


app.listen(3000, function(){
    console.log("BlogApp has started.......");
 });