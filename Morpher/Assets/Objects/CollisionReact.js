#pragma strict

function Start () {

}

function Update () {

}

//Basic collision detection checking for two differently named objects
function OnCollisionStay (theCollision : Collision){
	if (theCollision.gameObject.Equals(GameObject.FindGameObjectWithTag("Player"))) {
		theCollision.gameObject.rigidbody.velocity = Vector3.zero;
	} else if (theCollision.gameObject.GetComponent(SpellStats) != null) {
		if (this.gameObject.GetComponent(Morph) != null) {
			if (this.gameObject.GetComponent(Morph).checkChaos() != theCollision.gameObject.GetComponent(SpellStats).checkChaos()) {
				this.gameObject.GetComponent(Morph).morph();
			}
		}
	}
}