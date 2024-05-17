//your JS code here. If required.
  const circles=document.querySelectorAll(".circle");
  const lines=document.querySelectorAll(".lines");

  const prev=document.getElementById("prev1");
  const next=document.getElementById("next1");
  let ab=1;
  function circlefun(){
    circles.forEach((item,ind)=>{
        console.log(item);
        if(ind<ab)
        item.classList.add("primary");
       
    })
    
    linefun();
  }
  function linefun(){
   
      lines.forEach((item,ind)=>{
        
        if(ind<ab-1){
            item.classList.add("secondary");
        }
      })
      ab++;
      if(ab>5){
        next.disabled=true;
        prev.disabled=false;
        ab=5;
      }else{
        
        next.disabled=false;
      }
  }
  function circledfun(){
     circles.forEach((item,ind)=>{
        if(ind>=ab-1){
          item.classList.remove("primary");
        }
     })
     linedfun();
  }
  function linedfun(){
    lines.forEach((item,ind)=>{
       if(ind>=ab-2){
           item.classList.remove("secondary");
       } 

  })
  ab--;
  if(ab<1){
    prev.disabled=true;
    next.disabled=false;
    ab=1;
  }else{
    prev.disabled=false;
  }
  }
  next.addEventListener("click",circlefun);
  prev.addEventListener("click",circledfun);

