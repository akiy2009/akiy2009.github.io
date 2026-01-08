const carousel=document.querySelector(".carousel");
let isDown=false,startX,scrollLeft;

carousel.addEventListener("mousedown",e=>{
  isDown=true;
  startX=e.pageX-carousel.offsetLeft;
  scrollLeft=carousel.scrollLeft;
});
carousel.addEventListener("mouseleave",()=>isDown=false);
carousel.addEventListener("mouseup",()=>isDown=false);
carousel.addEventListener("mousemove",e=>{
  if(!isDown)return;
  e.preventDefault();
  const x=e.pageX-carousel.offsetLeft;
  carousel.scrollLeft=scrollLeft-(x-startX);
});
