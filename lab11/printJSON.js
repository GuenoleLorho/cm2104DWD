$(function(){
  alert("document ready");

  $('#searchform').submit(function(){
    var searchterms = $("#searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms) {
  var url = "http://www.omdbapi.com/?apikey=8dbb4272&s=" + searchterms;
  $.getJSON(url, function(jsondata){
  printJSON(jsondata);
});

}

function printJSON (jsondata){
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<li>" +normal+ "</li>");
};
