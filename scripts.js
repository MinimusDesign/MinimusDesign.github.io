var isMobile = false
var isVisible = false

function swapStyle() {
    sheet = document.getElementById("swap-style")

    if(screen.width <= 900) {
        sheet.setAttribute("href", "Styles/mobile.css")
        isMobile = true
    }
}

function showMenu() {
    
    let menu =  document.getElementById("menu-dropdown")
    
    if(!isVisible) {
        menu.style.setProperty("visibility", "visible")
        isVisible = true
    } else if(isVisible){
        menu.style.setProperty("visibility", "hidden")
        isVisible = false
    }

}