//skills get start ************************************************************
var charClass = localStorage.getItem('class');
if(charClass=="barbarian"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("TWO");
  $('#barbarianSkills').show();
}
else if(charClass=="bard"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("THREE");
  $('#bardSkills').show();
}
else if(charClass=="cleric"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("TWO");
  $('#clericSkills').show();
}
else if(charClass=="druid"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("TWO");
  $('#druidSkills').show();
}
else if(charClass=="fighter"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("TWO");
  $('#fighterSkills').show();
}
else if(charClass=="monk"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("TWO");
  $('#monkSkills').show();
}
else if(charClass=="paladin"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("TWO");
  $('#paladinSkills').show();
}
else if(charClass=="ranger"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("THREE");
  $('#rangerSkills').show();
}
else if(charClass=="rogue"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("FOUR");
  $('#rogueSkills').show();
}
else if(charClass=="sorcerer"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("TWO");
  $('#sorcererSkills').show();
}
else if(charClass=="warlock"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("TWO");
  $('#warlockSkills').show();
}
else if(charClass=="wizard"){
	$("#classFromSheet").html(charClass);
	$("#skillNumber").html("TWO");
  $('#wizardSkills').show();
}
else{
	$('#noclass').show();
}
//skills get end ************************************************************


function classChange(){
	var selectBox = document.getElementById("classes");
	var selected = selectBox.options[selectBox.selectedIndex].value;

  if(selected=="barbarian"){
    $('.class').hide();
    $('#barbarianImage').show();
    $('#barbarianText').show();
    $('#barbarianFullText').show();
  }
  if(selected=="bard"){
    $('.class').hide();
    $('#bardImage').show();
    $('#bardText').show();
    $('#bardFullText').show();
  }
  if(selected=="cleric"){
    $('.class').hide();
    $('#clericImage').show();
    $('#clericText').show();
    $('#clericFullText').show();
  }
  if(selected=="druid"){
    $('.class').hide();
    $('#druidImage').show();
    $('#druidText').show();
    $('#druidFullText').show();
  }
  if(selected=="fighter"){
    $('.class').hide();
    $('#fighterImage').show();
    $('#fighterText').show();
    $('#fighterFullText').show();
  }
  if(selected=="monk"){
    $('.class').hide();
    $('#monkImage').show();
    $('#monkText').show();
    $('#monkFullText').show();
  }
  if(selected=="paladin"){
    $('.class').hide();
    $('#paladinImage').show();
    $('#paladinText').show();
    $('#paladinFullText').show();
  }
  if(selected=="ranger"){
    $('.class').hide();
    $('#rangerImage').show();
    $('#rangerText').show();
    $('#rangerFullText').show();
  }
  if(selected=="rogue"){
    $('.class').hide();
    $('#rogueImage').show();
    $('#rogueText').show();
    $('#rogueFullText').show();
  }
  if(selected=="sorcerer"){
    $('.class').hide();
    $('#sorcererImage').show();
    $('#sorcererText').show();
    $('#sorcererFullText').show();
  }
  if(selected=="warlock"){
    $('.class').hide();
    $('#warlockImage').show();
    $('#warlockText').show();
    $('#warlockFullText').show();
  }
  if(selected=="wizard"){
    $('.class').hide();
    $('#wizardImage').show();
    $('#wizardText').show();
    $('#wizardFullText').show();
  }
}
