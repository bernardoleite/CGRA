/**
 * MyClock.js
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

var clockHourAngle = -90;
var clockMinAngle = 0;
var clockSecAngle = 90;

function MyClock(scene) {
	CGFobject.call(this,scene);

	this.clocktop= new MyPolygon(this.scene,12,1);
	this.clockbody = new MyPrism(this.scene,12,1);

	this.handHours = new MyClockHand(this.scene,0.4,1);
	this.handMin = new MyClockHand(scene,0.5,1);
	this.handSec = new MyClockHand(scene,0.6,0.5);


	this.cylinderAppearance = new CGFappearance(this.scene);
	this.cylinderAppearance.setDiffuse(1,1,1,1);
	this.cylinderAppearance.setAmbient(0.4,0.4,0.4,1);	
	this.cylinderAppearance.setShininess(10);
	this.cylinderAppearance.setSpecular(0.1,0.1,0.1,1);
	this.cylinderAppearance.loadTexture("resources/images/cylinder.png");

	this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.setDiffuse(1,1,1,1);
	this.clockAppearance.setAmbient(0.4,0.4,0.4,1);	
	this.clockAppearance.setShininess(10);
	this.clockAppearance.setSpecular(0.1,0.1,0.1,1);
	this.clockAppearance.loadTexture("resources/images/clock.png");

};

MyClock.prototype = Object.create(CGFobject.prototype);
MyClock.prototype.constructor=MyClock;

   MyClock.prototype.update = function() {

	this.setAngleHours(clockHourAngle+(1/600)); // 360 / 60 / ...3

	this.setAngleMin(clockMinAngle+0.1);//2
	
	this.setAngleSec(clockSecAngle+6);//1
		  		
  }

  MyClock.prototype.setAngleHours = function(ang) {
	clockHourAngle=ang;
  }
  MyClock.prototype.setAngleMin = function(ang) {
	clockMinAngle=ang;
  }
  MyClock.prototype.setAngleSec = function(ang) {
	clockSecAngle=ang;
  }



MyClock.prototype.display = function (){

this.scene.pushMatrix();

	this.scene.scale(1,1,0.4);
	this.scene.translate(7.3,7,0);
	this.clockbody.display();
	
this.scene.popMatrix();
	
this.scene.pushMatrix();
	
	this.scene.translate(7.3,7,0.4);
	this.clockAppearance.apply();
	this.scene.rotate(-Math.PI,0,0,1);
	this.clocktop.display();
	
this.scene.popMatrix();


this.scene.pushMatrix();
	
	this.scene.translate(7.3,7,0.5);
	this.scene.rotate(180*(Math.PI/180)-clockHourAngle*(Math.PI/180), 0 , 0, 1);
	this.handHours.display();

this.scene.popMatrix();

this.scene.pushMatrix();
	
	this.scene.translate(7.3,7,0.5);
	this.scene.rotate(180*(Math.PI/180)-clockMinAngle*(Math.PI/180), 0 , 0, 1);
	this.handMin.display();

this.scene.popMatrix();

this.scene.pushMatrix();
	
	this.scene.translate(7.3,7,0.5);
	this.scene.rotate(180*(Math.PI/180)-clockSecAngle*(Math.PI/180), 0 , 0, 1);
	this.handSec.display();

this.scene.popMatrix();


}


