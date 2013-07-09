#pragma strict
var spell : GameObject;
var mouseKey : int;
var isChaos : float;

function Start () {

}

function Update () {
	if (Input.GetMouseButtonDown(mouseKey)) {
		shootSpell();
	}
}

function shootSpell() {
	//var newSpell = GameObject.Instantiate(spell, this.transform.position, this.transform.rotation); 
	//var newVect : Vector3 = Vector3(0, 0, 1);
	
	var rotationX = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getRotX();
	var quatX : Quaternion = Quaternion.AngleAxis (rotationX, Vector3.up);
	
	var rotationY = GameObject.FindGameObjectWithTag("Player").GetComponent(Stats).getRotY();
	var quatY : Quaternion = Quaternion.AngleAxis (rotationY, Vector3.left);

	var newSpell = GameObject.Instantiate(spell, this.transform.position, this.transform.rotation);
	newSpell.GetComponent(SpellStats).setChaos(isChaos);
	
	if (isChaos == 1) {
		newSpell.transform.Translate(quatX * quatY * Vector3(-0.2, 0, 0.5));
	} else {
		newSpell.transform.Translate(quatX * quatY * Vector3(0.2, 0, 0.5));
	}
	
	newSpell.transform.Rotate(Vector3(90 - rotationY, rotationX, 0));
	var speed : Vector3;
	if (isChaos == 1) {
		speed = Vector3(0.2, 0, 10);
		speed = quatX * quatY * speed;
		newSpell.rigidbody.velocity = speed;
	} else {
		speed = Vector3(-0.2, 0, 10);
		speed = quatX * quatY * speed;
		newSpell.rigidbody.velocity = speed;
	}
	
}