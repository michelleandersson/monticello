

$(document).ready(function(){
    $("#nav-about-us").click(function(){
        document.getElementById("circle1").style.fontWeight = "700"; 
        document.getElementById("circle2").style.fontWeight = "400";
        document.getElementById("circle3").style.fontWeight = "400";
        document.getElementById("circle4").style.fontWeight = "400";
         
    }); 
    $("#nav-projects").click(function(){
        document.getElementById("circle1").style.fontWeight = "400"; 
        document.getElementById("circle2").style.fontWeight = "700";
        document.getElementById("circle3").style.fontWeight = "400";
        document.getElementById("circle4").style.fontWeight = "400";
    }); 
    $("#nav-news").click(function(){
        document.getElementById("circle1").style.fontWeight = "400"; 
        document.getElementById("circle2").style.fontWeight = "400";
        document.getElementById("circle3").style.fontWeight = "700";
        document.getElementById("circle4").style.fontWeight = "400";
    }); 
    $("#nav-contact").click(function(){
        document.getElementById("circle1").style.fontWeight = "400"; 
        document.getElementById("circle2").style.fontWeight = "400";
        document.getElementById("circle3").style.fontWeight = "400";
        document.getElementById("circle4").style.fontWeight = "700";
    }); 
});

