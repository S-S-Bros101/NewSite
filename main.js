let element = ["h1", "h2", "h3", "h4", "h5", "h6"];
let ElementContent = ["Who is Raiden?", "Me likes", "Languages I code in", "Where am I?", 
"Projects", "My cat :D"
];

let InfoContent = ["I like hardware and soldering.I really like eating food around the "+
    "world, right now my top favourites are ramen, jollof rice.", "I code in js, C#, C++, "+
    "and java.", "I live in Ontario, Canada :&#41;", "I dont have many to share really, but"+
    " currently im working on arduino, web dev, and soldering hardware"
];

let blink = false;

//this loops through all of them instead of adding them manually T-T
for(let i=0; i < ElementContent.length; i++){
    let part = document.getElementById(element[i]);
    part.addEventListener("mouseover", ()=> breathe(part,false,i));
    part.addEventListener("mouseleave", () => breathe(part,true,i));
}

//This one sets teh breathing brackets according to the var block (dont show) and
//blink (show it closed and oped :nodnod:)
function breathe(cont, block,num){
    let htmlContent = ElementContent[num];
    //first terminal case here!
    if(block){
        cont.innerHTML = htmlContent;
        return;
    }
    //if blink, then shrink
    if(blink){
        cont.innerHTML = "> "+htmlContent+"<";
    }else{
        //Show breathing brackets closed
        cont.innerHTML = ">"+htmlContent+"<";
    }
}

setInterval(() => {
    blink = !blink;
}, 500);