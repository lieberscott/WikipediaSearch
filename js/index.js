$(document).ready(function() {
  $("#search").on("keydown", function(e) {
    if (e.keyCode == 13) {
      var search = document.getElementById("search").value;
  var request = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + search + "&format=json&callback=?";
      $.getJSON(request, function(json) {
        
        var title = "";
        
        var blurb = "";
        
        var pageid = "";
        
        var html = "";
        
        for (var i = 0; i < 10; i++) {
          title = json.query.search[i]["title"];
          blurb = json.query.search[i]["snippet"];
          pageid = json.query.search[i]["pageid"];
        html += '<div class="entry"><a href="http://en.wikipedia.org/?curid=' + pageid + '" target="_blank"><h4>' + title + '</h4><p>' + blurb + '</p></a></div>';
      }
    
      $(".main").html(html);
 
      }); // getJSON
    }; // if keydown == enter key
  }); // upon keydown
}); // when documentReady