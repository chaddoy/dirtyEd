(function() {
	'use strict';

	var root = this;

	root.define([
		'models/customfield'
		],
		function( Customfield ) {

			describe('Customfield Model', function () {

				it('should be an instance of Customfield Model', function () {
					var customfield = new Customfield();
					expect( customfield ).to.be.an.instanceof( Customfield );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );