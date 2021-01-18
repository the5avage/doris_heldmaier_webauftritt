// derived from: https://www.w3schools.com/howto/howto_css_modal_images.asp
window.onload = function() {
	var modal = document.getElementById("myModal");

	var img = document.getElementsByClassName("gallerieImg");
	var modalImg = document.getElementById("img01");
	
	for (i = 0; i < img.length; i++)
	img[i].onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}

	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
	  modal.style.display = "none";
	}
}