var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newsModelSchema = new Schema({

    title: { type: String, unique: true },
    image: { type: String, unique: true },
    link: { type: String, unique: true },
    text: { type: String, unique: true }

});

var Article = mongoose.model('Article', newsModelSchema);

module.exports = Article;