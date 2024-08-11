const projectsImages=document.querySelector(".projects__images").children;

const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const maxItem=9;
let index=1;

const pagination=Math.ceil(projectsImages.length/maxItem);


prev.addEventListener("click",function(){
    index--;
    check()
    showItems();
})

next.addEventListener("click",function(){
    index++;
    check()
    showItems();
})

function check(){
    if(index==pagination){
        next.classList.add("disabled");
    }
    else{
        next.classList.remove("disabled");
    }

    if(index==1){
        prev.classList.add("disabled");
    }
    else{
        prev.classList.remove("disabled");
    }

}

function showItems(){
    for(let i=0; i<projectsImages.length; i++){
        projectsImages[i].classList.remove("show");
        projectsImages[i].classList.add("hide");

        if(i>=(index*maxItem)-maxItem &&  i<index*maxItem){
            projectsImages[i].classList.remove("hide");
            projectsImages[i].classList.add("show");
        }
    }


}

window.onload=function(){
    showItems();
    check();
}