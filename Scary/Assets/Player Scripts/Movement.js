#pragma strict

function Start () {

}

function Update () {
	var speed = GameObject.FindGameObjectWithTag("Player").GetComponent(PlayerStats).getSpeed();
	var rotation = GameObject.FindGameObjectWithTag("Player").GetComponent(PlayerStats).getRotX();
	var quat : Quaternion = Quaternion.AngleAxis (rotation, Vector3.up);
	this.gameObject.rigidbody.velocity.x = 0;
	this.gameObject.rigidbody.velocity.z = 0;
	
	if (Input.GetKey("w")) {
		this.gameObject.rigidbody.velocity += quat * Vector3(0, 0, speed * Time.deltaTime);
	}
	if (Input.GetKey("s")) {
		this.gameObject.rigidbody.velocity += quat * Vector3(0, 0, -speed * Time.deltaTime);
	}
	if (Input.GetKey("a")) {
		this.gameObject.rigidbody.velocity += quat * Vector3(-speed * Time.deltaTime, 0, 0);
	}
	if (Input.GetKey("d")) {
		this.gameObject.rigidbody.velocity += quat * Vector3(speed * Time.deltaTime, 0, 0);
	}
	
}