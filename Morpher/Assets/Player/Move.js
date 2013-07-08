#pragma strict

function Start () {

}

function Update () {
	var speed = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getSpeed();
	var rotation = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getRotX();
	var quat : Quaternion = Quaternion.AngleAxis (rotation, Vector3.up);
	if (Input.GetKey("w")) {
		this.transform.Translate(quat * Vector3(0, 0, speed));
	}
	if (Input.GetKey("s")) {
		this.transform.Translate(quat * Vector3(0, 0, -speed));
	}
	if (Input.GetKey("a")) {
		this.transform.Translate(quat * Vector3(-speed, 0, 0.0));
	}
	if (Input.GetKey("d")) {
		this.transform.Translate(quat * Vector3(speed, 0, 0.0));
	}
	
}