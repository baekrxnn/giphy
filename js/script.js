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
        $(".gallery").append('<a target="_blank" href=' + response.data[x].images.original.url + '>' + '<img class="result" src="' + response.data[x].images.original.url +'">' + '</a>');
        $(".text-center").text("");
      }
  });
    
  $("#search-term").val("");
});

//$(".gallery").append('<img src="' + response.data[0].images.original.url +'">');

$("#speak_btn").click(function(){
  var recognition = new window.webkitSpeechRecognition();
  recognition.onresult = function(event) {
      var text = event.results[0][0].transcript;
      console.log(text);
      
      api_url = "https://api.giphy.com/v1/gifs/search?q=" + text + "&rating=g&api_key=dc6zaTOxFJmzC";
  
      $.ajax({
          url: api_url,
          method: "GET",
          success: function(response) {
            let x = Math.floor(Math.random() * response.data.length);
            $(".gallery").append('<a target="_blank" href=' + response.data[x].images.original.url + '>' + '<img class="result" src="' + response.data[x].images.original.url +'">' + '</a>');
            $(".text-center").text("");
          }
      });
      
  };
  recognition.start();
});