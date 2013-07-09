#pragma strict
var morphObject : GameObject;
var isChaos : float;
var hasPlayed : boolean;
var isActive : boolean;

function Start () {
	hasPlayed = false;
}

function Update () {
	
	if (isActive) {
		var curChaos = GameObject.FindGameObjectWithTag("World").GetComponent(WorldStats).getChaos();
		/*if (isChaos) {
			morph();
		} else {
			//morph();
		}*/
	}
}

function morph() {

	if (!this.particleSystem.isStopped) {
		//IF THIS IS CURRENTLY PLAYING DO NOTHING
	} else if (!morphObject.GetComponent(Morph).isPlayed()) {
		morphObject.GetComponent(Morph).turnOnAll();
		turnOffAll();
	}
}

function play() {
	hasPlayed = true;
}

function replay() {
	hasPlayed = false;
}

function isPlayed() {
	return hasPlayed;
}

function curActive() {
	return isActive;
}

function changeActive() {
	isActive = !isActive;
}

function checkChaos() {
	return isChaos;
}

function turnOffAll() {
	changeActive();
	replay();
	this.renderer.enabled = false;
	this.collider.enabled = false;
}

function turnOnAll() {
	this.particleSystem.Play();
	play();
	changeActive();
	this.renderer.enabled = true;
	this.collider.enabled = true;
}