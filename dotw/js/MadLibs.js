/*attributes start*********************************************************/
function strMadLibs(){
  var selectBox = document.getElementById("strMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("strMadLibsResult");
  span.textContent = result;
}

function dexMadLibs(){
  var selectBox = document.getElementById("dexMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("dexMadLibsResult");
  span.textContent = result;
}

function conMadLibs(){
  var selectBox = document.getElementById("conMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("conMadLibsResult");
  span.textContent = result;
}

function intMadLibs(){
  var selectBox = document.getElementById("intMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("intMadLibsResult");
  span.textContent = result;
}

function wisMadLibs(){
  var selectBox = document.getElementById("wisMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("wisMadLibsResult");
  span.textContent = result;
}

function chaMadLibs(){
  var selectBox = document.getElementById("chaMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("chaMadLibsResult");
  span.textContent = result;
}


function attributesSave(){
  $("#attributesSaveText").hide();
  /*strength*/
  var strSelectBox = document.getElementById("strMadLibs");
  var newStr = strSelectBox.options[strSelectBox.selectedIndex].value;
  localStorage.setItem('strvalue', newStr);
  var newStrModRaw = document.getElementById("strMadLibsResult");
  var newStrMod = newStrModRaw.innerHTML;
  localStorage.setItem('strmod', newStrMod);
  /*dexterity*/
  var dexSelectBox = document.getElementById("dexMadLibs");
  var newDex = dexSelectBox.options[dexSelectBox.selectedIndex].value;
  localStorage.setItem('dexvalue', newDex);
  var newDexModRaw = document.getElementById("dexMadLibsResult");
  var newDexMod = newDexModRaw.innerHTML;
  localStorage.setItem('dexmod', newDexMod);
  /*constitution*/
  var conSelectBox = document.getElementById("conMadLibs");
  var newCon = conSelectBox.options[conSelectBox.selectedIndex].value;
  localStorage.setItem('convalue', newCon);
  var newConModRaw = document.getElementById("conMadLibsResult");
  var newConMod = newConModRaw.innerHTML;
  localStorage.setItem('conmod', newConMod);
  /*intelligence*/
  var intSelectBox = document.getElementById("intMadLibs");
  var newInt = intSelectBox.options[intSelectBox.selectedIndex].value;
  localStorage.setItem('intvalue', newInt);
  var newIntModRaw = document.getElementById("intMadLibsResult");
  var newIntMod = newIntModRaw.innerHTML;
  localStorage.setItem('intmod', newIntMod);
  /*wisdom*/
  var wisSelectBox = document.getElementById("wisMadLibs");
  var newWis = wisSelectBox.options[wisSelectBox.selectedIndex].value;
  localStorage.setItem('wisvalue', newWis);
  var newWisModRaw = document.getElementById("wisMadLibsResult");
  var newWisMod = newWisModRaw.innerHTML;
  localStorage.setItem('wismod', newWisMod);
  /*charisma*/
  var chaSelectBox = document.getElementById("chaMadLibs");
  var newCha = chaSelectBox.options[chaSelectBox.selectedIndex].value;
  localStorage.setItem('chavalue', newCha);
  var newChaModRaw = document.getElementById("chaMadLibsResult");
  var newChaMod = newChaModRaw.innerHTML;
  localStorage.setItem('chamod', newChaMod);
  $("#attributesSaveText").show();
}
/*attributes end*********************************************************/

/*weapons start********************************************************/
function weaponsSave(){
  $("#weaponsSaveText").hide();
  var weaponSelectBox = document.getElementById("weapons");
  var weapon = weaponSelectBox.options[weaponSelectBox.selectedIndex].value;
  if(weapon=="club"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple melee");
  }
  if(weapon=="dagger"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength or dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple melee");
  }
  if(weapon=="greatclub"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple melee");
  }
  if(weapon=="handaxe"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple melee");
  }
  if(weapon=="javelin"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple melee");
  }
  if(weapon=="light-hammer"){
    weapon = "light hammer";
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple melee");
  }
  if(weapon=="mace"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple melee");
  }
  if(weapon=="quarterstaff"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple melee");
  }
  if(weapon=="sickle"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple melee");
  }
  if(weapon=="spear"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple melee");
  }
  else if(weapon=="light-crossbow"){
    weapon = "light crossbow";
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple ranged");
  }
  else if(weapon=="dart"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength or dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple ranged");
  }
  else if(weapon=="shortbow"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple ranged");
  }
  else if(weapon=="sling"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "simple ranged");
  }
  else if(weapon=="battleaxe"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="flail"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="glaive"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="greataxe"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="greatsword"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="halberd"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="lance"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="longsword"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="maul"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="morningstar"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="pike"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="rapier"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength or dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="scimitar"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength or dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="shortsword"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength or dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="trident"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="war-pick"){
    weapon = "war pick";
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="warhammer"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="whip"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "strength or dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="blowgun"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial melee");
  }
  else if(weapon=="hand-crossbow"){
    weapon = "hand crossbow";
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial ranged");
  }
  else if(weapon=="heavy-crossbow"){
    weapon = "heavy crossbow";
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial ranged");
  }
  else if(weapon=="longbow"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial ranged");
  }
  else if(weapon=="net"){
    localStorage.setItem('weapon', weapon);
    var newWeaponMod = "dexterity";
    localStorage.setItem('weaponmod', newWeaponMod);
    localStorage.setItem('weapontype', "martial ranged");
  }
  $("#weaponsSaveText").show();
}
/*weapons end********************************************************/

/*armor start********************************************************/
function armorSave(){
  $("#armorSaveText").hide();
  var armorSelectBox = document.getElementById("armor");
  var armor = armorSelectBox.options[armorSelectBox.selectedIndex].value;
  if(armor=="padded-armor"){
    armor = "padded armor";
    localStorage.setItem('armor', armor);
    var newAC = "11 + my dexterity modifier";
    localStorage.setItem('ac', newAC);
    var newAE = "I also have disadvantage to stealth rolls.";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "light armor");
  }
  else if(armor=="leather-armor"){
    armor = "leather armor";
    localStorage.setItem('armor', armor);
    var newAC = "11 + my dexterity modifier";
    localStorage.setItem('ac', newAC);
    var newAE = "";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "light armor");
  }
  else if(armor=="studded-leather-armor"){
    armor = "studded leather armor";
    localStorage.setItem('armor', armor);
    var newAC = "12 + my dexterity modifier";
    localStorage.setItem('ac', newAC);
    var newAE = "";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "light armor");
  }
  else if(armor=="hide-armor"){
    armor = "hide armor";
    localStorage.setItem('armor', armor);
    var newAC = "12 + my dexterity modifier (with a maximum of +2)";
    localStorage.setItem('ac', newAC);
    var newAE = "";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "medium armor");
  }
  else if(armor=="chain-shirt"){
    armor = "chain shirt";
    localStorage.setItem('armor', armor);
    var newAC = "13 + my dexterity modifier (with a maximum of +2)";
    localStorage.setItem('ac', newAC);
    var newAE = "";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "medium armor");
  }
  else if(armor=="scale-mail-armor"){
    armor = "scale mail armor";
    localStorage.setItem('armor', armor);
    var newAC = "14 + my dexterity modifier (with a maximum of +2)";
    localStorage.setItem('ac', newAC);
    var newAE = "I also have disadvantage to stealth rolls.";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "medium armor");
  }
  else if(armor=="breastplate"){
    armor = "breastplate";
    localStorage.setItem('armor', armor);
    var newAC = "14 + my dexterity modifier (with a maximum of +2)";
    localStorage.setItem('ac', newAC);
    var newAE = "";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "medium armor");
  }
  else if(armor=="half-plate-armor"){
    armor = "half plate armor";
    localStorage.setItem('armor', armor);
    var newAC = "15 + my dexterity modifier (with a maximum of +2)";
    localStorage.setItem('ac', newAC);
    var newAE = "I also have disadvantage to stealth rolls.";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "medium armor");
  }
  else if(armor=="ring-mail-armor"){
    armor = "ring mail armor";
    localStorage.setItem('armor', armor);
    var newAC = "14";
    localStorage.setItem('ac', newAC);
    var newAE = "I also have disadvantage to stealth rolls.";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "heavy armor");
  }
  else if(armor=="chain-mail-armor"){
    armor = "chain mail armor";
    localStorage.setItem('armor', armor);
    var newAC = "16";
    localStorage.setItem('ac', newAC);
    var newAE = "I also have disadvantage to stealth rolls. I need a strength attribute of at least 13 to use this armor.";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "heavy armor");
  }
  else if(armor=="splint-armor"){
    armor = "splint armor";
    localStorage.setItem('armor', armor);
    var newAC = "17";
    localStorage.setItem('ac', newAC);
    var newAE = "I also have disadvantage to stealth rolls. I need a strength attribute of at least 15 to use this armor.";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "heavy armor");
  }
  else if(armor=="plate-armor"){
    armor = "plate armor";
    localStorage.setItem('armor', armor);
    var newAC = "18";
    localStorage.setItem('ac', newAC);
    var newAE = "I also have disadvantage to stealth rolls. I need a strength attribute of at least 15 to use this armor.";
    localStorage.setItem('ae', newAE);
    localStorage.setItem('armortype', "heavy armor");
  }
  $("#armorSaveText").show();
}
/*armor end*********************************************************/

