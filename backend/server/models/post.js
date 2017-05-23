'use strict';
const Joi = require('joi');
const MongoModels = require('mongo-models');
const User = require('./user');
const StatusEntry = require('./status-entry');


class Post extends MongoModels {
    static create(id, title, location, description, url, callback) {
        User.findById(id, (err, user) => {
            if (err) {
                return callback(err);
            }

            if (!user) {
                return callback('User document not found.');
            }

            const document = {
                user: {
                    id: user._id,
                    username: user.username
                },
                title: title,
                location: location,
                description: description,
                url: url,
                timeCreated: new Date()
            };

            this.insertOne(document, (err, docs) => {
                if (err) {
                    return callback(err);
                }

                callback(null, docs[0]);
            });
        });        
    }

    static findByUsername(username, callback) {
        const query = { 'user.username': username.lowercase() };
        this.find(query, callback);
    }

    static deleteByPostId(id, callback) {
    }

    static getAllPosts(callback) {
        this.find({}, callback);
    }

    constructor(attrs) {
        super(attrs);
    }

}


Post.collection = 'posts';

Post.schema = Joi.object().keys({
    _id: Joi.object(),
    user: Joi.object().keys({
        id: Joi.string().required(),
        username: Joi.string().lowercase().required()

    }),
    title: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string(),
    url: Joi.string().required(),
    timeCreated: Joi.date()
});

Post.indexes = [
    {key: { 'user.id': 1 }},
    {key: { 'user.username': 1}}
]


module.exports = Post;
