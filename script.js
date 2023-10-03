var typed=new Typed(".text",{
    strings:["Frontend Developer","UI Designer","Web Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
    });

    //circle skill
    const circles=document.querySelectorAll('.circle');
    circles.forEach(elem=>{
        var dots=elem.getAttribute("data-dots");
        var marked=elem.getAttribute("data-percent");
        var percent=Math.floor(dots*marked/100);
        var points="";
        var rotate=360/dots;


        for(let i=0;i<dots;i++){
            points+=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML=points;


        const pointMarked=elem.querySelectorAll('.points');
        for(let i=0;i<percent;i++){
            pointMarked[i].classList.add('marked');
        }
    })
    //active menu//////////////////////////////
  let menuLi=document.querySelectorAll('header ul li a');
  let section=document.querySelectorAll('section');

  function Activemenu(){
    let len=section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec=>sec.classList.remove("active"));
    menuLi[len].classList.add("active")
  }
  Activemenu();
  window.addEventListener("scroll",Activemenu);

    

    //sticky navbar///////////////////////////////////



    const header=document.querySelector("header");
    window.addEventListener("scroll",function(){
        header.classList.toggle("sticky",window.scrollY>50)
    })


    //toggle icon navbar///////////





    let menuicon=document.querySelector("#menu-icon");
    let navlist=document.querySelector(".navlist");
    menuicon.onclick=()=>{
        menuicon.classList.toggle("bx-x")
        navlist.classList.toggle("open");
    }
    window.onscroll=()=>{
        menuicon.classList.remove("bx-x")
        navlist.classList.remove("open");
    }

    //paralla////////////////////////
    const observer=new IntersectionObserver((entris)=>{
        entris.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show-items");
            }
        });
    });
    const scrollscale=document.querySelectorAll(".scroll-scale");
    scrollscale.forEach((el)=>observer.observe(el));
    const scrollbottom=document.querySelectorAll(".scroll-bottom");
    scrollbottom.forEach((el)=>observer.observe(el));
    const scrolltop=document.querySelectorAll(".scroll-top");
    scrolltop.forEach((el)=>observer.observe(el));
    



    //mail section////////////////////
    