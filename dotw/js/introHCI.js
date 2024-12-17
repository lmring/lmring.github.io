// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

$.ajaxSetup({beforeSend: function(xhr){
  if (xhr.overrideMimeType)
  {
    xhr.overrideMimeType("application/json");
  }
}
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	function projectClick(e) {
    // Cancel the default action, which prevents the page from reloading
    e.preventDefault();
    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
}
}


function changeToStr(){
	$('#section-str').show();
	$('#section-dex').hide();
	$('#section-con').hide();
	$('#section-int').hide();
	$('#section-wis').hide();
	$('#section-cha').hide();
}
function changeToDex(){
	$('#section-str').hide();
	$('#section-dex').show();
	$('#section-con').hide();
	$('#section-int').hide();
	$('#section-wis').hide();
	$('#section-cha').hide();
}
function changeToCon(){
	$('#section-str').hide();
	$('#section-dex').hide();
	$('#section-con').show();
	$('#section-int').hide();
	$('#section-wis').hide();
	$('#section-cha').hide();
}
function changeToInt(){
	$('#section-str').hide();
	$('#section-dex').hide();
	$('#section-con').hide();
	$('#section-int').show();
	$('#section-wis').hide();
	$('#section-cha').hide();
}
function changeToWis(){
	$('#section-str').hide();
	$('#section-dex').hide();
	$('#section-con').hide();
	$('#section-int').hide();
	$('#section-wis').show();
	$('#section-cha').hide();
}
function changeToCha(){
	$('#section-str').hide();
	$('#section-dex').hide();
	$('#section-con').hide();
	$('#section-int').hide();
	$('#section-wis').hide();
	$('#section-cha').show();
}

function StrengthChange() {
    var selectBox = document.getElementById("strength");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 5 && selected > 0){
        $('#Strength1Hank').show();
				$('#Strength1HankImg').show();
				$('#Strength2Hank').hide();
				$('#Strength3Hank').hide();
				$('#Strength3HankImg').hide();
				$('#Strength4Hank').hide();
				$('#Strength5Hank').hide();
				$('#Strength5HankImg').hide();
    }
		else if(selected < 9 && selected > 4){
				$('#Strength1Hank').hide();
				$('#Strength1HankImg').show();
				$('#Strength2Hank').show();
				$('#Strength3Hank').hide();
				$('#Strength3HankImg').hide();
				$('#Strength4Hank').hide();
				$('#Strength5Hank').hide();
				$('#Strength5HankImg').hide();
    }
		else if(selected < 13 && selected > 8){
				$('#Strength1Hank').hide();
				$('#Strength1HankImg').hide();
				$('#Strength2Hank').hide();
				$('#Strength3Hank').show();
				$('#Strength3HankImg').show();
				$('#Strength4Hank').hide();
				$('#Strength5Hank').hide();
				$('#Strength5HankImg').hide();
    }
		else if(selected < 17 && selected > 12){
				$('#Strength1Hank').hide();
				$('#Strength1HankImg').hide();
				$('#Strength2Hank').hide();
				$('#Strength3Hank').hide();
				$('#Strength3HankImg').hide();
				$('#Strength4Hank').show();
				$('#Strength5Hank').hide();
				$('#Strength5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Strength1Hank').hide();
				$('#Strength1HankImg').hide();
				$('#Strength2Hank').hide();
				$('#Strength3Hank').hide();
				$('#Strength3HankImg').hide();
				$('#Strength4Hank').hide();
				$('#Strength5Hank').show();
				$('#Strength5HankImg').show();
		}
}

function DexterityChange() {
    var selectBox = document.getElementById("dexterity");
    var selected = selectBox.options[selectBox.selectedIndex].value;

		if(selected < 5 && selected > 0){
				$('#Dexterity1Hank').show();
				$('#Dexterity1HankImg').show();
				$('#Dexterity2Hank').hide();
				$('#Dexterity3Hank').hide();
				$('#Dexterity3HankImg').hide();
				$('#Dexterity4Hank').hide();
				$('#Dexterity5Hank').hide();
				$('#Dexterity5HankImg').hide();
		}
		else if(selected < 9 && selected > 4){
				$('#Dexterity1Hank').hide();
				$('#Dexterity1HankImg').show();
				$('#Dexterity2Hank').show();
				$('#Dexterity3Hank').hide();
				$('#Dexterity3HankImg').hide();
				$('#Dexterity4Hank').hide();
				$('#Dexterity5Hank').hide();
				$('#Dexterity5HankImg').hide();
		}
		else if(selected < 13 && selected > 8){
				$('#Dexterity1Hank').hide();
				$('#Dexterity1HankImg').hide();
				$('#Dexterity2Hank').hide();
				$('#Dexterity3Hank').show();
				$('#Dexterity3HankImg').show();
				$('#Dexterity4Hank').hide();
				$('#Dexterity5Hank').hide();
				$('#Dexterity5HankImg').hide();
		}
		else if(selected < 17 && selected > 12){
				$('#Dexterity1Hank').hide();
				$('#Dexterity1HankImg').hide();
				$('#Dexterity2Hank').hide();
				$('#Dexterity3Hank').hide();
				$('#Dexterity3HankImg').hide();
				$('#Dexterity4Hank').show();
				$('#Dexterity5Hank').hide();
				$('#Dexterity5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Dexterity1Hank').hide();
				$('#Dexterity1HankImg').hide();
				$('#Dexterity2Hank').hide();
				$('#Dexterity3Hank').hide();
				$('#Dexterity3HankImg').hide();
				$('#Dexterity4Hank').hide();
				$('#Dexterity5Hank').show();
				$('#Dexterity5HankImg').show();
		}
}

function ConstitutionChange() {
    var selectBox = document.getElementById("constitution");
    var selected = selectBox.options[selectBox.selectedIndex].value;

		if(selected < 5 && selected > 0){
				$('#Constitution1Hank').show();
				$('#Constitution1HankImg').show();
				$('#Constitution2Hank').hide();
				$('#Constitution3Hank').hide();
				$('#Constitution3HankImg').hide();
				$('#Constitution4Hank').hide();
				$('#Constitution5Hank').hide();
				$('#Constitution5HankImg').hide();
		}
		else if(selected < 9 && selected > 4){
				$('#Constitution1Hank').hide();
				$('#Constitution1HankImg').show();
				$('#Constitution2Hank').show();
				$('#Constitution3Hank').hide();
				$('#Constitution3HankImg').hide();
				$('#Constitution4Hank').hide();
				$('#Constitution5Hank').hide();
				$('#Constitution5HankImg').hide();
		}
		else if(selected < 13 && selected > 8){
				$('#Constitution1Hank').hide();
				$('#Constitution1HankImg').hide();
				$('#Constitution2Hank').hide();
				$('#Constitution3Hank').show();
				$('#Constitution3HankImg').show();
				$('#Constitution4Hank').hide();
				$('#Constitution5Hank').hide();
				$('#Constitution5HankImg').hide();
		}
		else if(selected < 17 && selected > 12){
				$('#Constitution1Hank').hide();
				$('#Constitution1HankImg').hide();
				$('#Constitution2Hank').hide();
				$('#Constitution3Hank').hide();
				$('#Constitution3HankImg').hide();
				$('#Constitution4Hank').show();
				$('#Constitution5Hank').hide();
				$('#Constitution5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Constitution1Hank').hide();
				$('#Constitution1HankImg').hide();
				$('#Constitution2Hank').hide();
				$('#Constitution3Hank').hide();
				$('#Constitution3HankImg').hide();
				$('#Constitution4Hank').hide();
				$('#Constitution5Hank').show();
				$('#Constitution5HankImg').show();
		}
}

function IntelligenceChange() {
    var selectBox = document.getElementById("intelligence");
    var selected = selectBox.options[selectBox.selectedIndex].value;

		if(selected < 5 && selected > 0){
				$('#Intelligence1Hank').show();
				$('#Intelligence1HankImg').show();
				$('#Intelligence2Hank').hide();
				$('#Intelligence3Hank').hide();
				$('#Intelligence3HankImg').hide();
				$('#Intelligence4Hank').hide();
				$('#Intelligence5Hank').hide();
				$('#Intelligence5HankImg').hide();
		}
		else if(selected < 9 && selected > 4){
				$('#Intelligence1Hank').hide();
				$('#Intelligence1HankImg').show();
				$('#Intelligence2Hank').show();
				$('#Intelligence3Hank').hide();
				$('#Intelligence3HankImg').hide();
				$('#Intelligence4Hank').hide();
				$('#Intelligence5Hank').hide();
				$('#Intelligence5HankImg').hide();
		}
		else if(selected < 13 && selected > 8){
				$('#Intelligence1Hank').hide();
				$('#Intelligence1HankImg').hide();
				$('#Intelligence2Hank').hide();
				$('#Intelligence3Hank').show();
				$('#Intelligence3HankImg').show();
				$('#Intelligence4Hank').hide();
				$('#Intelligence5Hank').hide();
				$('#Intelligence5HankImg').hide();
		}
		else if(selected < 17 && selected > 12){
				$('#Intelligence1Hank').hide();
				$('#Intelligence1HankImg').hide();
				$('#Intelligence2Hank').hide();
				$('#Intelligence3Hank').hide();
				$('#Intelligence3HankImg').hide();
				$('#Intelligence4Hank').show();
				$('#Intelligence5Hank').hide();
				$('#Intelligence5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Intelligence1Hank').hide();
				$('#Intelligence1HankImg').hide();
				$('#Intelligence2Hank').hide();
				$('#Intelligence3Hank').hide();
				$('#Intelligence3HankImg').hide();
				$('#Intelligence4Hank').hide();
				$('#Intelligence5Hank').show();
				$('#Intelligence5HankImg').show();
		}
}

function WisdomChange() {
    var selectBox = document.getElementById("wisdom");
    var selected = selectBox.options[selectBox.selectedIndex].value;

		if(selected < 5 && selected > 0){
				$('#Wisdom1Hank').show();
				$('#Wisdom1HankImg').show();
				$('#Wisdom2Hank').hide();
				$('#Wisdom3Hank').hide();
				$('#Wisdom3HankImg').hide();
				$('#Wisdom4Hank').hide();
				$('#Wisdom5Hank').hide();
				$('#Wisdom5HankImg').hide();
		}
		else if(selected < 9 && selected > 4){
				$('#Wisdom1Hank').hide();
				$('#Wisdom1HankImg').show();
				$('#Wisdom2Hank').show();
				$('#Wisdom3Hank').hide();
				$('#Wisdom3HankImg').hide();
				$('#Wisdom4Hank').hide();
				$('#Wisdom5Hank').hide();
				$('#Wisdom5HankImg').hide();
		}
		else if(selected < 13 && selected > 8){
				$('#Wisdom1Hank').hide();
				$('#Wisdom1HankImg').hide();
				$('#Wisdom2Hank').hide();
				$('#Wisdom3Hank').show();
				$('#Wisdom3HankImg').show();
				$('#Wisdom4Hank').hide();
				$('#Wisdom5Hank').hide();
				$('#Wisdom5HankImg').hide();
		}
		else if(selected < 17 && selected > 12){
				$('#Wisdom1Hank').hide();
				$('#Wisdom1HankImg').hide();
				$('#Wisdom2Hank').hide();
				$('#Wisdom3Hank').hide();
				$('#Wisdom3HankImg').hide();
				$('#Wisdom4Hank').show();
				$('#Wisdom5Hank').hide();
				$('#Wisdom5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Wisdom1Hank').hide();
				$('#Wisdom1HankImg').hide();
				$('#Wisdom2Hank').hide();
				$('#Wisdom3Hank').hide();
				$('#Wisdom3HankImg').hide();
				$('#Wisdom4Hank').hide();
				$('#Wisdom5Hank').show();
				$('#Wisdom5HankImg').show();
		}
}

function CharismaChange() {
    var selectBox = document.getElementById("charisma");
    var selected = selectBox.options[selectBox.selectedIndex].value;

		if(selected < 5 && selected > 0){
				$('#Charisma1Hank').show();
				$('#Charisma1HankImg').show();
				$('#Charisma2Hank').hide();
				$('#Charisma3Hank').hide();
				$('#Charisma3HankImg').hide();
				$('#Charisma4Hank').hide();
				$('#Charisma5Hank').hide();
				$('#Charisma5HankImg').hide();
		}
		else if(selected < 9 && selected > 4){
				$('#Charisma1Hank').hide();
				$('#Charisma1HankImg').show();
				$('#Charisma2Hank').show();
				$('#Charisma3Hank').hide();
				$('#Charisma3HankImg').hide();
				$('#Charisma4Hank').hide();
				$('#Charisma5Hank').hide();
				$('#Charisma5HankImg').hide();
		}
		else if(selected < 13 && selected > 8){
				$('#Charisma1Hank').hide();
				$('#Charisma1HankImg').hide();
				$('#Charisma2Hank').hide();
				$('#Charisma3Hank').show();
				$('#Charisma3HankImg').show();
				$('#Charisma4Hank').hide();
				$('#Charisma5Hank').hide();
				$('#Charisma5HankImg').hide();
		}
		else if(selected < 17 && selected > 12){
				$('#Charisma1Hank').hide();
				$('#Charisma1HankImg').hide();
				$('#Charisma2Hank').hide();
				$('#Charisma3Hank').hide();
				$('#Charisma3HankImg').hide();
				$('#Charisma4Hank').show();
				$('#Charisma5Hank').hide();
				$('#Charisma5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Charisma1Hank').hide();
				$('#Charisma1HankImg').hide();
				$('#Charisma2Hank').hide();
				$('#Charisma3Hank').hide();
				$('#Charisma3HankImg').hide();
				$('#Charisma4Hank').hide();
				$('#Charisma5Hank').show();
				$('#Charisma5HankImg').show();
		}
}



//function spellSearch() {
//	$.getJSON("spells.json", function(data){
//		$.each(data.spells, function(i,spell){
//            content = '<p>' + spell.name + '</p>';
//            content += '<br/>';
//            $(content).appendTo("#spell-catalog-results");
//          });
//    }
//});
//}

//spells start ***************************************************************
$.getScript('spells.js');

function spellSearch() {
	$('#no-spells').hide();
	$("#spell-catalog-results").empty();
	var nameResults = jsonSpellData.filter(checkSpellName);
	var classResults = nameResults.filter(checkSpellClass);
	var schoolResults = classResults.filter(checkSpellSchool);
	var levelResults = schoolResults.filter(checkSpellLevel);
		for (var i = 0, len = levelResults.length; i < len; i++) {
			var spell = levelResults[i];
			if(spell.material === undefined){
				spell.material = 'None';
			}
			content = "<div class='row'><div class='col-sm-8 col-sm-offset-2'><div class = 'panel panel-spell'><div class = 'panel-heading panel-heading-spell'>"+ spell.name + "</div><div class='panel-body'><div class='panel-traits'>" + "<p><b>Range: </b>" + spell.range + "</p><p><b>Components: </b>" + spell.components + "</p><p><b>Materials: </b>" + spell.material + "</p><p><b>Duration: </b>" + spell.duration + "</p><p><b>Concentration: </b>" + spell.concentration + "</p><p><b>Level: </b>" + spell.level + "</p><p><b>School: </b>" + spell.school + "</p><p><b>Class: </b>" + spell.class + "</div><div class = 'spell-desc'><p>" + spell.desc + "</p></div></div></div></div></div>";
			content += '<br/>';
			$(content).appendTo("#spell-catalog-results");
    }
		if(levelResults === undefined || levelResults.length == 0){
			$('#no-spells').show();
		}
}

function checkSpellName(spell) {
	var search = $('#spell-catalog-input').val();
	if(search==""){
		return true;
	}
	search = search.toLowerCase();
	var spellName = spell.name.toLowerCase();
	return spellName.includes(search);
}

