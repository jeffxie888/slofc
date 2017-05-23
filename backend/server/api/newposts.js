'use strict';
const Async = require('async');
const AuthPlugin = require('../auth');
const Boom = require('boom');
const Joi = require('joi');
const fs = require('fs');
const uuidV4 = require('uuid/v4');


const internals = {};


internals.applyRoutes = function (server, next) {

    const Account = server.plugins['hapi-mongo-models'].Account;
    const User = server.plugins['hapi-mongo-models'].User;
    const Status = server.plugins['hapi-mongo-models'].Status;
    const Post = server.plugins['hapi-mongo-models'].Post;

    server.route({
        method: 'POST',
        path: '/newposts/{username}',
        config: {
            pre: [{
                assign: 'user',
                method: function (request, reply) {
                    const username = request.params.username;
                    User.findByUsername(username, (err, user) => {
                        if (err) {
                            return reply(err);
                        }
                        reply(user);
                    })
                }
            }],


            payload: {
                output: 'stream',
                parse: true,
                allow: 'multipart/form-data'
            },

            handler: function (request, reply) {
                const data = request.payload;
                const userid = request.pre.user._id;
                const username = request.pre.user.username;
                const title = request.payload.title;
                const location = request.payload.location;
                const description = request.payload.description;
                const tasks = {};

                if (data.file && userid && username) {
                    var name = data.file.hapi.filename;
                    var uuid = uuidV4();
                    var url = '/uploads/' + uuid; 
                    var path = __dirname + "/../uploads/" + uuid;

                    tasks.saveImage = function(done) {
                        var file = fs.createWriteStream(path);

                        file.on('error', function (err) {
                            done(err);
                        });

                        data.file.pipe(file);

                        data.file.on('end', function (err) { 
                            var ret = {
                                filename: data.file.hapi.filename,
                                headers: data.file.hapi.headers
                            }
                            done(null, ret);
                        })
                    };

                    tasks.savePost = function(done) {
                        Post.create(userid, title, location, description, url, done);
                    };

                    Async.auto(tasks, (err, results) => {
                        if (err) {
                            return reply(err); 
                        }

                        reply({success: true});
                    });
                } else {
                    reply("Error with parameters");
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
    name: 'newposts'
};

