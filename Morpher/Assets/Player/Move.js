#pragma strict

function Start () {

}

function Update () {
	var speed = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getSpeed();
	var rotation = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getRotX();
	var quat : Quaternion = Quaternion.AngleAxis (rotation, Vector3.up);
	if (Input.GetKey("w")) {
		this.gameObject.rigidbody.velocity = quat * Vector3(0, 0, speed * Time.deltaTime);
	}
	else if (Input.GetKey("s")) {
		this.gameObject.rigidbody.velocity = quat * Vector3(0, 0, -speed * Time.deltaTime);
	}
	else if (Input.GetKey("a")) {
		this.gameObject.rigidbody.velocity = quat * Vector3(-speed * Time.deltaTime, 0, 0);
	}
	else if (Input.GetKey("d")) {
		this.gameObject.rigidbody.velocity = quat * Vector3(speed * Time.deltaTime, 0, 0);
	} else {
		this.gameObject.rigidbody.velocity = Vector3.zero;
	}
	
}