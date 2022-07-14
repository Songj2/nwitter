const body= document.body;
const scrnSize= screen.width;
function resizeEventHandler() {
    
    const getWidth= window.innerWidth;
    let newColor;
    if(getWidth>scrnSize*0.6){
        newColor= "big";
    } else if(getWidth>scrnSize*0.3) { 
        newColor= "nomral";
    } else{
        newColor= "small";
    }
    body.className= newColor;
}
window.addEventListener("resize", resizeEventHandler);