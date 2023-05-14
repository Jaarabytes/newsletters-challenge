$(document).ready(function() {
    // Get the button element
    var button = $('.submit-email');
  
    // Add an event listener to the button
    button.click(function() {
      // Reduce the opacity of the button
      button.css({
        'opacity': '0.5',
        'disabled': true
      });
    });
  });
  