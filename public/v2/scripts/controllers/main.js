define([
        'backbone',
        'application',
        'views/sample',
        'models/modelProfile',
        'views/item/editProfile',
        'models/employee',
        'models/basicfield',
        'models/customfield'
    ],
    function(Backbone, App, samp, mod, empView, empMod, bascMod, custMod) { //there is a posibility that parameter list will bloat, nevermind this
        'use strict';

        return {
            'sample': function(id) {
                App.layoutObj.contentx.show(new samp({
                    model: new mod(),
                    id: id
                }));
            },

            'findEmployee': function(id) {
                var tempMod = new empMod();
                tempMod.url = tempMod.url + id;
                tempMod.fetch({
                    success: function(data) {

                        (new bascMod()).fetch({
                            success: function(data2) {

                                (new custMod()).fetch({
                                    success: function(data3) {
                                        
                                        App.layoutObj.contentx.show(new empView({
                                            model: data,
                                            model2: data2,
                                            model3: data3
                                        }));
                                    }
                                });
                            }
                        });
                    }
                });
            }
        };

    });