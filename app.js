/** */
(function() {

// input 1
var copyButton1 = document.querySelector('.copy1 button');
var copyInput1 = document.querySelector('.copy1 input');
copyButton1.addEventListener('click', function(e) {
    e.preventDefault();
    var text = copyInput1.select();
    document.execCommand('copy');
});

copyInput1.addEventListener('click', function() {
    this.select();
});
  
// input 2
var copyButton2 = document.querySelector('.copy2 button');
var copyInput2 = document.querySelector('.copy2 input');
copyButton1.addEventListener('click', function(e) {
    e.preventDefault();
    var text = copyInput2.select();
    document.execCommand('copy');
});

copyInput2.addEventListener('click', function() {
    this.select();
});

})();