function checkSpellLevel(spell) {
	var selectBox = document.getElementById("spellLevel");
	var level = selectBox.options[selectBox.selectedIndex].value;
	if(level=="level"){
		return true;
	}
	return spell.level.includes(level);
}

function checkSpellClass(spell) {
	var selectBox = document.getElementById("spellClass");
	var classes = selectBox.options[selectBox.selectedIndex].value;
	if(classes=="classes"){
		return true;
	}
	return spell.class.includes(classes);
}

function checkSpellSchool(spell) {
	var selectBox = document.getElementById("spellSchool");
	var school = selectBox.options[selectBox.selectedIndex].value;
	if(school=="school"){
		return true;
	}
	return spell.school.includes(school);

}
//spells end ***************************************************************

//weapons start ************************************************************
$.getScript('weapons.js');

function weaponSearch() {
	$('#no-weapons').hide();
	$("#weapon-catalog-results").empty();
	var results = jsonWeaponData.filter(checkWeaponName);
	var typeResults = results.filter(checkWeaponType);
		for (var i = 0, len = typeResults.length; i < len; i++) {
			var weapon = typeResults[i];
			content = "<div class='row'><div class='col-sm-8 col-sm-offset-2'><div class = 'panel panel-equipment'><div class = 'panel-heading panel-heading-equipment'>" + weapon.name + "</div><div class='panel-body panel-traits'>" + '<p><b>Damage: </b>' + weapon.damage + '</p><p><b>Properties: </b>' + weapon.properties + '<p><b>Type: </b>' + weapon.type + "</p></div></div></div></div>";
			content += '<br/>';
			$(content).appendTo("#weapon-catalog-results");
    }
		if(typeResults === undefined || typeResults.length == 0){
			$('#no-weapons').show();
		}
}

function checkWeaponName(weapon) {
	var search = $('#weapon-catalog-input').val();
	search = search.toLowerCase();
	var weaponName = weapon.name.toLowerCase();
	return weaponName.includes(search);
}

function checkWeaponType(weapon) {
	var selectBox = document.getElementById("weaponType");
	var type = selectBox.options[selectBox.selectedIndex].value;
	if(type=="type"){
		return true;
	}
	return weapon.type.includes(type);
}
//weapons end ************************************************************

//armor start ************************************************************
$.getScript('armor.js');

function armorSearch() {
	$('#no-armor').hide();
	$("#armor-catalog-results").empty();
	var results = jsonArmorData.filter(checkArmorName);
	var typeResults = results.filter(checkArmorType);
		for (var i = 0, len = typeResults.length; i < len; i++) {
			var armor = typeResults[i];
			content = "<div class='row'><div class='col-sm-8 col-sm-offset-2'><div class = 'panel panel-equipment'><div class = 'panel-heading panel-heading-equipment'>" + armor.name + "</div><div class = 'panel-body panel-traits'>" + '<p><b>Armor Class: </b>' + armor.ac + '</p><p><b>Stealth: </b>' + armor.stealth + '</p><p><b>Strength Requirement: </b>' + armor.str + '</p><p><b>Type: </b>' + armor.type + "</p></div></div></div></div>";
			content += '<br/>';
			$(content).appendTo("#armor-catalog-results");
    }
		if(typeResults === undefined || typeResults.length == 0){
			$('#no-armor').show();
		}
}

function checkArmorName(armor) {
	var search = $('#armor-catalog-input').val();
	search = search.toLowerCase();
	var armorName = armor.name.toLowerCase();
	return armorName.includes(search);
}

function checkArmorType(armor) {
	var selectBox = document.getElementById("armorType");
	var type = selectBox.options[selectBox.selectedIndex].value;
	if(type=="type"){
		return true;
	}
	return armor.type.includes(type);
}
//armor end ************************************************************

window.onscroll = function() {myFunction()};

var header = document.getElementById("stickyNavBar");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function checkUserInfo() {
	var username = $('#username').val();
	var password = $('#password').val();
	if(username=="tutter" && password=="mouse"){
	window.location.href = "https://lmring.github.io/DOTW/home.html";
	}
	else{
		$('#incorrectLogin').show();
	}
}
