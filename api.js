module.exports = function(app, express, QB) {

    app.post('/api/:version/signin', function(req, res, next) {
        try {
            var login = req.body.username;
            var password = req.body.password;

            var params = { 'login': login, 'password': password };
            QB.login(params, function(err, user) {
                if (user) {
                    console.log(JSON.stringify(user));
                    res.redirect('/profile');
                } else {
                    console.log(JSON.stringify(err));
                    res.redirect('/login');
                }
            });
        } catch (e) {
            next(e)
        }
    });

    app.post('/api/:version/register', function(req, res, next) {
        try {
            var login = req.body.username;
            var password = req.body.password;

            var params = { 'login': login, 'password': password };

            QB.create(params, function(err, user) {
                if (user) {
                    console.log(JSON.stringify(user));
                    res.redirect('/profile');
                } else {
                    console.log(JSON.stringify(err));
                    res.redirect('/register');
                }
            });
        } catch (e) {
            next(e)
        }
    });

    app.post('/api/:version/signout', function(req, res, next) {
        console.log("test");

        try {
            var params = {};

            QB.logout(function(err, result) {
                if (result) {
                    console.log(JSON.stringify(result));
                    res.redirect('/login');
                } else {
                    console.log(JSON.stringify(err));
                    res.redirect('/login');
                }
            });
        } catch (e) {
            next(e)
        }
    });

}
