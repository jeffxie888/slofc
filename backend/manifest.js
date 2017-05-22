'use strict';
const Confidence = require('confidence');
const Config = require('./config');


const criteria = {
    env: process.env.NODE_ENV
};


const manifest = {
    $meta: 'This file defines the slofc.',
    server: {
        debug: {
            request: ['error']
        },
        connections: {
            routes: {
                security: true
            }
        }
    },
    connections: [{
        port: Config.get('/port/web'),
        labels: ['web']
    }],
    registrations: [
        {
            plugin: 'hapi-auth-basic'
        },
        {
            plugin: 'lout'
        },
        {
            plugin: 'inert'
        },
        {
            plugin: 'vision'
        },
        {
            plugin: {
                register: 'hapi-mongo-models',
                options: {
                    mongodb: Config.get('/hapiMongoModels/mongodb'),
                    models: {
                        Account: './server/models/account',
                        AdminGroup: './server/models/admin-group',
                        Admin: './server/models/admin',
                        AuthAttempt: './server/models/auth-attempt',
                        Session: './server/models/session',
                        Status: './server/models/status',
                        User: './server/models/user'
                    },
                    autoIndex: Config.get('/hapiMongoModels/autoIndex')
                }
            }
        },
        {
            plugin: './server/auth'
        },
        {
            plugin: './server/mailer'
        },
        {
            plugin: './server/api/accounts'
        },
        {
            plugin: './server/api/admin-groups'
        },
        {
            plugin: './server/api/admins'
        },
        {
            plugin: './server/api/auth-attempts'
        },
        {
            plugin: './server/api/contact'
        },
        {
            plugin: './server/api/index'
        },
        {
            plugin: './server/api/login'
        },
        {
            plugin: './server/api/logout'
        },
        {
            plugin: './server/api/sessions'
        },
        {
            plugin: './server/api/signup'
        },
        {
            plugin: './server/api/images'
        },
        {
            plugin: './server/api/statuses'
        },
        {
            plugin: './server/api/users'
        },
        {
            plugin: './server/api/newpost'
        }
    ]
};


const store = new Confidence.Store(manifest);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
