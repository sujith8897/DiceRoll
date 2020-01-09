
p1=Math.floor(Math.random()*5+1);
p2=Math.floor(Math.random()*5+1);
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+p1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+p2+".png");
if(p1>p2){
  document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins!";
} else if(p1<p2){
  document.getElementsByTagName("h1")[0].innerHTML="Player 2 wins!";
} else{
  document.getElementsByTagName("h1")[0].innerHTML="Draw";
}
