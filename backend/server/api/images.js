/**
 * Created by jxie on 4/22/17.
 */
'use strict';

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/images',
        handler: function (request, reply) {
            reply({
                images: [{
                    name: 'blue couch',
                    location: '449 N. Chorro Street',
                    url: '/images/couch.jpg'
                }, {
                    name: 'Wood chair',
                    location: '324 N. Chorro Street',
                    url: '/images/chair.jpg'
                }, {
                    name: 'Men\'s shirt',
                    location: '123 Higuera Street',
                    url: '/images/shirt.jpg'
                }, {
                    name: 'size 10 dress shoes',
                    location: '1230 Monte Vista Place',
                    url: '/images/sheos.jpg'
                }, {
                    name: 'Desk',
                    location: '3385 Ivan Way',
                    url: '/images/desk.jpeg'
                }, {
                    name: 'Men\'s shirt',
                    location: '888 Apple Way',
                    url: '/images/shirt.jpg'
                }, {
                    name: 'Men\'s shirt',
                    location: '111 Crazy Lane',
                    url: '/images/shirt.jpg'
                }]
            });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'images'
};
