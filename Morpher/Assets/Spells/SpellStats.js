#pragma strict
var livingTime : float;
var lifetime : float;
var isChaos : float;
function Start () {
	livingTime = Time.time;
	lifetime = 2;
}

function Update () {
	if (Time.time > (livingTime + lifetime)) {
		Destroy(this.gameObject);
	}
}

function setChaos(newChaos : float) {
	isChaos = newChaos;
}

function checkChaos() {
	return isChaos;
}