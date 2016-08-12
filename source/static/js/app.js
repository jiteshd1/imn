QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, CONFIG);

var token = null;

QB.createSession(function(err, result) {
    console.log('Session create callback', err, result);
    token = result.token;
});


$(document).ready(function() {
    
    $('#jd').editable({
        type: 'textarea',
        pk: 1,
        url: '/post',
        title: 'About you',
        tpl: '<textarea style="width:100%;"></textarea>',
        showbuttons: 'bottom',
        onblur: 'submit'
    });


    $("#forgotPasswordForm").submit(function(event) {
        var UserEmail = $('#UserEmail').val();

        var params = {'keys[token]': token};
        QB.users.resetPassword(UserEmail, params, function(err, user) {
            if (user) {
                console.log(JSON.stringify(user));
                //window.location.replace("profile.html");
            } else {
                console.log(JSON.stringify(err));
            }
        });
        event.preventDefault();

    });

});
