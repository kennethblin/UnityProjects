#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionStay (theCollision : Collision){
	if (theCollision.gameObject.Equals(GameObject.FindGameObjectWithTag("Player"))) {
		if (((Time.time - theCollision.gameObject.GetComponent(Move).getJumpTime()) > 2) && (theCollision.gameObject.GetComponent(Move).getJump() == 2)) {
			theCollision.gameObject.GetComponent(Move).reJump();
		}
	}
}