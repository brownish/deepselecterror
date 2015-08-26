'use strict';

var async = require('async');
var Site = require('./site.model');
var SiteForm = require('./siteform.model');
var SiteData = require('./site.data');
var SiteFormData = require('./siteform.data.json');
SiteForm.find().remove(function () {
    console.log('Deleting and Creating Site Form Terms');
    SiteForm.create(SiteFormData.data, function() {
        Site.create(SiteData.data);
    });
});