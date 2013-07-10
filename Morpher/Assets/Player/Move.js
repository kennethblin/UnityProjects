#pragma strict

var isJump : int;
var jumpTime : float;

function Start () {
 	isJump = 0;
 	jumpTime = 0;
}

function Update () {
	var speed = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getSpeed();
	var rotation = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getRotX();
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
	if (Input.GetKeyDown("space")) {
		if (isJump == 0) {
			isJump = 1;
		}
	}
	if (isJump == 1) {
		jumping();
		isJump = 2;
	}
	
}

function jumping() {
	this.gameObject.rigidbody.AddForce(Vector3.up * GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getJump());
	jumpTime = Time.time;
}

function reJump() {
	isJump = 0;
}

function getJump() {
	return isJump;
}

function getJumpTime() {
	return jumpTime;
}