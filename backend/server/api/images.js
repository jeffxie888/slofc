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
                    shortName: 'couch',
                    url: '/images/couch.jpg'
                }, {
                    name: 'Wood chair',
                    shortName: 'chair',
                    url: '/images/chair.jpg'
                }, {
                    name: 'Men\'s shirt',
                    shortName: 'shirt',
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
