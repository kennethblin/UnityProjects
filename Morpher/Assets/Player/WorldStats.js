#pragma strict
var chaos : float;

function Start () {
	chaos = 50;
}

function Update () {

}

function getChaos() {
	return chaos;
}

function addChaos(val : float) {
	chaos += val;
}