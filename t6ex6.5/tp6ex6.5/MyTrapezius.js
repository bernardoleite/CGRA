/**
 * MyQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyTrapezius(scene) {
	CGFobject.call(this,scene);
	
	this.quad = new MyQuad(this.scene);
	this.triangle = new MyTriangle(this.scene);
	
};

MyTrapezius.prototype = Object.create(CGFobject.prototype);
MyTrapezius.prototype.constructor=MyTrapezius;

MyTrapezius.prototype.display = function (){
this.scene.pushMatrix();

    //this.scene.scale(1.5,0.7,0.2);

    this.scene.pushMatrix();
           this.scene.scale(1.5,1,1);
                      this.scene.translate(-0.5,0,0);


        this.scene.pushMatrix();
           //this.scene.translate(-2,2,0);
           //this.scene.scale(1,2,1);
           this.scene.rotate(-Math.PI,1,0,0);
           this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
           //this.scene.scale(1,2,1);
           this.scene.rotate(-Math.PI,1,0,0);
           this.scene.translate(1,0,0);
           this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
           //this.scene.scale(1,2,1);
           this.scene.rotate(Math.PI,0,0,1);
           this.scene.translate(0,0,1);
           this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
           //this.scene.scale(1,2,1);
           this.scene.rotate(Math.PI,0,0,1);
           this.scene.translate(-1,0,1);
           this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
           //this.scene.scale(1,2,1);
           this.scene.rotate(-Math.PI/2,1,0,0);
           this.scene.translate(0,-0.5,0.5);
           this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
           //this.scene.scale(1,2,1);
           this.scene.rotate(-Math.PI/2,1,0,0);
           this.scene.translate(1,-0.5,0.5);
           this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
           //this.scene.scale(1,2,1);
           this.scene.rotate(Math.PI/2,1,0,0);
           this.scene.translate(0,0.5,0.5);
           this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
           //this.scene.scale(1,2,1);
           this.scene.rotate(Math.PI/2,1,0,0);
           this.scene.translate(1,0.5,0.5);
           this.quad.display();
        this.scene.popMatrix();
    this.scene.popMatrix();


    ////////////

    this.scene.pushMatrix(); // triangulo do trapezio
        this.scene.pushMatrix();
           //this.scene.scale(1,2,1);
           this.scene.rotate(Math.PI/2,1,0,0);
           this.scene.translate(2,0.5,0.5);
           this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
               //this.scene.scale(1,2,1);
               this.scene.rotate(-Math.PI/2,1,0,0);
               this.scene.rotate(Math.PI/4,0,1,0);
               this.scene.translate(1.4,-0.5,1.4);
               this.scene.scale(1.4,1,1);
               this.quad.display();
            this.scene.popMatrix();

        this.scene.pushMatrix();
           this.scene.translate(2,0,1);
           this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
           this.scene.rotate(Math.PI,1,0,0);
           this.scene.rotate(-Math.PI/2,0,0,1);
           this.scene.translate(0,2,0);
           this.triangle.display();
        this.scene.popMatrix();

    this.scene.popMatrix();

    this.scene.pushMatrix(); // triangulo do trapezio

        this.scene.rotate(Math.PI,0,1,0);
        this.scene.translate(0,0,-1);


            this.scene.pushMatrix();
               //this.scene.scale(1,2,1);
               this.scene.rotate(Math.PI/2,1,0,0);
               this.scene.translate(2,0.5,0.5);
               this.quad.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                   //this.scene.scale(1,2,1);
                   this.scene.rotate(-Math.PI/2,1,0,0);
                   this.scene.rotate(Math.PI/4,0,1,0);
                   this.scene.translate(1.4,-0.5,1.4);
                   this.scene.scale(1.4,1,1);
                   this.quad.display();
                this.scene.popMatrix();

            this.scene.pushMatrix();
               this.scene.translate(2,0,1);
               this.triangle.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
               this.scene.rotate(Math.PI,1,0,0);
               this.scene.rotate(-Math.PI/2,0,0,1);
               this.scene.translate(0,2,0);
               this.triangle.display();
            this.scene.popMatrix();
    this.scene.popMatrix();

this.scene.popMatrix();


}
