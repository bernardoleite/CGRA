/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyBigBubble(scene) {
	CGFobject.call(this,scene);
	
	this.bubble = new MyLampInverted(this.scene, 100, 5);

	this.WaterAppearance = new CGFappearance(this.scene);
	this.WaterAppearance.setAmbient(0.3,0.3,0.3,1);
	this.WaterAppearance.setDiffuse(5,5,80,1);
	this.WaterAppearance.loadTexture("resources/images/teste.png");
	this.WaterAppearance.setSpecular(0.1,0.1,0.1,1);	

	this.WaterAppearance2 = new CGFappearance(this.scene);
	this.WaterAppearance2.setAmbient(0.3,0.3,0.3,1);
	this.WaterAppearance2.setDiffuse(5,5,80,1);
	this.WaterAppearance2.loadTexture("resources/images/teste2.png");
	this.WaterAppearance2.setSpecular(0.1,0.1,0.1,1);	
};

MyBigBubble.prototype = Object.create(CGFobject.prototype);
MyBigBubble.prototype.constructor=MyBigBubble;

MyBigBubble.prototype.display = function (){
this.scene.pushMatrix();
this.scene.rotate(Math.PI/2, 1,0,0);

this.scene.scale(-1,-1,-1);
this.scene.scale(100,100,100);


this.scene.pushMatrix();
	//this.scene.rotate(-Math.PI/23, 0,0,11);
	this.WaterAppearance.apply();
    this.bubble.display();
this.scene.popMatrix();

this.scene.pushMatrix();
	this.scene.rotate(Math.PI, 1,0,0);
	this.WaterAppearance2.apply();
   this.bubble.display();
this.scene.popMatrix();

this.scene.popMatrix();


}
