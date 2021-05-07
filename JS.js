function openNav(){
    document.getElementById("navbar").style.width = "450px";
    document.getElementById("main-doc").style.marginLeft = "450px";
}

function closeNav(){
    document.getElementById("navbar").style.width = 0;
    document.getElementById("main-doc").style.marginLeft = 0;

}

// Scroll button
/*
window.onscroll = function() {scrollFunction()};




function topFunction(){
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}
*/
function scrollFunction() {
    mybutton = document.getElementById("x-nav");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};
window.onscroll = function() {scrollFunction()};


scrollButton = document.getElementById("x-nav");

function scrollTop(){
    var rootElement = document.documentElement;
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
    })
};

scrollButton.addEventListener('click', scrollTop);

