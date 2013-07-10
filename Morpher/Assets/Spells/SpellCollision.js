#pragma strict

function Start () {

}

function Update () {

}

//Basic collision detection checking for two differently named objects
function OnCollisionStay (theCollision : Collision){
	if (theCollision.gameObject.Equals(GameObject.FindGameObjectWithTag("Player"))) {
		theCollision.gameObject.rigidbody.velocity = Vector3.zero;
	} else {
		Destroy(this.gameObject);
	}
}