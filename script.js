//your JS code here. If required.
const Btn = document.querySelector("#enterBtn");
const P = document.querySelector("#status");
Btn.addEventListener("click",function(){
	let H1 = document.createElement("h1");
	H1.innerText = "Entered Metaverse";
	H1.id = "status";
	P.replaceWith(H1); 
});

