module.exports = function(QB) {

    var CONFIG = {
        debug: true,
        webrtc: {
            answerTimeInterval: 30,
            dialingTimeInterval: 5,
            disconnectTimeInterval: 30,
            statsReportTimeInterval: 5
        },
    };

    QBApp = {
        appId: 44729,
        authKey: 'ZUy3-tGzEGdGDS9',
        authSecret: 'yQ-NLgKmPkaTvt7'
    };

    QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, CONFIG);

    QB.createSession(function(err, result) {
        //console.log('Session create callback', err, result);
    });

}
