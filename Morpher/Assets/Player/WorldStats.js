#pragma strict
var chaos : float;

function Start () {
	chaos = 50;
}

function Update () {
	if (Input.GetKeyDown("escape")) {
		Application.Quit();
		//System.Diagnostics.Process.GetCurrentProcess().Kill();
	}
}

function getChaos() {
	return chaos;
}

function addChaos(val : float) {
	chaos += val;
}