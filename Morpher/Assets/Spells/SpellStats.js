#pragma strict
var livingTime : float;
var lifetime : float;
function Start () {
	livingTime = Time.time;
	lifetime = 2;
}

function Update () {
	if (Time.time > (livingTime + lifetime)) {
		Destroy(this.gameObject);
	}
}