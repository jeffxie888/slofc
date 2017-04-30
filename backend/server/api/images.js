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
                    name: 'Blue Couch',
                    location: '449 N. Chorro Street',
                    url: '/images/couch.jpg',
                    time: '12/15/1988'
                }, {
                    name: 'Wood Chair',
                    location: '324 N. Chorro Street',
                    url: '/images/chair.jpg',
                    time: '12/15/1988'
                }, {
                    name: 'Men\'s Shirt',
                    location: '123 Higuera Street',
                    url: '/images/shirt.jpg',
                    time: '12/15/1988'
                }, {
                    name: 'Size 10 Dress Shoes',
                    location: '1230 Monte Vista Place',
                    url: '/images/sheos.jpg',
                    time: '12/15/1988'
                }, {
                    name: 'Desk',
                    location: '3385 Ivan Way',
                    url: '/images/desk.jpeg',
                    time: '12/15/1988'
                }, {
                    name: 'Men\'s Shirt',
                    location: '888 Apple Way',
                    url: '/images/shirt.jpg',
                    time: '12/15/1988'
                }, {
                    name: 'Men\'s Shirt',
                    location: '111 Crazy Lane',
                    url: '/images/shirt.jpg',
                    time: '12/15/1988'
                }, {
                    name: 'Men\'s Shirt',
                    location: '111 Crazy Lane',
                    url: '/images/shirt.jpg',
                    time: '12/15/1988'
                }, {
                    name: 'Men\'s Shirt',
                    location: '111 Crazy Lane',
                    url: '/images/shirt.jpg',
                    time: '12/15/1988'
                }, {
                    name: 'Men\'s Shirt',
                    location: '111 Crazy Lane',
                    url: '/images/shirt.jpg',
                    time: '12/15/1988'
                }]
            });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'images'
};
