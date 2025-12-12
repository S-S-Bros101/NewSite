// let element = ["h1", "h2", "h3", "h4", "h5", "h6", "p1", "p2", "p3", "p4"];
// let ElementContent = [
//     "Who is Raiden?",
//     "Me likes",
//     "Languages I code in",
//     "Where am I?",
//     "Projects",
//     "My cat :D",
//     "I like hardware and soldering. I really like eating food...",
//     "I code in js, C#, C++, and Java.",
//     "I live in Ontario, Canada :)",
//     "I dont have many to share really..."
// ];

// let InfoContent = ["I like hardware and soldering.I really like eating food around the "+
//     "world, right now my top favourites are ramen, jollof rice.", "I code in js, C#, C++, "+
//     "and java.", "I live in Ontario, Canada :&#41;", "I dont have many to share really, but"+
//     " currently im working on arduino, web dev, and soldering hardware"
// ];

//I had to gpt this bit bc it got too confusing :sadge:
let elements = document.querySelectorAll('.breathing');
let blink = false;

elements.forEach((el) => {
    
    el.dataset.original = el.textContent;//grab the orginal text, more efficient
});


elements.forEach((el) => {
    
    el.addEventListener("mouseover", () => breathe(el, false));//breathing 
    el.addEventListener("mouseleave", () => breathe(el, true));//not breathing
});


function breathe(elementThing, /*OH NO HIS IS BAD*/ block){

    //if not hovered over, stop breathing

    if(block){
        elementThing.textContent = elementThing.dataset.original;
        return;
    }
    
    if(blink){
        elementThing.textContent = `>${elementThing.dataset.original} <`;
    }else{
        elementThing.textContent = `>${elementThing.dataset.original}<`;
    }
}

// let blink = false;
// //Init blink

// //this loops through all of them instead of adding them manually T-T
// for(let i=0; i < ElementContent.length; i++){
//     let part = document.getElementById(element[i]);
//     part.addEventListener("mouseover", ()=> breathe(part,false,i));
//     part.addEventListener("mouseleave", () => breathe(part,true,i));
// }

// //This one sets teh breathing brackets according to the var block (dont show) and
// //blink (show it closed and oped :nodnod:)
// function breathe(cont, block,num){
//     let htmlContent = ElementContent[num];
//     //first terminal case here!
//     if(block){
//         cont.innerHTML = htmlContent;
//         return;
//     }
//     //if blink, then shrink
//     if(blink){
//         cont.innerHTML = "> "+htmlContent+" <";
//     }else{
    //         //Show breathing brackets closed
//         cont.innerHTML = ">"+htmlContent+"<";
//     }
// }

setInterval(() => {
    blink = !blink;//reset blink every interval!!!
    document.querySelectorAll('.breathing:hover').forEach(el => breathe(el, false));
}, 500);