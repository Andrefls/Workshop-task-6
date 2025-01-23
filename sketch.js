let font1;
let s = 'Strings are text';
let userInput;
let userLine;
let poem = [];
let button;
let calm, energetic, stressed, optimistic;
let table;
let dropdown;
let selectedMood;

function preload (){

  font1 = loadFont ('Fog.otf')
  calm = loadImage ('images/white.jpg');
  energetic = loadImage ('images/orange.jpg');
  stressed = loadImage ('images/navyblue.jpg');
  optimistic = loadImage ('images/lightpink.jpg');
  table = loadTable('csv/mood.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1000, 1000);
  imageMode (CENTER);
  pixelDensity ();
  textFont (font1);
  userInput = createInput();
  userInput.position (180, 720);
  button = createImg ('images/white.jpg', 'Add Calming words' );
  button.style ('width', '50px');
  button.style ('height', '50px');
  button.position (userInput.x+150, userInput.y - 15);
  button.mousePressed (newLine);

// Dropdown for calms

dropdown = createSelect();
dropdown.option('Calm');
dropdown.option('Energetic');
dropdown.option('Stressed');
dropdown.option('Optimistic');
dropdown.changed(moodSelectedEvent);
dropdown.position (220,660);

//

// Function for Labels
}

function weekLabels (){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let week = row.get("week");
    fill (100);
    text (week, 80 + x * 100, 50);
  }
}

// Function Show Calms pictures

function ShowCalms (){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow (x);
    let countcalm = row.get("calm");
    for (y = 0; y < countcalm; y++){
      image (calm, 80 + x * 100, 580 - y * 100,100,100);
    }
    }
  }

// Function Show Energetic pictures

function showEnergetics (){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow (x);
    let countenergetic = row.get("energetic");
    for (y = 0; y < countenergetic; y++){
      image (energetic, 80 + x * 100, 580 - y * 100,100,100);
    }
    }
  }
// Function Show Stressed pictures

function ShowStresseds (){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow (x);
    let countstressed = row.get("stressed");
    for (y = 0; y < countstressed; y++){
      image (stressed, 80 + x * 100, 580 - y * 100,100,100);
    }
    }
  }

// Function Show Optimistic pictures

function ShowOptimistics (){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow (x);
    let countoptimisitc = row.get("optimistic");
    for (y = 0; y < countoptimisitc; y++){
      image (optimistic, 80 + x * 100, 580 - y * 100,100,100);
    }
    }
  }


  // Function for drawing

function draw() {
  weekLabels();
  ShowCalms ();
  showEnergetics();
  ShowStresseds ();
  ShowOptimistics ();
  writePoem ();
  weekLabels();

  //Draw function for selecting mood
  switch (selectedMood) {
    case 'Calm':
      background (255);
      ShowCalms();
      weekLabels ();
      break;
      case 'Energetic':
      background (255);
      showEnergetics();
      weekLabels ();
      break
      case 'Stressed':
      background (255);
      ShowStresseds();
      weekLabels ();
      break
      case 'Optimistic':
      background (255);
      ShowOptimistics();
      weekLabels ();
      break
  }

  
  // Dropdown

  if (!selectedMood) {
  } 
  text("Please select a mood (below)", 160, 640);
  text("Write a phrase that ends with the mood you chose.", 100, 700);
  writePoem ();
}

// Including RiTa

function newLine () {
  userLine = userInput.value ();
  userInput.value ('');
  let words = RiTa.tokenize (userLine);
  let r = floor (random(0, words.length));
  let spellsLike = RiTa.spellsLike (words [r]);
  let rhymes = RiTa.rhymesSync (words [r]);
  let changeword;
  if  (random(1) < 0.5) {
    changeword = random (spellsLike);
  } else {changeword= random (rhymes);}
  words [r] = changeword;
  userLine = RiTa.untokenize (words);
  poem.push (userLine);
}

//Adding Drop Down

function moodSelectedEvent() {
  selectedMood = dropdown.value();}

function writePoem(){
  for (x = 0; x < poem.length; x++){
    text (poem [x], 40, 760 + x * 20);
  }
}

