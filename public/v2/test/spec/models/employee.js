(function() {
	'use strict';

	var root = this;

	root.define([
		'models/employee'
		],
		function( Employee ) {

			describe('Employee Model', function () {

				it('should be an instance of Employee Model', function () {
					var employee = new Employee();
					expect( employee ).to.be.an.instanceof( Employee );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );