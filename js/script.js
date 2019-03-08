// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

let api_url= "https://api.giphy.com/v1/gifs/search?q=puppy&rating=g&api_key=dc6zaTOxFJmzC";
let userInput;
let x;

$("#search-button").click(function(){
  userInput = $("#search-term").val();
  console.log(userInput);    
  api_url = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=g&api_key=dc6zaTOxFJmzC";
  
  $.ajax({
      url: api_url,
      method: "GET",
      success: function(response) {
        x = Math.floor(Math.random() * response.data.length);
        console.log(x);
        $(".gallery").append('<img src="' + response.data[x].images.original.url +'">');
        $(".text-center").text("");
      }
  });
    
  $("#search-term").val("");
});

//$(".gallery").append('<img src="' + response.data[0].images.original.url +'">');