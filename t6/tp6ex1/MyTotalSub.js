/**
 * MyTotalSub
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

var rot = 0;
var go = 0;
var ctr = 0;

 
function MyTotalSub(scene) {
	CGFobject.call(this,scene);


	this.initBuffers();
	this.sub = new MySubmarine(this.scene);

};

MyTotalSub.prototype = Object.create(CGFobject.prototype);
MyTotalSub.prototype.constructor=MyTotalSub;



MyTotalSub.prototype.update = function() {

	this.RotateLeft();
	
	  		
  }

 MyTotalSub.prototype.update = function() {

	this.RotateRight(); 
	  		
  }


MyTotalSub.prototype.update = function() {

	this.goFront();		
  }

 MyTotalSub.prototype.update = function() {

	this.goBack(); 
	  		
  }


//RODAR ESQUERDA - TECLA A
  MyTotalSub.prototype.RotateLeft = function() {

	rot = rot + 0.3;
	ctr = 2;

  }

//RODAR DIREITA- TECLA D
  MyTotalSub.prototype.RotateRight = function() {

	rot = rot - 0.3;
	ctr = 2;

  }

//IR PARA A FRENTE- TECLA W
  MyTotalSub.prototype.goFront = function() {

	go = go + 0.3;
	ctr = 1;

  }

//IR PARA TRÁS- TECLA S
  MyTotalSub.prototype.goBack = function() {

	go = go - 0.3;
	ctr = 1;

  }


MyTotalSub.prototype.display = function (){



this.scene.pushMatrix();

this.scene.rotate(rot,0,1,0);
this.scene.translate(go*Math.cos(rot),0,go*Math.sin(rot));
	

this.sub.display();

this.scene.popMatrix();





}






