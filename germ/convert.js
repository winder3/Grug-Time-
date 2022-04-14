var usaC_node = document.querySelector("#USA input");
var usaC_time = document.querySelector("#USA input").value;
var germany_node = document.querySelector("#Germany input");
var germany_time;
var eastern_node=document.querySelector("#Eastern input");
var eastern_time;

convertGerm(usaC_time);
convertEast(usaC_time);
usaC_node.addEventListener('change', updateValue);

function convertGerm(time){//convert central to germany time
  var conversion = parseInt(time)+7;
  if(conversion>=24) //make sure its within the 24 hr boundaries
  conversion=conversion-24;
if(conversion<10) //makes 1-9 a time format
  conversion=String("0"+conversion);
germany_time = String(conversion+time.substr(2,4));
germany_node.value = germany_time;
  console.log(germany_node.value);
}
function convertEast(time){//converting usa central to eastern
  var conversion = parseInt(time)+1;
  if(conversion>=24) //make sure its within the 24 hr boundaries
  conversion=conversion-24;
if(conversion<10) //makes 1-9 a time format
  conversion=String("0"+conversion);
  eastern_time= String(conversion+time.substr(2,4));
  eastern_node.value=eastern_time;
}
function updateValue(e) {
convertGerm(e.target.value);
convertEast(e.target.value);
}