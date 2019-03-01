// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

let api_url= "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
let userInput;

$("#search-button").click(function(){
  userInput = $("#search-term").val();
  console.log(userInput);    
    
  $.ajax({
      url: api_url,
      method: "GET",
      success: function(response) {
          $(".gallery").append('<img src="' + response.data[0].images.original.url +'">');
      }
  });
  
  $("#search-term").val("");
});

