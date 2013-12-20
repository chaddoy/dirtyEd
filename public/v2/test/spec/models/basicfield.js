(function() {
	'use strict';

	var root = this;

	root.define([
		'models/basicfield'
		],
		function( Basicfield ) {

			describe('Basicfield Model', function () {

				it('should be an instance of Basicfield Model', function () {
					var basicfield = new Basicfield();
					expect( basicfield ).to.be.an.instanceof( Basicfield );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );