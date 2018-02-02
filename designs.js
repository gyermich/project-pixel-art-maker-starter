function makeGrid() {
    var height = parseInt($('#inputHeight').val());
    var width = parseInt($('#inputWeight').val());
    var grid = '';

    while ( height > 0 ){
        grid += '<tr>';
        for (column = 0; column < width; column++){
            grid += '<td></td>';
        };
        grid += '</tr>';
        height --;
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

