// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var height = $('#inputHeight').val();
    var width = $('#inputWidth').val();
    var grid = ''
        for (row = 0; row > parseInt(height); row++){
            grid += '<tr>';
            for (column = 0; parseInt(column) > 0; column++){
                grid +=  '<td></td>';
            }
            grid += '</tr>';
        };
    console.log(grid);
    $('#pixelCanvas').append(grid);

};

$( document ).ready(function() {

    $('#sizePicker').submit(makeGrid());

});

