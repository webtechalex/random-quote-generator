$(document).ready(function() {

  var currentQuote, currentAuthor

  function openURL(url){
    window.open(url, 'Share');
  }
  
  function quoteGenerator() {
    $(".quotePanel").fadeOut(300, function() {
      $("#loader").fadeIn(300);
    });
    $.ajax({
      headers: {
        "X-Mashape-Key": "LXTzZdbF7hmshnKurvQuOjaxM9ltp1gLrIrjsnOWjXYFvMwBIa",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(response) {
        var jsonObject = JSON.parse(response);
        currentQuote = jsonObject.quote;
        currentAuthor = jsonObject.author;
        $("#quoteText").html(currentQuote);
        $("#quoteCite").html(currentAuthor);
        $("#loader").fadeOut(300, function() {
          $(".quotePanel").fadeIn(300);
        });
      }
    });
  }
  
  quoteGenerator();
  
  $("#getQuote").on("click", quoteGenerator);
  $('#tweet').on('click', function() {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  });
});