/*backgrounds start********************************************************/
function backgroundSave(){
  $("#backgroundSaveText").hide();
  var backgroundSelectBox = document.getElementById("backgrounds");
  var background = backgroundSelectBox.options[backgroundSelectBox.selectedIndex].value;
  if(background=="acolyte"){
    localStorage.setItem('background', background);
    var result = "the skills Insight and Religion. I also know two additional languages of my choice and have the feature Shelter of the Faithful.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="charlatan"){
    localStorage.setItem('background', background);
    var result = "the skills Deception and Sleight of Hand, disguise kits, and forgery kits. I also have the feature False Identity.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="criminal"){
    localStorage.setItem('background', background);
    var result = "the skills Deception and Stealth, thieves' tools, and one type of gaming set. I also have the feature Criminal Contact.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="entertainer"){
    localStorage.setItem('background', background);
    var result = "the skills Acrobatics and Performance, disguise kits, and one type of musical instrument. I also have the feature By Popular Demand.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="folk-hero"){
    background = "folk hero";
    localStorage.setItem('background', background);
    var result = "the skills Animal Handling and Survival, land vehicles, and one type of artisan tools. I also have the feature Rustic Hospitality.";
    localStorage.setItem('backgroundResult', result);
  }
  else if(background=="guild-artisan"){
    background = "guild artisan";
    localStorage.setItem('background', background);
    var result = "the skills Insight and Persuasion, and one type of artist's tools. I also know one additional language of my choice and have the feature Guild Membership.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="hermit"){
    localStorage.setItem('background', background);
    var result = "the skills Medicine and Religion, and herbalism kits. I also know one additional language of my choice and have the feature Discovery.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="noble"){
    localStorage.setItem('background', background);
    var result = "the skills History and Persuasion, and one type of gaming set. I also know one additional language of my choice and have the feature Position of Privilege.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="outlander"){
    localStorage.setItem('background', background);
    var result = "the skills Athletics and Survival, and one type of musical instrument. I also know one additional language of my choice and have the feature Wanderer.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="sage"){
    localStorage.setItem('background', background);
    var result = "the skills Arcana and History. I also know two additional languages of my choice. I also have the feature Researcher.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="sailor"){
    localStorage.setItem('background', background);
    var result = "the skills Athletics and Perception, water vehicles, and navigator's tools. I also have the feature Ship's Passage.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="soldier"){
    localStorage.setItem('background', background);
    var result = "the skills Athletics and Intimidation, land vehicles, and one type of gaming set. I also have the feature Military Rank.";
    localStorage.setItem('backgroundResult', result);
  }
  if(background=="urchin"){
    localStorage.setItem('background', background);
    var result = "the skills Sleight of Hand and Stealth, disguise kits, and thieves' tools. I also have the feature City Secrets.";
    localStorage.setItem('backgroundResult', result);
  }
  $("#backgroundSaveText").show();
}
/*backgrounds end********************************************************/

