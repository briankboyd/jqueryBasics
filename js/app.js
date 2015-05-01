
$(document).ready(function() {
    'use strict';
    
    var githubSearchURL = 'https://api.github.com/search/repositories?q=tetris+language:javascript&sort=stars&order=desc';
    
    //networking code using Jquery promises and ajax calls
    //Get some json and pass it the parsing function
    $.get(githubSearchURL)
        .success(function(results) {
        displayResults(results.items);
    })
    .fail(function(err) {
        console.log(err);
    });
    
    //iterate over list and build up string html template and
    //once done iterating, append to the div
    //Example of Jquery .each, append, and id selector
    function displayResults(items) {
        var newItem = "";
        $.each(items, function(i, item) {
           newItem += "<div>" +
                            "<p>" + item.name + "</p>" +
                            "<p>" + item.description + "</p>" +
                            "<p>" + item.url + "</p>" +
                            "<hr>" +
                        "</div>";
        });
        
        $(function() {
            $('#searchResults').append(newItem);
        });
        
    }
});