$(document).ready(function () {

    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const $a = $('<a>');
    $a.text('Buy Now!');
    $a.attr('id', 'cta');
    $('main').append($a);

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $img = $('img');
    const imageColor = $img.data('color');
    console.log(imageColor);

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"

    const $listItems = $('li');
    $listItems[2].className = 'highlight';

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    $('p').remove();

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the "Buy Now!" link should be removed 
    // and replaced with text that says "Added to cart"

    $('a').on('click', function (e) {
        const $span = $('<span>')
        $('main').append($span);
        $span.text('Added to cart!');
        $a.remove()
    })
});










