const searchBtn = document.querySelector("#searchBtn");
const closeBtn = document.querySelector("#closeBtn");
const searchBox = document.querySelector(".searchBox");
const navigation = document.querySelector(".navigation");
const menuToggle = document.querySelector("#menuToggle")
const header = document.querySelector("header")



searchBtn.onclick = function(){
    searchBox.classList.add("active");
    closeBtn.classList.add("active");
    searchBtn.classList.add("active");
    menuToggle.classList.add("hide");
    header.classList.remove("open");
}


closeBtn.onclick = function(){
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
    menuToggle.classList.remove("hide");
}

menuToggle.onclick = function(){
    header.classList.toggle("open");
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
 
}




