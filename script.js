var count=1;
function changecolor(btn){
    if(count==1){
        me.style.background='url("images/deep.jpg")';
        count=2;
    }
    else if(count==2){
        me.style.background='url("images/orange.jpg")';
        count=3;
    }
    else if(count==3){
        me.style.background='url("images/green.jpg")';
        count=4;
    }
    else if(count==4){
        me.style.background='url("images/slide1.png")';
        count=1;
    }
}
function myfun(){
    var x=document.getElementById("vis");
    var y=document.getElementById("vis1");
    if(x.style.display==="none"){
      x.style.display="inline-block";
      y.style.display="inline-block";
      
    }
    else{
      x.style.display="none";
      y.style.display="none";
    }
  }
