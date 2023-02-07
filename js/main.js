$(document).ready(function(){
    $.getJSON("js/data.json", function(data){
        console.log(data.isim); // Prints: Harry
        console.log(data.soyisim); // Prints: 14
    }).fail(function(){
        console.log("An error has occurred.");
    });
});