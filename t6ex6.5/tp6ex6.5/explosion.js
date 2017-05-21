/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function explosion(scene) {
	CGFobject.call(this,scene);
	
	this.bubble = new MyLamp(this.scene, 100, 5);

	this.WaterAppearance = new CGFappearance(this.scene);
	this.WaterAppearance.setAmbient(1,1,1,1);
	this.WaterAppearance.setDiffuse(5,5,5,1);
	this.WaterAppearance.loadTexture("resources/images/fire.jpg");
	this.WaterAppearance.setSpecular(0.1,0.1,0.1,1);	

	this.WaterAppearance2 = new CGFappearance(this.scene);
	this.WaterAppearance2.setAmbient(1,1,1,1);
	this.WaterAppearance2.setDiffuse(5,5,5,1);
	this.WaterAppearance2.loadTexture("resources/images/fire.jpg");
	this.WaterAppearance2.setSpecular(0.1,0.1,0.1,1);	
};

explosion.prototype = Object.create(CGFobject.prototype);
explosion.prototype.constructor=explosion;

explosion.prototype.display = function (){
this.scene.pushMatrix();
this.scene.rotate(Math.PI/2, 1,0,0);

//this.scene.scale(-1,-1,-1);
this.scene.scale(0.05,0.05,0.05);


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
