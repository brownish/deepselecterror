'use strict';

var baucis = require('baucis');
var site = require('./site.model'),
    siteForm = require('./siteform.model');


module.exports = function(app) {
    var taxonomyAPI = baucis();
    baucis.rest('Site');
    baucis.rest('SiteForm');
    app.use('/api/v1', baucis());
};


