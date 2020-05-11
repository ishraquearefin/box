
var count=0;
var start=0;
var select=0;
my_div = document.getElementById("box2");
document.getElementById("box1").onclick=function click(){
	if(start==0){
    	let element = document.getElementById("box1");
    	let child1= document.getElementById("box2");
    	let child2=document.getElementById("box3");

    	if(element!==null){
    element.removeChild(child1)
   
   start+=1
   document.getElementById("selected").innerHTML="Red box selected ";
	document.getElementById("color").innerHTML="Red box is selected :"+start+" time";
   
}
      
}
else{
	 start+=1
   document.getElementById("selected").innerHTML="Red box selected ";
	document.getElementById("color").innerHTML="Red box is selected :"+start+" time";
}
}
  
	


my_div.addEventListener("click", function(){
  // add code here that increases the /clicks/ variable
  
	
	var newDiv = document.createElement("div");
	newDiv.id="new" 
	//newDiv.style.backgorundColor="blue"
	//newDiv.style.height="100px"
	//newDiv.style.width="100px"
	
	
   var currentDiv = document.getElementById("box1"); 
   document.body.insertBefore(newDiv, currentDiv);
	var node=document.getElementById("box2")
	
	if(node!==null){
		node.parentElement.remove()
document.getElementById("new").style.display="block"
	select=select+1
	document.getElementById("new").style.display="block"
	document.getElementById("selected").innerHTML="Blue box selected ";
	document.getElementById("color").innerHTML="Blue box is selected :"+select+" time";

	}
     
	document.getElementById("new").onclick=function(){
	select=select+1
	document.getElementById("new").style.display="block"
	document.getElementById("selected").innerHTML="Blue box selected ";
	document.getElementById("color").innerHTML="Blue box is selected :"+select+" time";
	
 }


	

});


document.getElementById("box3").onclick=function(){

	var newDiv = document.createElement("div");
	newDiv.id="new1" 
	//newDiv.style.backgorundColor="blue"
	//newDiv.style.height="100px"
	//newDiv.style.width="100px"
	
	
   var currentDiv = document.getElementById("box1"); 

	 document.body.insertBefore(newDiv, currentDiv);
	var node=document.getElementById("box3")
	document.getElementById("box1").remove();
	count+=1
	document.getElementById("selected").innerHTML="Yellow box selected "
	document.getElementById("color").innerHTML="Yellow box is selected :"+count+" time";
		document.getElementById("new1").onclick=function(){
	count=count+1
	document.getElementById("selected").innerHTML="Yellow box selected ";
	document.getElementById("color").innerHTML="Yellow box is selected :"+count+" time";
	
 }

	

}
