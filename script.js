/*window.onload=function(){
	alert("cunt");
}*/
function openModal(){
	location.replace("modal.index.html")
}


document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

/*var modal=document.getElementById("simpleModal");
var modalBtn=document.getElementById("modalBtn");
var closeBtn=document.getElementsByClassName("closeBtn")[0]

modalBtn.addEventListener("click",openModal);
closeBtn.addEventListener("click",closeModal);
//listen for outside click
window.addEventListener("click",clickOutside);
function openModal(){

	modal.style.display="block";

}
//function to close modal
function closeModal(){
	modal.style.display="none";

}
//function to close modal ouTside click
function clickOutside(e){
	if (e.target==modal) {
		modal.style.display="none";

	}
}*/