var result=document.getElementById("result");

function display(ele) 
{ 
  result.value+=ele; 
} 

function clr() 
{ 
  result.value = "" ;
} 

function cal() 
{ 
  var x = result.value; 
  var y = eval(x) 
  result.value = y 
} 
