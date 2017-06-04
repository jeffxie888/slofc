/**
 * Created by jxie on 4/22/17.
 */
'use strict';
const Async = require('async');
const AuthPlugin = require('../auth');
const Boom = require('boom');
const Joi = require('joi');
const fs = require('fs');
const uuidV4 = require('uuid/v4');

exports.register = function (server, options, next) {
    const Post = server.plugins['hapi-mongo-models'].Post;

    server.route({
        method: 'GET',
        path: '/images',
        handler: function (request, reply) {
            Post.getAllPosts((err, result) => {
                if (err || !result) {
                    reply(err);
                }

                var images = [];
                for (var i=result.length-1; i>=0; i--) {
                    var post = result[i];
                    images.push({
                        name: post.title,
                        location: post.location,
                        url: post.url,
                        time: post.timeCreated
                    });
                }

                reply({images: images});

                // reply({
                //     images: [{
                //         name: 'Blue Couch',
                //         location: '449 N. Chorro Street',
                //         url: '/images/02809924-9da4-4106-887e-f9ff9c0e01c8.jpg',
                //         time: '12/15/1988'
                //     }, {
                //         name: 'Wood Chair',
                //         location: '324 N. Chorro Street',
                //         url: '/images/chair.jpg',
                //         time: '12/15/1988'
                //     }, {
                //         name: 'Men\'s Shirt',
                //         location: '123 Higuera Street',
                //         url: '/images/shirt.jpg',
                //         time: '12/15/1988'
                //     }, {
                //         name: 'Size 10 Dress Shoes',
                //         location: '1230 Monte Vista Place',
                //         url: '/images/sheos.jpg',
                //         time: '12/15/1988'
                //     }, {
                //         name: 'Desk',
                //         location: '3385 Ivan Way',
                //         url: '/images/desk.jpeg',
                //         time: '12/15/1988'
                //     }, {
                //         name: 'Men\'s Shirt',
                //         location: '888 Apple Way',
                //         url: '/images/shirt.jpg',
                //         time: '12/15/1988'
                //     }, {
                //         name: 'Men\'s Shirt',
                //         location: '111 Crazy Lane',
                //         url: '/images/shirt.jpg',
                //         time: '12/15/1988'
                //     }, {
                //         name: 'Men\'s Shirt',
                //         location: '111 Crazy Lane',
                //         url: '/images/shirt.jpg',
                //         time: '12/15/1988'
                //     }, {
                //         name: 'Men\'s Shirt',
                //         location: '111 Crazy Lane',
                //         url: '/images/shirt.jpg',
                //         time: '12/15/1988'
                //     }, {
                //         name: 'Men\'s Shirt',
                //         location: '111 Crazy Lane',
                //         url: '/images/shirt.jpg',
                //         time: '12/15/1988'
                //     }]
                // });
            });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'images'
};
