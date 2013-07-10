#pragma strict

function Start () {

}

function Update () {
	if (Vector3.Distance(this.transform.position, GameObject.FindGameObjectWithTag("Player").transform.position) > 150) {
		GameObject.FindGameObjectWithTag("TreeGenerator").GetComponent(TreeGeneration).generateTree();
		Destroy(this.gameObject);
	}
}