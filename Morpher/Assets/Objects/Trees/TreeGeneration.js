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
		generateTree();
	}
}

function genRandom() {
	var randX = Random.Range(0, 120);
	
	var randNeg = Random.Range(0, 10);
	
	if (randNeg < 5) {
		randX = -randX;
	}
	
	return randX;
}

function generateTree() {
		var newPos = this.transform.position;
		
		while (Vector3.Distance(newPos, this.transform.position) < 10) {
			var randX = genRandom();
			var randY = genRandom();
			newPos = this.transform.position + Vector3(randX, 0, randY);
		}
		newPos.y = GameObject.FindGameObjectWithTag("TerrainWorld").GetComponent(Terrain).SampleHeight(newPos);
		GameObject.Instantiate(prefabTree, newPos, this.transform.rotation);
}