var usaC_node = document.querySelector("#USA input");
var usaC_time = document.querySelector("#USA input").value;
var germany_node = document.querySelector("#Germany input");
var germany_time = document.querySelector("#Germany input").value;
var eastern_node = document.querySelector("#Eastern input");
var eastern_time = document.querySelector("#Eastern input").value;
var hawaii_node = document.querySelector("#Hawaii input");
var hawaii_time = document.querySelector("#Hawaii input").value;
fromCentral(usaC_time);
document.addEventListener('change', updateValue);


function fromCentral(time){//convert times from usa central
  var conversion = parseInt(time);
  germany_node.value = toTime(convert(conversion+7),time);//to germany
  eastern_node.value = toTime(convert(conversion+1),time);//to eastern
  hawaii_node.value = toTime(convert(conversion+19),time);//to hawaii
}
function fromGermany(time){//converts time to germany
  var conversion = parseInt(time);
  usaC_node.value = toTime(convert(conversion+17),time);//to central
  eastern_node.value = toTime(convert(conversion+18),time);//to eastern
  hawaii_node.value = toTime(convert(conversion+12),time);//to hawaii
}
function fromEastern(time){
  var conversion = parseInt(time);
  usaC_node.value = toTime(convert(conversion+23),time);//to central
  germany_node.value = toTime(convert(conversion+6),time);//to germany
  hawaii_node.value = toTime(convert(conversion+18),time);//to hawaii
}
function fromHawaii(time){
  var conversion = parseInt(time);
  usaC_node.value = toTime(convert(conversion+5),time);//to central
  eastern_node.value = toTime(convert(conversion+6),time);//to eastern
  germany_node.value = toTime(convert(conversion+12),time);//to germany
  
}

function convert(con){
  if(con>=24) //make sure its within the 24 hr boundaries
    con=con%24;
  if(con<10 & con>=0) //makes 1-9 a time format
    con=String("0"+con);
  return con;
}
function toTime(num,time){
  time=String(time);
  a=String(num+time.substr(2,4));
  return a;
}
function updateValue(e) {
  
  console.log(e.target);
  if(e.target.id=="cent")
fromCentral(e.target.value);
  else if(e.target.id=="germ")
fromGermany(e.target.value);
  else if(e.target.id=="east")
fromEastern(e.target.value);
  else if(e.target.id=="hawa")
fromHawaii(e.target.value);
}