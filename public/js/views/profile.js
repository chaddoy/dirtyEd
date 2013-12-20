directory.ProfileView = Backbone.View.extend({

    events: {
	'click a[href="#modal"]': 'showDialogBox',
	'click button.proceed': 'proceedAction'
    },

    initialize: function() {
	var self = this;

	if (this.model) {

	    console.log(this.model.user);

	    if(!this.model.user.attributes.isActive) {
	      top.location = '#';
	    }

	    this.model.user.attributes.field.forEach(function(field) {

		// console.log(self.getFieldAttr(field.objectID));
		var fieldAttributes = self.getFieldAttr(field.objectID);
		if (fieldAttributes) {
		    field.attributes = fieldAttributes;
		}
		// console.log(field);
	    });

	    this.model.user.attributes.jobPosition = this.getJobPosition();


	}
    },

    render: function() {

	if (this.model) {
	    this.$el.html(this.template(this.model.user.attributes));
	    $('#modal').modal('show');
	}

	return this;
    },

    getFieldAttr: function(fieldID) {
	var data;

	this.model.fields.models.forEach(function(field) {
	    if (field.attributes._id === fieldID) {
		data = field.attributes;
	    }
	});
	return data;
    },

    getJobPosition: function() {
	var data;

	this.model.user.attributes.field.forEach(function(field) {

	    if ((field.attributes) && (field.attributes.label === 'Job Position')) {
		data = field.assignedValue[0];
	    }
	});
	return data;
    },

    showDialogBox: function(e) {
      e.preventDefault();
      var title       = $('.modalTitle'),
	  body        = $('.modal-body'),
	  proceedBtn  = $('.proceed'),
	  cancelBtn   = $('.cancel');

      switch(e.target.id) {
	case 'deleteAccount':
	  title.html('Delete Account');
	  body.find('p').html('Are you sure you want to delete this account?');
	  proceedBtn.attr('id', 'delete');
	  proceedBtn.html('Yes');
	  cancelBtn.html('No');
	  break;
      }
    },

    proceedAction: function(e) {
      var title       = $('.modalTitle'),
	  body        = $('.modal-body'),
	  proceedBtn  = $('.proceed'),
	  cancelBtn   = $('.cancel'),
	  field       = [],
	  self        = this;

      proceedBtn.prop('disabled', true);

      switch(e.target.id) {
	case 'delete':
	  this.model.user.attributes.field.forEach(function(data) {
	    delete data['attributes'];
	    field.push(data);
	  });
	  this.model.user.attributes.field = field;
	  this.model.user.attributes.isActive = false;

	  console.log(this.model.user.attributes);
	  // this.model.user.set(this.model.user.attributes);
	  this.model.user.save(this.model.user.attributes, {
	    success: function() {
	      title.html('Account was successful deleted.').css('color', '#5cb85c');
	      body.remove();
	      proceedBtn.remove();
	      cancelBtn.html('Close');

	      setTimeout(function() {
		top.location = '/#';
	      }, 2000);
	    }
	  });
	  break;

	case 'reset':
	  break;
      }
    },

    preventDefault: function(e) {
	e.preventDefault();
    }

});