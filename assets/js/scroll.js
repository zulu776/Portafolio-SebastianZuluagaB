const header = document.getElementById("main-header")
const thirdSection = document.getElementById("third-section")
const about = document.getElementById("about")

function scrollHeaderTop(){

    let offSetAbout = thirdSection.offsetTop - 200;
    // console.log("Offset --->",offSetAbout - 100);
    console.log("Original --->",offSetAbout)

    if(window.scrollY > 500){
        header.classList.add("fixed-header")
    }
    // console.log(window.scrollY)

    if(thirdSection.offsetTop === window.scrollY){
        about.style.opacity = "1"
    }
}

// document.addEventListener("scroll",scrollHeaderTop);
document.onscroll = scrollHeaderTop;


