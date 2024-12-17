function lillyChange(){
  var selectBox = document.getElementById("weapons");
  var selected = selectBox.options[selectBox.selectedIndex].value;

/*simple melee*/
  if(selected=="club"){
    $('.weapon').hide();
    $('#LilllyClub').show();
    $('#LilllyClubText').show();
  }
  if(selected=="dagger"){
    $('.weapon').hide();
    $('#LilllyDagger').show();
    $('#LilllyDaggerText').show();
  }
  if(selected=="greatclub"){
    $('.weapon').hide();
    $('#LilllyGreatclub').show();
    $('#LilllyGreatclubText').show();
  }
  if(selected=="handaxe"){
    $('.weapon').hide();
    $('#LilllyHandaxe').show();
    $('#LilllyHandAxeText').show();
  }
  if(selected=="javelin"){
    $('.weapon').hide();
    $('#LilllyJavelin').show();
    $('#LilllyJavelinText').show();
  }
  if(selected=="light-hammer"){
    $('.weapon').hide();
    $('#LilllyLightHammer').show();
    $('#LilllyLightHammerText').show();
  }
  if(selected=="mace"){
    $('.weapon').hide();
    $('#LilllyMace').show();
    $('#LilllyMaceText').show();
  }
  if(selected=="quarterstaff"){
    $('.weapon').hide();
    $('#LilllyQuarterstaff').show();
    $('#LilllyQuarterstaffText').show();
  }
  if(selected=="sickle"){
    $('.weapon').hide();
    $('#LilllySickle').show();
    $('#LilllySickleText').show();
  }
  if(selected=="spear"){
    $('.weapon').hide();
    $('#LilllySpear').show();
    $('#LilllySpearText').show();
  }

  /*simple ranged*/
  if(selected=="light-crossbow"){
    $('.weapon').hide();
    $('#LilllyLightCrossbow').show();
    $('#LilllyLightCrossbowText').show();
  }
  if(selected=="dart"){
    $('.weapon').hide();
    $('#LilllyDart').show();
    $('#LilllyDartText').show();
  }
  if(selected=="shortbow"){
    $('.weapon').hide();
    $('#LilllyShortbow').show();
    $('#LilllyShortbowText').show();
  }
  if(selected=="sling"){
    $('.weapon').hide();
    $('#LilllySling').show();
    $('#LilllySlingText').show();
  }

  /*martial melee*/
  if(selected=="battleaxe"){
    $('.weapon').hide();
    $('#LilllyBattleAxe').show();
    $('#LilllyBattleAxeText').show();
  }
  if(selected=="flail"){
    $('.weapon').hide();
    $('#LilllyFlail').show();
    $('#LilllyFlailText').show();
  }
  if(selected=="glaive"){
    $('.weapon').hide();
    $('#LilllyGlaive').show();
    $('#LilllyGlaiveText').show();
  }
  if(selected=="greataxe"){
    $('.weapon').hide();
    $('#LilllyGreataxe').show();
    $('#LilllyGreatAxeText').show();
  }
  if(selected=="greatsword"){
    $('.weapon').hide();
    $('#LilllyGreatsword').show();
    $('#LilllyGreatswordText').show();
  }
  if(selected=="halberd"){
    $('.weapon').hide();
    $('#LilllyHalberd').show();
    $('#LilllyHalberdText').show();
  }
  if(selected=="lance"){
    $('.weapon').hide();
    $('#LilllyLance').show();
    $('#LilllyLanceText').show();
  }
  if(selected=="longsword"){
    $('.weapon').hide();
    $('#LilllyLongsword').show();
    $('#LilllyLongswordText').show();
  }
  if(selected=="maul"){
    $('.weapon').hide();
    $('#LilllyMaul').show();
    $('#LilllyMaulText').show();
  }
  if(selected=="morningstar"){
    $('.weapon').hide();
    $('#LilllyMorningstar').show();
    $('#LilllyMorningstarText').show();
  }
  if(selected=="pike"){
    $('.weapon').hide();
    $('#LilllyPike').show();
    $('#LilllyPikeText').show();
  }
  if(selected=="rapier"){
    $('.weapon').hide();
    $('#LilllyRapier').show();
    $('#LilllyRapierText').show();
  }
  if(selected=="scimitar"){
    $('.weapon').hide();
    $('#LilllyScimitar').show();
    $('#LilllyScimitarText').show();
  }
  if(selected=="shortsword"){
    $('.weapon').hide();
    $('#LilllyShortsword').show();
    $('#LilllyShortswordText').show();
  }
  if(selected=="trident"){
    $('.weapon').hide();
    $('#LilllyTrident').show();
    $('#LilllyTridentText').show();
  }
  if(selected=="war-pick"){
    $('.weapon').hide();
    $('#LilllyWarPick').show();
    $('#LilllyWarPickText').show();
  }
  if(selected=="warhammer"){
    $('.weapon').hide();
    $('#LilllyWarhammer').show();
    $('#LilllyWarhammerText').show();
  }
  if(selected=="whip"){
    $('.weapon').hide();
    $('#LilllyWhip').show();
    $('#LilllyWhipText').show();
  }

  /*martial ranged*/
  if(selected=="blowgun"){
    $('.weapon').hide();
    $('#LilllyBlowgun').show();
    $('#LilllyBlowgunText').show();
  }
  if(selected=="hand-crossbow"){
    $('.weapon').hide();
    $('#LilllyHandCrossbow').show();
    $('#LilllyHandCrossbowText').show();
  }
  if(selected=="heavy-crossbow"){
    $('.weapon').hide();
    $('#LilllyHeavyCrossbow').show();
    $('#LilllyHeavyCrossbowText').show();
  }
  if(selected=="longbow"){
    $('.weapon').hide();
    $('#LilllyLongbow').show();
    $('#LilllyLongbowText').show();
  }
  if(selected=="net"){
    $('.weapon').hide();
    $('#LilllyNet').show();
    $('#LilllyNetText').show();
  }
}

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

function toggleContent3() {
	var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

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

document.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("weapon-catalog-button").click();
  }
});
