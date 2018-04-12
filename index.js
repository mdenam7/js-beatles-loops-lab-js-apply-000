const musicians = ["John Lennon" , "Paul McCartney" , "George Harrison" , "Ringo Starr"];
const instruments = ["Guiter" , "Bass Guiter" , "Lead Guiter" , "Drums"];


function theBeatlesPlay (musicians , instruments){
  
  var totalmusicians = [];
  for (var i = 0; i<musicians.length; i++){
    
    totalmusicians.push(musicians[i] + " plays " + instruments[i]);
  }
  return totalmusicians;
}

theBeatlesPlay(musicians , instruments);


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(){

  var myArray = [];
  var i = 0;
  
  while(i<facts.length){
    myArray.push(facts[i] + "!!!")
    i++;
  }
  
  return myArray;
  
}
johnLennonFacts();


function iLoveTheBeatles(count){
  
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    count++;
  }
  while(count<15);
  return newArray;
}
iLoveTheBeatles(8);


