// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var height = $('#inputHeight').val();
    var width = $('#inputWeight').val();
    var grid = '';

    for (row = 0; row < parseInt(height); row++){
        grid += '<tr>';
        for (column = 0; column < parseInt(width); column++){
            grid +=  '<td></td>';
        }
        grid += '</tr>';
    }
    $('#pixelCanvas').html(grid);
};

$( document ).ready(function() {
    $('#sizePicker').submit(function(e){
        e.preventDefault();
        makeGrid();
    });

});

