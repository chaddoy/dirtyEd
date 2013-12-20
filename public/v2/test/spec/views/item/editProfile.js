(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/editProfile'
		],
		function( Editprofile ) {

			describe('Editprofile Itemview', function () {

				it('should be an instance of Editprofile Itemview', function () {
					var editProfile = new Editprofile();
					expect( editProfile ).to.be.an.instanceof( Editprofile );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );