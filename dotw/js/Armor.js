function toggleContent() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

function toggleContent2() {
	var dots = document.getElementById("dots2");
	var moreText = document.getElementById("more2");
	var btnText = document.getElementById("myBtn2");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

function armorChange(){
	var selectBox = document.getElementById("armor");
	var selected = selectBox.options[selectBox.selectedIndex].value;

	/*light armor*/
	if(selected=="padded-armor"){
		$('.armor').hide();
		$('#LillyPadded').show();
		$('#PaddedArmorText').show();
	}
	if(selected=="leather-armor"){
		$('.armor').hide();
		$('#LillyLeather').show();
		$('#LeatherArmorText').show();
	}
	if(selected=="studded-leather-armor"){
		$('.armor').hide();
		$('#LillyStuddedLeather').show();
		$('#StuddedLeatherArmorText').show();
	}
	/*medium armor*/
	if(selected=="hide-armor"){
		$('.armor').hide();
		$('#LillyHide').show();
		$('#HideArmorText').show();
	}
	if(selected=="chain-shirt"){
		$('.armor').hide();
		$('#LillyChainShirt').show();
		$('#ChainShirtText').show();
	}
	if(selected=="scale-mail-armor"){
		$('.armor').hide();
		$('#LillyScaleMailArmor').show();
		$('#ScaleMailArmorText').show();
	}
	if(selected=="breastplate"){
		$('.armor').hide();
		$('#LillyBreastplate').show();
		$('#BreastplateText').show();
	}
	if(selected=="half-plate-armor"){
		$('.armor').hide();
		$('#LillyHalfPlate').show();
		$('#HalfPlateArmorText').show();
	}
	/*heavy armor*/
	if(selected=="ring-mail-armor"){
		$('.armor').hide();
		$('#LillyRingMail').show();
		$('#RingMailArmorText').show();
	}
	if(selected=="chain-mail-armor"){
		$('.armor').hide();
		$('#LillyChainMail').show();
		$('#ChainMailArmorText').show();
	}
	if(selected=="splint-armor"){
		$('.armor').hide();
		$('#LillySplint').show();
		$('#SplintArmorText').show();
	}
	if(selected=="plate-armor"){
		$('.armor').hide();
		$('#LillyPlate').show();
		$('#PlateArmorText').show();
	}
}

document.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("armor-catalog-button").click();
  }
});
