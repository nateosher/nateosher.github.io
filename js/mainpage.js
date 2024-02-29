document.addEventListener("DOMContentLoaded", function(){
    let welcome_tab = document.getElementById("navbar-welcome");

    welcome_tab.style.textDecoration = "underline";
    
});

window.addEventListener("scroll", function() {
    let navbar_height = document.getElementById("navbar").clientHeight;
    let page_height = document.body.clientHeight;
    let screen_height = screen.height;

    let welcome_tab = document.getElementById("navbar-welcome");
    let research_tab = document.getElementById("navbar-research");
    let contact_tab = document.getElementById("navbar-contact");

    let research_y = document.getElementById("research").getBoundingClientRect().top - navbar_height;


    if(this.window.scrollY <= research_y){
        welcome_tab.style.textDecoration = "underline";
        research_tab.style.textDecoration = "underline solid transparent";
        contact_tab.style.textDecoration = "underline solid transparent";
    } else if (this.window.scrollY > research_y && this.window.scrollY < page_height - screen_height) {
        welcome_tab.style.textDecoration = "underline solid transparent";
        research_tab.style.textDecoration = "underline";
        contact_tab.style.textDecoration = "underline solid transparent";
    } else {
        welcome_tab.style.textDecoration = "underline solid transparent";
        research_tab.style.textDecoration = "underline solid transparent";
        contact_tab.style.textDecoration = "underline";
    }

});