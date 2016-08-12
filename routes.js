module.exports = function(app) {

    app.get('/forgotPassword', function(req, res, next) {
        try {
            res.render('forgotPassword.jade');
        } catch (e) {
            next(e)
        }
    });
    app.get('/register', function(req, res, next) {
        try {
            res.render('register.jade');
        } catch (e) {
            next(e)
        }
    });
    app.get('/profile', function(req, res, next) {
        try {
            res.render('profile.jade');
        } catch (e) {
            next(e)
        }
    });
    app.get('/login', function(req, res, next) {
        try {
            console.log("login page request");
            res.render('login.jade');
        } catch (e) {
            next(e)
        }
    });

}
