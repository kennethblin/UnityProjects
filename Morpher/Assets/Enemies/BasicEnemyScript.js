#pragma strict
var status : float;
function Start () {
	status = 0;
	this.animation.Play("Standing_001");
	status = 1;
}

function Update () {
	if (!this.animation.isPlaying) {
		if (status == 1) {
			if (Vector3.Distance(GameObject.FindGameObjectWithTag("Player").transform.position, this.transform.position) < 8) {
				this.animation.Play("Chaos");
				status = 2;
			}
		} else if (status == 2) {
			if (Vector3.Distance(GameObject.FindGameObjectWithTag("Player").transform.position, this.transform.position) < 5) {
				this.animation.Play("HeadRot");
				status = 3;
			}
		}
	}
}

function OnCollisionStay (theCollision : Collision){

}