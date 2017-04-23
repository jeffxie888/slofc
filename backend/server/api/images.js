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
                    name: 'chair-couch',
                    shortName: 'couch',
                    url: '/images/couch.jpg'
                }, {
                    name: 'chair-chair',
                    shortName: 'chair',
                    url: '/images/chair.jpg'
                }]
            });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'images'
};
