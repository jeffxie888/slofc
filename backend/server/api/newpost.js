'use strict';
const Async = require('async');
const AuthPlugin = require('../auth');
const Boom = require('boom');
const Joi = require('joi');
const fs = require('fs');


const internals = {};


internals.applyRoutes = function (server, next) {

    const Account = server.plugins['hapi-mongo-models'].Account;
    const User = server.plugins['hapi-mongo-models'].User;
    const Status = server.plugins['hapi-mongo-models'].Status;


    server.route({
        method: 'POST',
        path: '/newpost',
        config: {

            payload: {
                output: 'stream',
                parse: true,
                allow: 'multipart/form-data'
            },

            handler: function (request, reply) {
                var data = request.payload;
                if (data.file) {
                    var name = data.file.hapi.filename;
                    var path = __dirname + "/../uploads/" + name;
                    var file = fs.createWriteStream(path);

                    file.on('error', function (err) { 
                        console.error(err) 
                    });

                    data.file.pipe(file);

                    data.file.on('end', function (err) { 
                        var ret = {
                            filename: data.file.hapi.filename,
                            headers: data.file.hapi.headers
                        }
                        reply(JSON.stringify(ret));
                    })
                }
            }
        }
    });

    next();

};


exports.register = function (server, options, next) {

    server.dependency(['hapi-mongo-models'], internals.applyRoutes);

    next();
};


exports.register.attributes = {
    name: 'newpost'
};