/*classes start********************************************************/
function classSave(){
  $("#classSaveText").hide();
  var classSelectBox = document.getElementById("classes");
  var charClass = classSelectBox.options[classSelectBox.selectedIndex].value;

  if(charClass =="barbarian"){
    localStorage.setItem('class', charClass);
    var startHP="12";
    var savingThrows="strength and constitution";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="bard"){
    localStorage.setItem('class', charClass);
    var startHP="8";
    var savingThrows="dexterity and charisma";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="cleric"){
    localStorage.setItem('class', charClass);
    var startHP="8";
    var savingThrows="wisdom and charisma";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="druid"){
    localStorage.setItem('class', charClass);
    var startHP="8";
    var savingThrows="intelligence and wisdom";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="fighter"){
    localStorage.setItem('class', charClass);
    var startHP="10";
    var savingThrows="strength and constitution";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="monk"){
    localStorage.setItem('class', charClass);
    var startHP="8";
    var savingThrows="dexterity and charisma";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="paladin"){
    localStorage.setItem('class', charClass);
    var startHP="10";
    var savingThrows="wisdom and charisma";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="ranger"){
    localStorage.setItem('class', charClass);
    var startHP="10";
    var savingThrows="strength and dexterity";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="rogue"){
    localStorage.setItem('class', charClass);
    var startHP="8";
    var savingThrows="dexterity and intelligence";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="sorcerer"){
    localStorage.setItem('class', charClass);
    var startHP="6";
    var savingThrows="constitution and charisma";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="warlock"){
    localStorage.setItem('class', charClass);
    var startHP="8";
    var savingThrows="wisdom and charisma";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  if(charClass =="wizard"){
    localStorage.setItem('class', charClass);
    var startHP="6";
    var savingThrows="intelligence and wisdom";
    localStorage.setItem('startHP', startHP);
    localStorage.setItem('savingThrows', savingThrows);
  }
  $("#classSaveText").show();
}
/*classes end********************************************************/

/*races start********************************************************/
function raceSave(){
  $("#raceSaveText").hide();
  var raceSelectBox = document.getElementById("races");
  var race = raceSelectBox.options[raceSelectBox.selectedIndex].value;

  if(race =="hill dwarf"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my constitution score, 25 base walking speed, Darkvision, Dwarven resilience, Dwarven combat training, Tool proficiency in Smith’s Tools, Brewer supplies, OR Mason’s tools, Stonecunning, fluency in Common and Dwarvish, +1 to my wisdom score, and Dwarven Toughness";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="mountain dwarf"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my constitution score, 25 base walking speed, Darkvision, Dwarven resilience, Dwarven combat training, Tool proficiency in Smith’s Tools, Brewer supplies, OR Mason’s tools, Stonecunning, fluency in Common and Dwarvish, +1 to my strength score, and Dwarven Armor Training";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="high elf"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my dexterity score, 30 base walking speed, Darkvision, proficiency in perception, Fey Ancestry, Trance, fluency in Common and Elvish, +1 to my intelligence score, Elf Weapon Training, one Wizard cantrip, and fluency in one additional language of my choice";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="wood elf"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my dexterity score, 30 base walking speed, Darkvision, proficiency in perception, Fey Ancestry, Trance, fluency in Common and Elvish, +1 to my wisdom score, Elf Weapon Training, Fleet of Foot, and Mask of the Wild";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="lightfoot halfling"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my dexterity score, 25 base walking speed, Lucky, Brave, Halfling Nimbleness, fluency in Common and the Halfling language, +1 to my charisma score, and Naturally Stealthy";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="stout halfling"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my dexterity score, 25 base walking speed, Lucky, Brave, Halfling Nimbleness, fluency in Common and the Halfling language, +1 to my constitution score, and Stout Resilience";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="human"){
    localStorage.setItem('race', race);
    var raceFeatures = "+1 to all of my attribute scores, 30 base walking speed, and fluency in Common and one language of my choice";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="black dragonborn"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my charisma score, 30 base walking speed, Draconic Ancestry, Breath Weapon (Acid), Damage Resistance (Acid), and fluency in Common and Draconic";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="blue dragonborn"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my charisma score, 30 base walking speed, Draconic Ancestry, Breath Weapon (Lightning), Damage Resistance (Lightning), and fluency in Common and Draconic";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="brass dragonborn"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my charisma score, 30 base walking speed, Draconic Ancestry, Breath Weapon (Fire), Damage Resistance (Fire), and fluency in Common and Draconic";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="bronze dragonborn"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my charisma score, 30 base walking speed, Draconic Ancestry, Breath Weapon (Lightning), Damage Resistance (Lightning), and fluency in Common and Draconic";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="copper dragonborn"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my charisma score, 30 base walking speed, Draconic Ancestry, Breath Weapon (Acid), Damage Resistance (Acid), and fluency in Common and Draconic";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="gold dragonborn"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my charisma score, 30 base walking speed, Draconic Ancestry, Breath Weapon (Fire), Damage Resistance (Fire), and fluency in Common and Draconic";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="green dragonborn"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my charisma score, 30 base walking speed, Draconic Ancestry, Breath Weapon (Poison), Damage Resistance (Poison), and fluency in Common and Draconic";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="red dragonborn"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my charisma score, 30 base walking speed, Draconic Ancestry, Breath Weapon (Fire), Damage Resistance (Fire), and fluency in Common and Draconic";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="silver dragonborn"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my charisma score, 30 base walking speed, Draconic Ancestry, Breath Weapon (Cold), Damage Resistance (Cold), and fluency in Common and Draconic";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="white dragonborn"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my charisma score, 30 base walking speed, Draconic Ancestry, Breath Weapon (Cold), Damage Resistance (Cold), and fluency in Common and Draconic";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="forest gnome"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my intelligence score, 25 base walking speed, Darkvision, Gnome Cunning, fluency in Common and Gnomish, +1 to my dexterity score, Natural Illusionist, and Speak with Small Beasts";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="rock gnome"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my intelligence score, 25 base walking speed, Darkvision, Gnome Cunning, fluency in Common and Gnomish, +1 to my constitution score, Artificer's Lore, and Tinker";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="half-elf"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my charisma score, +1 to two other attribute scores of my choice, 30 base walking speed, Darkvision, Fey Ancestry, Skill Versatility, and fluency in Common, Elvish, and one other language of my choice";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="half-orc"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my strength score, +1 to my constitution score, 30 base walking speed, Darkvision, Menacing, Relentless Endurance, Savage Attacks, and fluency in Common and Orcish";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  if(race =="tiefling"){
    localStorage.setItem('race', race);
    var raceFeatures = "+2 to my charisma score, +1 to my intelligence score, 30 base walking speed, Darkvision, Hellish Resistance, Infernal Legacy, and fluency in Common and Infernal";
    localStorage.setItem('raceFeatures', raceFeatures);
  }
  $("#raceSaveText").show();
}
/*races end********************************************************/

/*skills start********************************************************/
function barbarianSkillSave(){
  $("#barbarianTooMany").hide();
  $("#barbarianTooFew").hide();
  $("#barbarianSkillSaveText").hide();
  var skills = $('#barbarianSkillSelect').val();
  if(skills.length > 2) {
    $("#barbarianTooMany").show();
  }
  if(skills.length < 2) {
    $("#barbarianTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#barbarianSkillSaveText").show();
  }
}

function bardSkillSave(){
  $("#bardTooMany").hide();
  $("#bardTooFew").hide();
  $("#bardSkillSaveText").hide();
  var skills = $('#bardSkillSelect').val();
  if(skills.length > 3) {
    $("#bardTooMany").show();
  }
  if(skills.length < 3) {
    $("#bardTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#bardSkillSaveText").show();
  }
}

function clericSkillSave(){
  $("#clericTooMany").hide();
  $("#clericTooFew").hide();
  $("#clericSkillSaveText").hide();
  var skills = $('#clericSkillSelect').val();
  if(skills.length > 2) {
    $("#clericTooMany").show();
  }
  if(skills.length < 2) {
    $("#clericTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#clericSkillSaveText").show();
  }
}

function druidSkillSave(){
  $("#druidTooMany").hide();
  $("#druidTooFew").hide();
  $("#druidSkillSaveText").hide();
  var skills = $('#druidSkillSelect').val();
  if(skills.length > 2) {
    $("#druidTooMany").show();
  }
  if(skills.length < 2) {
    $("#druidTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#druidSkillSaveText").show();
  }
}

function fighterSkillSave(){
  $("#fighterTooMany").hide();
  $("#fighterTooFew").hide();
  $("#fighterSkillSaveText").hide();
  var skills = $('#fighterSkillSelect').val();
  if(skills.length > 2) {
    $("#fighterTooMany").show();
  }
  if(skills.length < 2) {
    $("#fighterTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#fighterSkillSaveText").show();
  }
}

function monkSkillSave(){
  $("#monkTooMany").hide();
  $("#monkTooFew").hide();
  $("#monkSkillSaveText").hide();
  var skills = $('#monkSkillSelect').val();
  if(skills.length > 2) {
    $("#monkTooMany").show();
  }
  else if(skills.length < 2) {
    $("#monkTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#monkSkillSaveText").show();
  }
}

function paladinSkillSave(){
  $("#paladinTooMany").hide();
  $("#paladinTooFew").hide();
  $("#paladinSkillSaveText").hide();
  var skills = $('#paladinSkillSelect').val();
  if(skills.length > 2) {
    $("#paladinTooMany").show();
  }
  if(skills.length < 2) {
    $("#paladinTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#paladinSkillSaveText").show();
  }
}

function rangerSkillSave(){
  $("#rangerTooMany").hide();
  $("#rangerTooFew").hide();
  $("#rangerSkillSaveText").hide();
  var skills = $('#rangerSkillSelect').val();
  if(skills.length > 3) {
    $("#rangerTooMany").show();
  }
  if(skills.length < 3) {
    $("#rangerTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#rangerSkillSaveText").show();
  }
}

function rogueSkillSave(){
  $("#rogueTooMany").hide();
  $("#rogueTooFew").hide();
  $("#rogueSkillSaveText").hide();
  var skills = $('#rogueSkillSelect').val();
  if(skills.length > 4) {
    $("#rogueTooMany").show();
  }
  if(skills.length < 4) {
    $("#rogueTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#rogueSkillSaveText").show();
  }
}

function sorcererSkillSave(){
  $("#sorcererTooMany").hide();
  $("#sorcererTooFew").hide();
  $("#sorcererSkillSaveText").hide();
  var skills = $('#sorcererSkillSelect').val();
  if(skills.length > 2) {
    $("#sorcererTooMany").show();
  }
  if(skills.length < 2) {
    $("#sorcererTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#sorcererSkillSaveText").show();
  }
}

function warlockSkillSave(){
  $("#warlockTooMany").hide();
  $("#warlockTooFew").hide();
  $("#warlockSkillSaveText").hide();
  var skills = $('#warlockSkillSelect').val();
  if(skills.length > 2) {
    $("#warlockTooMany").show();
  }
  if(skills.length < 2) {
    $("#warlockTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#warlockSkillSaveText").show();
  }
}

function wizardSkillSave(){
  $("#wizardTooMany").hide();
  $("#wizardTooFew").hide();
  $("#wizardSkillSaveText").hide();
  var skills = $('#wizardSkillSelect').val();
  if(skills.length > 2) {
    $("#wizardTooMany").show();
  }
  if(skills.length < 2) {
    $("#wizardTooFew").show();
  }
  else{
    var skillsString = skills.join(" and ")
    localStorage.setItem('skills', skillsString);
    $("#wizardSkillSaveText").show();
  }
}
/*skills end********************************************************/
