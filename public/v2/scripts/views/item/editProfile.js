define([
        'backbone',
        'hbs!tmpl/editProfile_tmpl'
    ],
    function(Backbone, EditprofileTmpl) {
        'use strict';

        /* Return a ItemView class definition */
        return Backbone.Marionette.ItemView.extend({

            initialize: function(option) {},

            template: EditprofileTmpl,

            templateHelpers: function() {
                var _modelEmp = this.model.attributes[0];
                var _modelEmpField = _modelEmp.field;
                var _modelBasic = this.options.model2.attributes;
                var _modelCust = this.options.model3.attributes;

                var _photo = "../" + _modelEmp.photo;
                var _fullName = _modelEmp.fullName;
                var _position = '';
                var _username = '';
                var _basicField = [];
                var _customField = [];
                var _values = [];

                for (var i in _modelEmpField)
                    _values.push(_modelEmpField[i]);

                for (var i in _modelBasic) {
                    var innerLbl = _modelBasic[i].label;
                    var innerVals = _modelBasic[i].values;
                    var innerType = _modelBasic[i].fieldType;
                    var isEditable = _modelBasic[i].isEditable;
                    var innerData = null;
                    var multVals = [];

                    for (var j in _values) {
                        if (_values[j].objectID == _modelBasic[i]._id){
                            innerData = _values[j];
                            if(_modelBasic[i].label == 'Job Position')
                            	_position = _values[j].assignedValue[0];
                            else if(_modelBasic[i].label == 'Username')
                            	_username = _values[j].assignedValue[0];
                        }
                    }

                    var _value = (null != innerData ? innerData.assignedValue[0] : innerVals[0]);

                    for (var j in innerVals)
                        multVals.push({
                            option: innerVals[j],
                            active: _value == innerVals[j] ? ' active' : (null == innerData && j == 0 ? 'active' : ''),
                            selected: _value == innerVals[j] ? 'selected' : ''
                        });

                    _basicField.push({
                        label: innerLbl,
                        value: _value,
                        isTextField: innerType == 1,
                        isTextArea: innerType == 2,
                        isDropDown: innerType == 3,
                        isRadio: innerType == 4,
                        isCheckBox: innerType == 5,
                        isEditable: isEditable,
                        isRequired: _modelBasic[i].isRequired && innerType != 4 && isEditable ? 'required' : '',
                        _id : _modelBasic[i]._id,
                        multVal: multVals
                    });
                }
                for (var i in _modelCust) {
                    var innerLbl = _modelCust[i].label;
                    var innerVals = _modelCust[i].values;
                    var innerType = _modelCust[i].fieldType;
                    var isEditable = _modelCust[i].isEditable;
                    var innerData = null;
                    var multVals = [];

                    for (var j in _values) {
                        if (_values[j].objectID == _modelCust[i]._id)
                            innerData = _values[j];
                    }

                    var _value = (null != innerData ? innerData.assignedValue[0] : innerVals[0]);

                    for (var j in innerVals)
                        multVals.push({
                            option: innerVals[j],
                            active: _value == innerVals[j] || (innerType == 4 && null == innerData && j == 0) ? ' active' : '',
                            selected: _value == innerVals[j] ? 'selected' : ''
                        });

                    _customField.push({
                        label: innerLbl,
                        value: _value,
                        isTextField: innerType == 1,
                        isTextArea: innerType == 2,
                        isDropDown: innerType == 3,
                        isRadio: innerType == 4,
                        isCheckBox: innerType == 5,
                        isEditable: isEditable,
                        isRequired: _modelCust[i].isRequired && innerType != 4 && isEditable ? 'required' : '',
                        _id: _modelCust[i]._id,
                        multVal: multVals
                    });
                }

                return {
                    photo: _photo,
                    fullName: _fullName,
                    position: _position,
                    uname: _username,
                    basicFields: _basicField,
                    customField: _customField
                }
            },

            serializeData: function() {
                return {
                    model1: this.model.toJSON(),
                    model2: this.options.model2.toJSON(),
                    model3: this.options.model3.toJSON()
                };
            },

            /* ui selector cache */
            ui: {},

            /* Ui events hash */
            events: {
            	'click .btn-primary' : 'saveEdit'
            },

            'saveEdit' : function(ev){
            	var istrue = true;
            	var body = $(ev.target).closest('body');
            	body.find('table td.required').each(function(){
            		var obj = $(this).find('.poll').val()
            		console.log(obj);
            		console.log(obj === null || obj.match(/^ *$/) !== null);
            		if(obj === null || obj.match(/^ *$/) !== null){
            			$(this).find('.form-group').addClass('error')
            			$(this).find('.form-group').find('label').html('Please fill up empty field.')
            			istrue = false;
            		}
            	})

            	if(istrue)
            		window.location.href = "../#profile/" + body.find('#uname').val();
            },

            /* on render callback */
            onRender: function() {}
        });

    });