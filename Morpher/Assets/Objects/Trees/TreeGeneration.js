#pragma strict

var maxNum : float;
var prefabTree : GameObject;

function Start () {
	generateTrees();
}

function Update () {

}

function generateTrees() {
	
	for (var temp = 0; temp < maxNum; temp++) {
		var randX = genRandom();
		var randY = genRandom();
		var newPos = this.transform.position + Vector3(randX, 0, randY);
		newPos.y = GameObject.FindGameObjectWithTag("TerrainWorld").GetComponent(Terrain).SampleHeight(newPos);
		GameObject.Instantiate(prefabTree, newPos, this.transform.rotation);
	}
}

function genRandom() {
	var randX = Random.Range(100, 500);
	
	var randNeg = Random.Range(0, 10);
	
	if (randNeg < 5) {
		randX = -randX;
	}
	
	return randX;
}