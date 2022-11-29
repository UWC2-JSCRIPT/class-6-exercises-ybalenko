$(document).ready(function () {

    // Adds new list item to <ul>

    const addListItem = function (e) {
        e.preventDefault();
        const text = $('input').val();
        const $listItems = $('<li>');
        const $span = $('<span>');
        const $a = $('<a>');
        $a.attr('class', 'delete');
        $a.text("Delete");
        $span.text(text);
        $span.on('click', function (e) {
            $(e.target).parent().attr('class', 'done');   // Toggles "done" class on <li> element
        });
        $a.on('click', function (e) {
            $(e.target).parent().remove();  // Delete element when delete link clicked
        });
        $listItems.append($span);
        $listItems.append($a);
        $('ul').append($listItems);
    };

    // add listener for add
    $('[class=add-item]').on('click', addListItem);


});
