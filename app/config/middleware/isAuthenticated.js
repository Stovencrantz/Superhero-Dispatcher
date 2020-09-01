// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
    //if the user is logged in, continue with the request to the restricted route
    if(req.user) {
        return next();
    }

    //if the user isnt logged in, redirect them to the login page
    return res.redirect("/login");
}