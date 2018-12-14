window.onload=function(){

   windowchange();
    window.onresize=windowchange;
    function windowchange(){
       var bg= document.getElementById('bg');
      windowwidth=window.innerWidth+"px";
       bg.style.width=windowwidth;
       bg.style.height=window.innerHeight+"px";
    }
}