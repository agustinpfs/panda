// var express = require('express');
// var path = require('path');
//var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

// var contact = require('contact');
//var oneDay = 86400000;
// var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

//app.use(express.compress());
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(express.static(__dirname + './public', {
//     //maxAge: oneDay
// }));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



    var mailOpts, smtpTrans;

    smtpTrans = nodemailer.createTransport('SMTP', {
        service: "Gmail",
        // host: 'smtp.server.com',
        auth: {
            user: "aguja2013@gmail.com",
            pass: "calaboix"
        }
    });

    mailOpts = {
        from: '<aguja2013@gmail.com>',
        to: 'aguja2013@gmail.com',
        subject: 'Contact Form',
        text: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + req.body.message
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {

        if (error) {
            res.render('contact', {
                title: 'Contact Error',
                msg: 'Error occured, message not sent.',
                err: true,
                page: 'contact'
            });
        } else {
            res.render('contact', {
                title: 'Contact Sent...',
                msg: 'Message sent! Thank you.',
                err: false,
                page: 'contact'
            });
        }
    });
