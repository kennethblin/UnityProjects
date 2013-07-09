#pragma strict
var spell : GameObject;

function Start () {

}

function Update () {
	if (Input.GetMouseButtonDown(1)) {
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
	newSpell.transform.Translate(quatX * quatY * Vector3(0, 0, 0.5));
	
	newSpell.transform.Rotate(Vector3(90 - rotationY, rotationX, 0));
	//newSpell.transform.rotation *= quatX;
	//newSpell.transform.rotation *= quatY;
	
	
}