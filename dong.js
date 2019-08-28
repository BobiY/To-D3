let currentBlockLeft = 0;
let currentBlockWidth = 0;
let currentBlockHeight = 0;
const paddingLeft = 15;
const paddingTop = 5;
$("li").on("click", function() {
    currentBlockLeft = $(this).position().left;
    console.log(currentBlockLeft);
    currentBlockWidth = $(this).outerWidth();
    currentBlockHeight = $(this).outerHeight();
    draw(currentBlockLeft - 5, currentBlockWidth, currentBlockHeight);
});