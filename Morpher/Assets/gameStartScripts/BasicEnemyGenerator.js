#pragma strict
var basicEnemy : GameObject;

function Start () {
	 GameObject.Instantiate(basicEnemy, this.transform.position, this.transform.rotation);
}

function Update () {

}