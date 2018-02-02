// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var height = parseInt($('#inputHeight').val());
    var width = parseInt($('#inputWeight').val());
    var grid = '';

    for (row = 0; row < height; row++){
        grid += '<tr>';
        for (column = 0; column < width; column++){
            grid +=  '<td></td>';
        }
        grid += '</tr>';
    }
    $('#pixelCanvas').html(grid);

    $('td').mousedown(function(e){
        var color = $('#colorPicker').val();
        $( e.target ).css('background-color', color);
    })
};

$( document ).ready(function() {
    $('#sizePicker').submit(function(e){
        e.preventDefault();
        makeGrid();
    });



});

