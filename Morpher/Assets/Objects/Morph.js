#pragma strict
var morphObject : GameObject;
var isChaos : float;
var hasPlayed : boolean;
var isActive : boolean;
var isPrefab : boolean;

var startTime : float;
function Start () {
	hasPlayed = false;
	startTime = Time.time;
}

function Update () {
	
	if (isActive) {
		if (Time.time > (startTime + 1)) {
			this.renderer.enabled = true;
			this.collider.enabled = true;
		}
	//	var curChaos = GameObject.FindGameObjectWithTag("World").GetComponent(WorldStats).getChaos();
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
		if (!isPrefab) {
			morphObject.GetComponent(Morph).turnOnAll();
			turnOffAll();
		} else {
			prefabPlay();
		}
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

function changeActive(newActive : boolean) {
	isActive = newActive;
}

function checkChaos() {
	return isChaos;
}

function turnOffAll() {
	changeActive(false);
	replay();
	this.renderer.enabled = false;
	this.collider.enabled = false;
}

function turnOnAll() {
	this.particleSystem.Play();
	play();
	changeActive(true);
}

function prefabPlay() {
	this.renderer.enabled = false;
	this.collider.enabled = false;
	var newObj = GameObject.Instantiate(morphObject, this.transform.position, this.transform.rotation);
	newObj.renderer.enabled = false;
	newObj.collider.enabled = false;
	newObj.particleSystem.Play();
	newObj.GetComponent(Morph).play();
	newObj.GetComponent(Morph).changeActive(true);
	Destroy(this.gameObject);
}