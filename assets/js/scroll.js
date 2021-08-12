const header = document.getElementById("main-header")

function scrollHeaderTop(){
    if(window.scrollY > 500){
        header.classList.add("fixed-header")
    }
    console.log(window.scrollY)
}

// document.addEventListener("scroll",scrollHeaderTop);
document.onscroll = scrollHeaderTop;

