/*Variables*/
let WincoinsText = document.getElementById("WincoinsText")
let WincoinsPerSecText = document.getElementById("WincoinsPerSecText")
let NewNameInput = document.getElementById("NewNameInput")
let FactoryNameText = document.getElementById("FactoryNameText")
let ReNameFactoryWindow = document.getElementById("ReNameFactoryWindow")
let darken = document.getElementById("darken")
let Win101Cost = document.getElementById("Win101Cost")
let Win101Have = document.getElementById("Win101Have")
let Win30Cost = document.getElementById("Win30Cost")
let Win30Have = document.getElementById("Win30Have")
var WinPerSec = 0
var WinCoins = localStorage.getItem("WinCoins")
var Windows101 = localStorage.getItem("Windows101")
var Windows101Cost = localStorage.getItem("Windows101Cost")
var Windows30 = localStorage.getItem("Windows30")
var Windows30Cost = localStorage.getItem("Windows30Cost")
var FactoryName = localStorage.getItem("FactoryName")
var TotalWinCoins = localStorage.getItem("TotalWinCoins")

/*Sounds*/
const ClickSoundPc = new Audio();
ClickSoundPc.src = "sounds/ClickSoundPC.mp3";
const ClickOn = new Audio;
ClickOn.src = "sounds/ClickOn.mp3";
const ClickOff = new Audio;
ClickOff.src = "sounds/ClickOff.mp3";
const СlickB1 = new Audio;
СlickB1.src = "sounds/СlickB1.mp3";

/*Load*/
if (!localStorage.getItem("WinCoins")) {
	WinCoins = localStorage.setItem("WinCoins", 0)
	TotalWinCoins = localStorage.setItem("TotalWinCoins", 0)
	Windows101 = localStorage.setItem("Windows101", 0)
	Windows101Cost = localStorage.setItem("Windows101Cost", 15)
	Windows30 = localStorage.setItem("Windows30", 0)
	Windows30Cost = localStorage.setItem("Windows30Cost", 100)
	WinCoins = parseInt(localStorage.WinCoins)
	Windows101 = parseInt(localStorage.Windows101)
	Windows101Cost = parseInt(localStorage.Windows101Cost)
	Windows30 = parseInt(localStorage.Windows30)
	Windows30Cost = parseInt(localStorage.Windows30Cost)
	TotalWinCoins = parseInt(localStorage.TotalWinCoins)
	FactoryName = localStorage.setItem("FactoryName", "undefined")
}
FactoryNameText.innerHTML=(FactoryName + "'s Factory");
WincoinsText.innerHTML=("You Got: " + localStorage.getItem("WinCoins") + " WinCoins" );
WincoinsPerSecText.innerHTML=("Per sec: " + WinPerSec);
document.title = WinCoins + " WinCoins"
ReNameFactoryWindow.style.visibility = "hidden"
NewNameInput.value = localStorage.getItem("FactoryName")
darken.style.visibility = "hidden"
WinPerSec = parseInt(WinPerSec)
WinCoins = parseInt(WinCoins)
Windows101 = parseInt(Windows101)
Windows101Cost = parseInt(Windows101Cost)
TotalWinCoins = parseInt(TotalWinCoins)
Windows30 = parseInt(Windows30)
Windows30Cost = parseInt(Windows30Cost)

/*functions*/
function Update() {
	localStorage.setItem("Windows101Cost", Windows101Cost)
	localStorage.setItem("WinCoins", WinCoins)
	localStorage.setItem("Windows101", Windows101)
	localStorage.setItem("TotalWinCoins", TotalWinCoins)
	localStorage.setItem("Windows30", Windows30)
	localStorage.setItem("Windows30Cost", Windows30Cost)
	
	WincoinsText.innerHTML=("You Got: " + localStorage.getItem("WinCoins") + " WinCoins" );
	WincoinsPerSecText.innerHTML=("Per sec: " + WinPerSec);
	Win101Cost.innerHTML=(Windows101Cost)
	Win101Have.innerHTML=(Windows101)
	Win30Cost.innerHTML=(Windows30Cost)
	Win30Have.innerHTML=(Windows30)
	
	document.title = WinCoins + " WinCoins"
}
function timer() {
	WinPerSec = Windows101 + Windows30
	WinCoins = WinCoins + WinPerSec
	TotalWinCoins = TotalWinCoins + WinPerSec
	Update()
}
setInterval(timer, 1000)
function ClickPC() {
	ClickSoundPc.play();
	WinCoins = WinCoins + 1
	TotalWinCoins = TotalWinCoins + 1
	Update()
}
function ChangeName() {
	ClickOn.play();
	if (NewNameInput.value.length > 0) {
	localStorage.setItem("FactoryName", NewNameInput.value)
	FactoryNameText.innerHTML=(localStorage.getItem("FactoryName") + "'s Factory");
	ReNameFactoryWindow.style.visibility = "hidden"
	darken.style.visibility = "hidden"
	}
}
function OpenReName() {
	ClickOn.play();
	ReNameFactoryWindow.style.visibility = "visible"
	darken.style.visibility = "visible"
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function RandomName() {
	СlickB1.play();
	var name1 = ["Magic","Future","Dancing","Big","Small","Water","Science","Wonder","Funny","Ram","Shiny","Glorius","Medieval"];

	var name2 = ["Astronaut","Pirate","Goblin","Smurf","Burger","PC","Windows","Pizza","Zombie","Machine","Rocket","Radio","Portal"];

	var getRandomName = () => (name1[getRandomInt(0, name1.length + 1)]) + ' ' + (name2[getRandomInt(0, name2.length + 1)]);
	NewNameInput.value = getRandomName();
}
function CancelName() {
	ClickOff.play();
	ReNameFactoryWindow.style.visibility = "hidden"
	darken.style.visibility = "hidden"
}
function BuyWindows101() {
	if (WinCoins >= Windows101Cost) {
	WinCoins = WinCoins - Windows101Cost
	Windows101Cost = Windows101Cost * 1.75
	Windows101Cost = Math.round(Windows101Cost)
	Windows101 = Windows101 + 1

	Update()
	}
}
function BuyWindows30() {
	if (WinCoins >= Windows30Cost) {
	WinCoins = WinCoins - Windows30Cost
	Windows30Cost = Windows30Cost * 1.15
	Windows30Cost = Math.round(Windows30Cost)
	Windows30 = Windows30 + 1

	Update()
	}
}