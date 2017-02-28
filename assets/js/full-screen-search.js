// When the document is ready...
jQuery( document ).ready( function( $ ) {

    // ... display the Full Screen search when:
    // 1. The user focuses on a search field, or
    // 2. The user clicks the Search button
    $( 'form[role=search] input, form[role=search] button' ).on( 'focus, click', function( event ) {
        // Prevent the default action
        event.preventDefault();

        // Display the Full Screen Search
        $( '#full-screen-search' ).fadeIn( 'slow', function() {
            $( this ).addClass( 'open' );
        } );

        // Focus on the Full Screen Search Input Field
        $( '#full-screen-search input' ).focus();
    } );

    // Hide the Full Screen search when the user clicks the close button
    $( '#full-screen-search button.close' ).on( 'click', function( event ) {
        // Prevent the default event
        event.preventDefault();

        // Hide the Full Screen Search
        $( '#full-screen-search' ).fadeOut( 'slow', function() {
            $( this ).removeClass( 'open' );
        } );
    } );

    // Hide the Full Screen search when the user presses the escape key
    $( document ).keydown( function( event ) {
        // Don't do anything if the Full Screen Search is not displayed
        if ( ! $( '#full-screen-search' ).hasClass( 'open' ) ) {
            return;
        }

        // Don't do anything if the user did not press the escape key
        if ( event.keyCode != 27 ) {
            return;
        }

        // Prevent the default event
        event.preventDefault();

        // Hide the Full Screen Search
        $( '#full-screen-search' ).fadeOut( 'slow', function() {
            $( this ).removeClass( 'open' );
        } );
    } );

} );