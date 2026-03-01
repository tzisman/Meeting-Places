const stickyDiv = document.getElementById("buttonUp");

window.addEventListener('scroll', function() {
    console.log(this.window.scrollY)
    if (window.scrollY > 200) {  
        stickyDiv.style.opacity = 0.8;
    } else {
        console.log('hi');
        stickyDiv.style.opacity = 0; 
    }
});