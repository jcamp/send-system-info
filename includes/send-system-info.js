(function($) {
	$( document ).ready( function() {
		/**
		 * Generates new Remote View URL
		 * and displays it on the page
		 */
		$( 'input[name="generate-new-url"]' ).on( 'click', function( event ) {
			event.preventDefault();
			$.ajax({
				type : 'post',
				dataType : 'json',
				url : systemInfoAjax.ajaxurl,
				data : { action : 'regenerate_url' },
				success : function( response ) {
					$( '.ssi-url-text' ).html( response );
					$( '.ssi-url-text-link' ).attr( 'href', response );
				},
				error : function( j, t, e ) {
					console.log( j.responseText );
				}
			});
		});
	});
})(jQuery);
