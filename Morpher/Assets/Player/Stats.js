#pragma strict

var speed :float;
var sensitivity :float;
var rotX :float;
var rotY :float;
var jump : float;

function Start () {
	speed = 200;
	sensitivity = 15.0;
	rotX = 0;
	rotY = 0;
	jump = 500;
}

function Update () {

}

function getSpeed() {
	return speed;
}

function setSpeed(newSpeed : float) {
	speed = newSpeed;
}

function getSensitivity() {
	return sensitivity;
}

function setSensitivity(newSens : float) {
	sensitivity = newSens;
}

function getRotX() {
	return rotX;
}

function getRotY() {
	return rotY;
}

function setRotX(newRot : float) {
	rotX = newRot;
}

function setRotY(newRot : float) {
	rotY = newRot;
}

function getJump() {
	return jump;
}

function setJump(newJump : float) {
	jump = newJump;
}