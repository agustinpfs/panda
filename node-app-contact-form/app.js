var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

// var contact = require('./routes/contact');
var contactt = require('./routes/contactt');
//var oneDay = 86400000;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(express.compress());
// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + './public', {
    //maxAge: oneDay
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/contact', contact);
app.use('/contactt', contactt);



// app.post('/contact', function (req, res) {

//         'use strict';

//         var mailOpts, smtpTrans;

//         smtpTrans = nodemailer.createTransport('SMTP', {
//             service: "Gmail",
//             // host: 'smtp.server.com',
//             auth: {
//                 user: "pandawebs@gmail.com",
//                 pass: "xxxxxxxxxx"
//             }
//         });

//         mailOpts = {
//             from: '<pandawebs@gmail.com>',
//             to: 'pandawebs@gmail.com',
//             subject: 'Contact Form',
//             text: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + req.body.message
//         };

//         smtpTrans.sendMail(mailOpts, function (error, response) {

//             if (error) {
//                 res.render('contact', {
//                     title: 'Contact Error',
//                     msg: 'Error occured, message not sent.',
//                     err: true,
//                     page: 'contact'
//                 });
//             } else {
//                 res.render('contact', {
//                     title: 'Contact Sent...',
//                     msg: 'Message sent! Thank you.',
//                     err: false,
//                     page: 'contact'
//                 });
//             }
//         });
//     });

app.post('/contactt', function (req, res) {

        'use strict';

        var mailOpts, smtpTrans;

        smtpTrans = nodemailer.createTransport('SMTP', {
            service: "Gmail",
            // host: 'smtp.server.com',
            auth: {
                user: "pandawebs@gmail.com",
                pass: "xxxxxxxxxx"
            }
        });

        mailOpts = {
            from: '<pandawebs@gmail.com>',
            to: 'pandawebs@gmail.com',
            subject: 'Contact Form',
            text: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + req.body.message
        };

        smtpTrans.sendMail(mailOpts, function (error, response) {

            if (error) {
                res.render('contactt', {
                    title: 'Contact Error',
                    msg: 'Error occured, message not sent.',
                    err: true,
                    page: 'contactt'
                });
            } else {
                res.render('contactt', {
                    title: 'Contact Sent...',
                    msg: 'Message sent! Thank you.',
                    err: false,
                    page: 'contactt'
                });
            }
        });
    });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('404 Page Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// for modulus deployments
var port = process.env.PORT || 3000;
app.listen(port);



module.exports = app;
