function trackCursor(m) {
    const cursor = document.querySelector(".cursor-shadow");
    cursor.style.left = m.pageX + "px";
    cursor.style.top = m.pageY + "px";
}
document.addEventListener('mousemove', trackCursor);

function navbarcheck(){
    let checkbox = document.getElementById("check");
    let navbar = document.getElementById("navbar");
    let container = document.getElementById("bg");
    let y = window.scrollY;
    if(checkbox.checked){
        navbar.style.height = "80px";
        if(y > 80){
            container.style.backgroundColor = 'rgba(6, 12, 41,.8)';
            container.style.backdropFilter = "blur(10px)";
        }
        else{
            container.style.backgroundColor = 'transparent';
            container.style.backdropFilter = "blur(0px)";
        }
    }
    else{
        navbar.style.height = "330px";
        container.style.backgroundColor = 'rgba(6, 12, 41,.8)';
        container.style.backdropFilter = "blur(10px)";
    }
}
function unchecked() {
    let checkbox = document.getElementById("check");
    let navbar = document.getElementById("navbar");
    checkbox.checked = false;
    navbar.style.height = "80px";
}
window.addEventListener('scroll', function() {
    let y = window.scrollY;
    let container = document.getElementById("bg");
    if (y > 80) {
        container.style.backgroundColor = 'rgba(6, 12, 41,.8)';
        container.style.backdropFilter = "blur(10px)";
    }
    else {
        container.style.backgroundColor = 'transparent';
        container.style.backdropFilter = "blur(0px)";
    }
})

function rightarrow(){
    const currentURL = window.location.href;
    const currentID = currentURL.split('#')[1];
    if (currentID === 'slide-1') {
        const newURL = currentURL.replace('#slide-1', '#slide-2');
        window.location.href = newURL;
    }
    else if (currentID === 'slide-2') {
        const newURL = currentURL.replace('#slide-2', '#slide-3');
        window.location.href = newURL;
    }
    else if (currentID === 'slide-3') {
        const newURL = currentURL.replace('#slide-3', '#slide-4');
        window.location.href = newURL;
    }
    else if (currentID === 'slide-4') {
        const newURL = currentURL.replace('#slide-4', '#slide-1');
        window.location.href = newURL;
    }
    else if (currentID === 'home') {
        const newURL = currentURL.replace('#home', '#slide-1');
        window.location.href = newURL;
    }
    else if (currentID === 'project') {
        const newURL = currentURL.replace('#project', '#slide-1');
        window.location.href = newURL;
    }
    else if (currentID === 'certificate') {
        const newURL = currentURL.replace('#certificate', '#slide-1');
        window.location.href = newURL;
    }
    else{
        window.location.href = currentURL + "#slide-2"
    }
}

function leftarrow(){
    const currentURL = window.location.href;
    const currentID = currentURL.split('#')[1];
    if (currentID === 'slide-1') {
      const newURL = currentURL.replace('#slide-1', '#slide-4');
      window.location.href = newURL;
    }
    else if (currentID === 'slide-2') {
      const newURL = currentURL.replace('#slide-2', '#slide-1');
      window.location.href = newURL;
    }
    else if (currentID === 'slide-3') {
      const newURL = currentURL.replace('#slide-3', '#slide-2');
      window.location.href = newURL;
    }
    else if (currentID === 'slide-4') {
      const newURL = currentURL.replace('#slide-4', '#slide-3');
      window.location.href = newURL;
    }
    else if (currentID === 'home') {
        const newURL = currentURL.replace('#home', '#slide-1');
        window.location.href = newURL;
    }
    else if (currentID === 'project') {
        const newURL = currentURL.replace('#project', '#slide-1');
        window.location.href = newURL;
    }
    else if (currentID === 'certificate') {
        const newURL = currentURL.replace('#certificate', '#slide-1');
        window.location.href = newURL;
    }
    else{
        window.location.href = currentURL + "#slide-4"
    }
}