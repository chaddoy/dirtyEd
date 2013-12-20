define([
        'backbone',
        'controllers/main'
    ],
    function(Backbone, controller) {
        'use strict';

        var Router = Backbone.Marionette.AppRouter.extend({

            appRoutes: {
                'sample/:id': 'sample',
                'employee/:id': 'findEmployee'
            }
        });

        return new Router({
            controller: controller
        });
    });