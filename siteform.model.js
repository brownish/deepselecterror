'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SiteFormSchema = new Schema({
  type: {type: String},
  name: String,
  short_description: String,
  long_description: String,
  sites: [{ type: Schema.Types.ObjectId, ref: 'Site' }]
});

module.exports = mongoose.model('SiteForm', SiteFormSchema);