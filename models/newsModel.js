var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newsModelSchema = new Schema({

    text: {
    type: String,
    required: true
  	},

  	link: {
    type: String,
    required: true
  	}

});

var Article = mongoose.model('Article', newsModelSchema);

module.exports = Article;