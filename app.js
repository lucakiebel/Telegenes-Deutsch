/** 
 *  https://blog.luca-kiebel.de/Copy-jQuery
 *  © 2017 Luca Kiebel
 */

$(document).ready(function() {
  console.log("init");
  
  // Initialize the tooltip.
  $('#copy-button').tooltip();

  // When the copy button is clicked, select the value of the text box, attempt
  // to execute the copy command, and trigger event to update tooltip message
  // to indicate whether the text was successfully copied.
  $('#copy-button').bind('click', function() {
    var input = document.querySelector('#copy-input');
    input.select();
    try {
      var success = document.execCommand('copy');
      if (success) {
        $('#copy-button').trigger('copied', ['Copied!']);
      } else {
        $('#copy-button').trigger('copied', ['Copy with Ctrl-c']);
      }
    } catch (err) {
      $('#copy-button').trigger('copied', ['Copy with Ctrl-c']);
    }
  });

  // Handler for updating the tooltip message.
  $('#copy-button').bind('copied', function(event, message) {
    $(this).attr('title', message)
        .tooltip('fixTitle')
        .tooltip('show')
        .attr('title', "Copy to Clipboard")
        .tooltip('fixTitle');
  });
  
  (function(){
    $.get("telegeneKombinationen.json", data => {
      var t = d = new Date();
      t.setDate(t.getDate()-2);
      var e = localStorage.getItem("zeit");
      if (e < t || e == undefined) {
        console.log("Kombinationen veraltet oder nonexistent");
        localStorage.setItem("zeit", d);
        localStorage.setItem("kombinationen", data);
      }
    });
  })();
  
  $("#generatorButton").click(() => {
    var data = localStorage.getItem("kombinationen")
    var teil1 = data.teil1[Math.floor(Math.random()*data.teil1.length)],
        teil2 = data.teil2[Math.floor(Math.random()*data.teil2.length)],
        teil3 = data.teil3[Math.floor(Math.random()*data.teil3.length)];
    console.log("Satz: \"" + teil1+" "+teil2+teil3 + "\"");
    $("#copy-input").html(teil1+" "+teil2+teil3);    
  });
  
});
