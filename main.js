let squareViewWidth = 5;
let squareWidth = $(window).width() / (100/ squareViewWidth);
let colors = ['yellow', '#000', '#000','#000','#000','#000','#000','#ff8686', '#57baff']

$( document ).ready(fillScreen);

let scrolling = false;
$( document).scroll(function(){
    if (!scrolling){
        pickColor();
        scrolling = true;
        setTimeout(function() {
            scrolling = false;
        }, 500);
    }


});

function fillScreen() {
    // if (window.screen.width < 551) {
    //     squareViewWidth = 20;
    // }
    pickColor();

    let amount = $(window).height() / squareWidth;

    for (var i=0; i < amount; i++) {
        addRow(i);
    }

    flipRandomSquares(amount * 12);
}

function pickColor(){
    let colorIndex = Math.floor(Math.random() * colors.length)

    var r = document.querySelector(':root');
    r.style.setProperty('--state-2-color', colors[colorIndex]);
}

function flipRandomSquares(amount) {
    let squares = $('.square');
    let index;

    for (let i = 0; i <amount; i++){
        index = Math.floor(Math.random() * squares.length)
        flip($(squares[index]));
    }
}

function addRow(i) {
    let amount = 100 / squareViewWidth;
    let row = $('<div></div>');
    row.addClass('row');
    row.data('number', i);
    for (var i=0; i < amount; i++) {
        createSquare(row, i);
    }

    $('.container').append(row);
}

function createSquare(row, i){
    let sq = $('<div></div>');
    sq.addClass('square');
    sq.addClass('state-1');
    sq.data('number', i);
    sq.mouseenter(function() {flip(sq)});

    let innerCircle = $('<div></div>');
    innerCircle.addClass('full');
    sq.append(innerCircle);

    row.append(sq);
}

function flip(sq) {
    if (sq.hasClass('state-1')) {
        sq.removeClass('state-1');
        sq.addClass('state-2');
    } else {
        sq.removeClass('state-2');
        sq.addClass('state-1');
    }
}
