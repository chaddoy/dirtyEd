directory.Employee = Backbone.Model.extend({

    urlRoot:"http://localhost:3000/employees",

    initialize:function () {
        this.reports = new directory.EmployeeCollection();
        this.reports.url = this.urlRoot + "/" + this.id + "/reports";
    }

});

directory.EmployeeCollection = Backbone.Collection.extend({

    model: directory.Employee,
    url:"http://localhost:3000/employees"

});

directory.BasicField = Backbone.Model.extend({

    urlRoot:"http://localhost:3000/basic-fields-only",

    initialize:function () {
        this.reportsBasic = new directory.BasicFieldCollection();
    }

});

directory.BasicFieldCollection = Backbone.Collection.extend({

    model: directory.BasicField,

    url:"http://localhost:3000/basic-fields-only"

});

directory.CustomField = Backbone.Model.extend({

    urlRoot:"http://localhost:3000/custom-fields-only",

    initialize:function () {
        this.reportsCBasic = new directory.CustomFieldCollection();
    }

});

directory.CustomFieldCollection = Backbone.Collection.extend({

    model: directory.CustomField,

    url:"http://localhost:3000/custom-fields-only"

});