const text= document.getElementById("text");

const superEventHandler= {
    handleMouseEnter: function(){
        text.style.color= "green";
        text.innerText= "The cursor is here!"
    },
    handleMouseLeave: function(){
        text.style.color= "navy";
        text.innerText= "The cursor is gone!"
    },
    handleWindowResize: function(){
        text.style.color= "yellow";
        text.innerText= "You just resized!"
    },
    handleRightClick: function(){
        text.style.color= "purple";
        text.innerText= "That was a right click!"
    }
}

text.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
text.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);