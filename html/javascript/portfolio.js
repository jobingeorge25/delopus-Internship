/*
function sc1(){
    if(sideContent1.className=="side-content-hidden"){
        sideContent1.classList.add("side-content-visible");
        document.getElementById("sch2").style.display="none";
        document.getElementById("sch3").style.display="none";
    }else{
        document.getElementById("sideContent1").className="side-content-hidden";
        document.getElementById("sch2").style.display="block";
        document.getElementById("sch3").style.display="block";
    }
    
}
*/

function sc1(){
    if(sideContent1.className=="side-content-hidden"){
        sideContent1.classList.add("side-content-visible");
        sideContent1.classList.remove("side-content-hidden");
        document.getElementById("sch2").style.display="none";
        document.getElementById("sch3").style.display="none";

    }else{
        sideContent1.classList.add("side-content-hidden");
        sideContent1.classList.remove("side-content-visible");
        document.getElementById("sch2").style.display="block";
        document.getElementById("sch3").style.display="block";
    }        
}

function sc2(){
    if(sideContent2.className=="side-content-hidden"){
        sideContent2.classList.add("side-content-visible");
        sideContent2.classList.remove("side-content-hidden");
        document.getElementById("sch3").style.display="none";

    }else{
        sideContent2.classList.add("side-content-hidden");
        sideContent2.classList.remove("side-content-visible");
        document.getElementById("sch3").style.display="block";
    }        
}
function sc3(){
    var sideContent3=document.getElementById("sideContent3");
   
    if(sideContent3.className=="side-content-hidden"){
        sideContent3.classList.add("side-content-visible");
        sideContent3.classList.remove("side-content-hidden");
    }else{
        sideContent3.classList.add("side-content-hidden");
        sideContent3.classList.remove("side-content-visible");
    }        
}