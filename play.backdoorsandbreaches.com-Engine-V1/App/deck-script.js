// VERSION*/
// B&B - Engine.DSa.1.0
//

//UI Elements
function opendeckselector() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("deckselectoropen").style.display = "none";
  }
  
  function closedeckselector() {
    document.getElementById("myForm").style.display = "none";
      document.getElementById("deckselectoropen").style.display = "block";
  }
  //State is true means starting scenario
  function updatedeck(choice) {
          deck = choice;
          if (localStorage.getItem("deckKey") === null)
          {
            console.log("first time?");
            localStorage.setItem("deckKey", "CoreV21");
          }
          localStorage.setItem("deckKey", deck);
          //console.log(deck);
          loaddeck();
  }
  
  var selecteddeck;
  
  //DECK LOADER
  async function loaddeck() {
    //console.log("loadDeck called with " + state);
  
  selecteddeck = localStorage.getItem("deckKey");
  //if it is null, that means it is the first time that we are entering the website, so let's just set it to the core deck
  if (selecteddeck === null)
  {
    selecteddeck = 'CoreV21';
  }
  console.log(selecteddeck);
      if (selecteddeck == 'CoreV1'){
          cardlist = 'decks/CoreV1/carddb.json'
          }
      if (selecteddeck == 'Expansion1-2'){
          cardlist = 'decks/CoreV2.2-Expansion/carddb.json'
          }
      if (selecteddeck == 'ICSOT'){
          cardlist = 'decks/ICS-OT/carddb.json'
          }
      if (selecteddeck == "CoreV22"){
        cardlist = 'decks/CoreV2.2/carddb.json'
      }
      if (selecteddeck == "Huntress"){
        cardlist = 'decks/Huntress/carddb.json'
      }
      if (selecteddeck == "Cloud Security")
      {
        cardlist = "decks/CloudSecurity/carddb.json";
      }
      if (selecteddeck == "Red Canary")
      {
        cardlist = "decks/RedCanary/carddb.json";
      }
      if (selecteddeck == "Spanish 1.0")
      {
        cardlist = "decks/CoreV2.2_Spanish/carddb.json";
      }
  
          $.getJSON(cardlist, function(h) {
              $(a).html("<img class='full' src='"+h.red+"'>");
              $(b).html("<img class='full' src='"+h.yellow+"'>");
              $(c).html("<img class='full' src='"+h.brown+"'>");
              $(d).html("<img class='full' src='"+h.purple+"'>");
  
              $(inita).html("<img src='"+h.red+"'>");
              $(initb).html("<img src='"+h.yellow+"'>");
              $(initc).html("<img src='"+h.brown+"'>");
              $(initd).html("<img src='"+h.purple+"'>");
  
              $(e).html("<img style='width:200px;' src='"+h.grey+"'>")
  
              //update logo
              $(copyright).html("<a target='_blank' href='https://www.blackhillsinfosec.com/projects/backdoorsandbreaches'><div id='bb'></div></a><a target='_blank' href='https://www.blackhillsinfosec.com/'><div id='bh'></div></a><a target='_blank' href='"+h.link+"'><div class='sponsor' style=' background-image: url("+h.logo+");'></div></a>");
          
              console.log("finished loading deck from loaddeck!");
              console.log(h);
            });
        
  //console.log(cardlist)
  
  }
  