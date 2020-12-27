const mongoose = require('mongoose');
const Schema = mongoose.Schema

const articleSchema = mongoose.Schema({// Schema declares type of its value.
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength:30
    },
    description: {
        type: String,
        maxlength:50
    },
    article: {
        type:String
    }
},{timestamps:true});


const Article = mongoose.model('Article',articleSchema);

module.exports = { Article };