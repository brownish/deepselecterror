'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    relationship = require("mongoose-relationship");

 var SiteSchema = new mongoose.Schema({
    site_number: String,
    number: Number,
    alpha: String,
    name: String,
    site_form: {
        first_date: Number,
        date_survey: Date,
        field_number: String,
        acres: Number,
        descriptions: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        functions: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        mounds: Number,
        disturbance: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        periods: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            confidence: String,
            original_text: String
        }],
        traditions: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            confidence: String,
            original_text: String
        }],
        contexts: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            confidence: String,
            original_text: String
        }],
        dating_methods: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        ceramic_artifacts: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        lithic_artifacts: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        biological_artifacts: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        other_artifacts: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        exotic_artifacts: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        major_drainage: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        physiographic_settings: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        owner_types: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        work_types: [{
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        }],
        reference: String,
        change: String,
        national_register: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        xnr: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        cef: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        sef: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        doe: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        burial_authenticated: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        location_confidence: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        in_date: Date,
        update: Date,
        notes: String,
        streg: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        digitized: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        alpha: Boolean,
        comments: String,
        data_region: {
            value: {type: Schema.Types.ObjectId, ref: 'SiteForm', childPath: 'sites'},
            original_text: String
        },
        verified: Date,
        verified_by: String,
        updated: Date,
        editor: String,
        edit_date: Date,
        pwa_comment: String,
        georeferenced: Boolean,
        georeferenced_by: String,
        qaqc: Boolean,
        qaqc_by: String,
        scanned: Boolean,
        scanned_by: String,
        digitized_by: String,
        missing: Boolean,
        added: Boolean,
        added_by: String
    }

 });

var relationships = [
    SiteSchema.path('site_form.functions').schema.path('value'),
    SiteSchema.path('site_form.descriptions').schema.path('value'),
    SiteSchema.path('site_form.periods').schema.path('value'),
    SiteSchema.path('site_form.traditions').schema.path('value'),
    SiteSchema.path('site_form.contexts').schema.path('value'),
    SiteSchema.path('site_form.dating_methods').schema.path('value'),
    SiteSchema.path('site_form.ceramic_artifacts').schema.path('value'),
    SiteSchema.path('site_form.lithic_artifacts').schema.path('value'),
    SiteSchema.path('site_form.biological_artifacts').schema.path('value'),
    SiteSchema.path('site_form.other_artifacts').schema.path('value'),
    SiteSchema.path('site_form.exotic_artifacts').schema.path('value'),
    SiteSchema.path('site_form.major_drainage.value'),
    SiteSchema.path('site_form.physiographic_settings').schema.path('value'),
    SiteSchema.path('site_form.owner_types').schema.path('value'),
    SiteSchema.path('site_form.work_types').schema.path('value'),
    SiteSchema.path('site_form.national_register.value'),
    SiteSchema.path('site_form.xnr.value'),
    SiteSchema.path('site_form.cef.value'),
    SiteSchema.path('site_form.sef.value'),
    SiteSchema.path('site_form.doe.value'),
    SiteSchema.path('site_form.burial_authenticated.value'),
    SiteSchema.path('site_form.location_confidence.value'),
    SiteSchema.path('site_form.streg.value'),
    SiteSchema.path('site_form.data_region.value')
    ];
SiteSchema.plugin(relationship, {relationshipPathName: relationships});
module.exports = mongoose.model('Site', SiteSchema);