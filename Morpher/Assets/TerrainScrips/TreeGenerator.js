#pragma strict

var percent : float;
var prefabTree : GameObject;

function Start () {
	generateTrees();
}

function Update () {

}

function generateTrees() {
	var size = GameObject.FindGameObjectWithTag("TerrainWorld").GetComponent(Terrain).terrainData.size;
	var numTrees = percent * size.x * size.z;
	
	for (var temp = 0; temp < numTrees; temp++) {
		var randX = Random.Range(0, size.x);
		var randY = Random.Range(0, size.z);
		var newPos = this.transform.position + Vector3(randX, 0, randY);
		newPos.y = GameObject.FindGameObjectWithTag("TerrainWorld").GetComponent(Terrain).SampleHeight(newPos);
		GameObject.Instantiate(prefabTree, newPos, this.transform.rotation);
	}
}