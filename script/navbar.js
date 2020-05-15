let aboutUs = document.getElementById("nav-about-us"); 
let projects = document.getElementById("nav-projects"); 
let news = document.getElementById("nav-news"); 
let contact = document.getElementById("nav-contact"); 

$(document).ready(function(){
    $("#nav-about-us").click(function(){
        $("#navbar a").removeClass("nav-active");
        $("#nav-about-us").removeClass("dot");  
        $("#nav-about-us").addClass("nav-active"); 
    }); 
    $("#nav-projects").click(function(){
        $("#navbar span").removeClass("nav-active"); 
        $("#nav-projects").addClass("nav-active"); 
    }); 
    $("#nav-news").click(function(){
        $("#navbar span").removeClass("nav-active"); 
        $("#nav-news").addClass("nav-active"); 
    }); 
    $("#nav-contact").click(function(){
        $("#navbar span").removeClass("nav-active"); 
        $("#nav-contact").addClass("nav-active"); 
    }); 
}); 

