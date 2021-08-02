//slideshow top
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000); // Change image every 10 seconds
}



//bottom-gallery

var startingIndex = 0;
var x = document.getElementsByClassName("gallery-column");
display();

function next(){
    startingIndex+=1;
    if(startingIndex>=x.length){
        startingIndex = 0;
    }
    display();
    
}

function prev(){
    startingIndex-=1;
    if(startingIndex<0){
        startingIndex = x.length-1;
    }
    display();
}

function display(){
    var i;
    for (i = startingIndex; i < startingIndex+x.length; i++) {
       if(i>=x.length){
        x[i-x.length].style.display = "none";
       } 
       else{
            x[i].style.display = "none";  
       }
    }
    for(i=startingIndex; i<startingIndex+4; i++){
        if(i>=x.length){
            x[i-x.length].style.display="initial"
        }
        else{
            x[i].style.display="initial";
        }
    }
    
}

function enlarge(a){
    var i;
    
    for (i = startingIndex; i < startingIndex+4; i++) {
        if(i>=x.length){
            if(i-x.length==a){
                x[i-x.length].style.width="40%";
            } 
            else{
                x[i-x.length].style.width="20%";
            }
        }
        else{
            if(i==a){
                x[i].style.width="40%";
            } 
            else{
                x[i].style.width="20%";
            }
        }
        
    }
    

}

function resize(){
    var i;
   
    for (i = startingIndex; i < startingIndex+4; i++) { 
        if(i>=x.length){
            x[i-x.length].style.width="25%";
        }
        else{
            x[i].style.width="25%";
        } 
    
    }   
    
    
}


//Animation on scroll settings

AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, //
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
    

    
    offset: 120, 
    delay: 0, 
    duration: 400,
    easing: 'ease', 
    once: true, 
    mirror: true, 
    anchorPlacement: 'top-bottom',
}); 


// toggling navbar based on window screen for responsiveness

var toggle=0;

function navigator(){
    if(toggle==0){
        toggle=1;
    }
    else{
        toggle=0;
    }

    if(toggle==1){
        $("a.nav-elt").css({"display": "block", "width": "100%"} );
    }
    else{
        $("a.nav-elt").css({"display": "none", "width": "0"} );
    }
    
};

$(window).resize(function() {
    if ($(window).width() >= 1000 && $(window).width() <= 1400 ) { 
        $("a.nav-elt").css({"display": "block", "width":"125px", "padding": "10px 5px", "font-size": "10px" });
    } 
    else if($(window).width() > 1400){
        $("a.nav-elt").css({"display": "block", "width":"200px", "padding": "5px 10px", "font-size": "14px" });
    }
    else {
        $("a.nav-elt").css("display", "none");
    }
    
});    


document.addEventListener("DOMContentLoaded", function() {

    if ($(window).width() >= 1000 && $(window).width() <= 1400 ) { 
        $("a.nav-elt").css({"display": "block", "width":"125px", "padding": "10px 5px", "font-size": "10px" });
    } 
    else if($(window).width() > 1400){
        $("a.nav-elt").css({"display": "block", "width":"200px", "padding": "5px 10px", "font-size": "14px" });
    }
    else {
        $("a.nav-elt").css("display", "none");
    }

});


$(document).ready(function(){
    $(window).scrollTop(0);
});