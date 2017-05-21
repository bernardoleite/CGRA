/**
 * MyHeli
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

 var heli = 0;
 var spd = 0;
 
function MyHeli(scene) {
	CGFobject.call(this,scene);
	this.cube = new MyUnitCubeQuad(this.scene);

};

MyHeli.prototype = Object.create(CGFobject.prototype);
MyHeli.prototype.constructor=MyHeli;

MyHeli.prototype.up = function (helice, speed){
		
		if(speed == 0){
			spd = 0;
			heli = 180;
		}
		else
		{	
			//if(spd != speed)
				spd += speed;
				heli = spd*200 + helice;
		}
		
}

MyHeli.prototype.display = function (){

    this.scene.pushMatrix();
    	this.scene.rotate(180*(Math.PI/180)-heli*(Math.PI/180), 1 , 0, 0);

		//this.scene.rotate(heli, 0, 0, 1);
		this.scene.scale(0.5,1,1);
					this.scene.scale(0.20,0.6,0.1);

        this.cube.display();	
  	this.scene.popMatrix();



}






