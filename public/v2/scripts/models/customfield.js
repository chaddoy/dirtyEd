define([
        'backbone'
    ],
    function(Backbone) {
        'use strict';

        /* Return a model class definition */
        return Backbone.Model.extend({
            initialize: function() {
                console.log("initialize a Customfield model");
            },

            defaults: {},

            idAttribute: "_id",

            url: '/custom-fields/0'

        });
    });