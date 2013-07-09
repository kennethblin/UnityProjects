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
	else if (Input.GetKey("s")) {
		this.transform.Translate(quat * Vector3(0, 0, -speed));
	}
	else if (Input.GetKey("a")) {
		this.transform.Translate(quat * Vector3(-speed, 0, 0.0));
	}
	else if (Input.GetKey("d")) {
		this.transform.Translate(quat * Vector3(speed, 0, 0.0));
	} else {
		this.gameObject.rigidbody.velocity = Vector3.zero;
	}
	
}