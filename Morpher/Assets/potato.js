#pragma strict

function Start () {

}

function Update () {
	var rand = Random.Range(0, 10);
	if (!this.animation.isPlaying) {
		if (rand < 5) {
			this.animation.Play("Standing");
		} else {
			this.animation.Play("Chaos");
		}
	}
}