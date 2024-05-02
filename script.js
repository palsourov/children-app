let imageTag=document.querySelector("img");
let sms=document.querySelector("h1");

let image=["image/apple.jpg","image/Baseball.jpg","image/clock.jpg","image/donkey.jpg","image/elephant.jpeg",
"image/father.jpg","image/granmother.jpg","image/hungry.webp","image/internet.jpg","image/justice.jpg","image/kangaroo.jpg",
"image/london.jpg","image/OIP.jpeg","image/Northern.jpg","image/overtime.jpg","image/pillow.jpg","image/question.jpg",
"image/rabbit.jpg","image/Supermanflying.png","image/phone.jpg","image/underwear.jpg","image/vaccinate.jpg","image/www.jpg",
"image/xylophone.jpg","image/rt.jpg","image/zebra.jpg"];
 let sms1=["saurov","rahi","proyash","rajib"];

  for(let i=0;i<image.length;i++){
         document.querySelectorAll(".letter")[i].addEventListener("click",function(){
        let text=this.innerHTML;
        audioplay(text);
        imageTag.src=image[i];
       
     });   
     
   } 
   
      
   function audioplay(text){
      if(text=='a'||text=="A")
      {
         let audioA=new Audio('sounds/a.mp3');
          audioA.play();
          
      }
      else if(text=='b'||text=="B")
      {
         let audioB=new Audio('sounds/b.mp3');
          audioB.play();
          
      }
      else if(text=='C'||text=="c")
      {
         let audioC=new Audio('sounds/c.mp3');
          audioC.play();
         
      }
      else if(text=='D'||text=="d")
      {
         let audioD=new Audio('sounds/d.mp3');
         audioD.play();
       
      }
      else if(text=='E'||text=="e")
      {
         let audioE=new Audio("sounds/e.mp3");
          audioE.play();
      }
      else if(text=='F'||text=="f")
      {
         let audioF=new Audio('sounds/f.mp3');
         audioF.play();
         
      }
      else if(text=='G'||text=="g")
      {
         let audioG=new Audio('sounds/g.mp3');
         audioG.play();
         
      }
      else if(text=='H'||text=="h")
      {
         let audioH=new Audio('sounds/h.mp3');
         audioH.play();
        
      }
      else if(text=='I'||text=="i")
      {
         let audioI=new Audio('sounds/i.mp3');
         audioI.play();
         
      }
      else if(text=='j'||text=="J")
      {
         let audioJ=new Audio('sounds/j.mp3');
         audioJ.play();
         
      }
      else if(text=='K'||text=="k")
      {
         let audiok=new Audio('sounds/k.mp3');
         audiok.play();
         
      }
      else if(text=='L'||text=="l")
      {
         let audiol=new Audio('sounds/l.mp3');
         audiol.play();
        
      }
      else if(text=='m'||text=="M")
      {
         let audiom=new Audio('sounds/m.mp3');
         audiom.play();
         
      }
      else if(text=='N'||text=="n")
      {
         let audioN=new Audio('sounds/n.mp3');
         audioN.play();
         
      }
      else if(text=='o'||text=="O")
      {
         let audioO=new Audio('sounds/o.mp3');
         audioO.play();
         
      }
      else if(text=='p'||text=="P")
      {
         let audioP=new Audio('sounds/p.mp3');
         audioP.play();
       
      }
      else if(text=='Q'||text=="q")
      {
         let audioQ=new Audio('sounds/q.mp3');
         audioQ.play();
         
      }
      else if(text=='R'||text=="r")
      {
         let audioR=new Audio('sounds/r.mp3');
         audioR.play();
         
      }
      else if(text=='s'||text=="S")
      {
         let audioS=new Audio('sounds/s.mp3');
         audioS.play();
         
      }
      else if(text=='T'||text=="t")
      {
         let audioT=new Audio('sounds/t.mp3');
         audioT.play();
        
      }
      else if(text=='U'||text=="u")
      {
         let audioU=new Audio('sounds/u.mp3');
         audioU.play();
        
      }
      else if(text=='V'||text=="v")
      {
         let audioV=new Audio('sounds/v.mp3');
         audioV.play();
         
      }
      else if(text=='W'||text=="w")
      {
         let audioW=new Audio('sounds/w.mp3');
         audioW.play();
        
      }
      else if(text=='X'||text=="x")
      {
         let audioX=new Audio('sounds/x.mp3');
         audioX.play();
      }
      else if(text=='Y'||text=="y")
      {
         let audioY=new Audio('sounds/y.mp3');
         audioY.play();
         
      }
      else if(text=='Z'||text=="z")
      {
         let audioZ=new Audio('sounds/z.mp3');
         audioZ.play();
        
      }
      else{
         let audioJ=new Audio('sounds/m.mp3');
         audioJ.play();
      } 
}
