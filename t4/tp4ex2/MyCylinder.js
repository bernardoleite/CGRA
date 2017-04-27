/**
 * MyCylinder
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/
 	
 var numberOfSides = this.slices,
    size = 1,
    Xcenter = 0,
    Ycenter = 0;

	this.vertices = [];
	this.indices = [];
	this.normals = [];
	
   

   var k = 1;
   var vert = 0;
   var lados = 1;
   var z = 0;
	var stack = 1;


for (stack = 1; stack <= this.stacks; stack++)
{

		for (lados = 1; lados <= numberOfSides; lados += 1) {

		this.vertices.push(Xcenter + size * Math.cos(k * 2 * Math.PI / numberOfSides), 
		Ycenter + size * Math.sin(k * 2 * Math.PI / numberOfSides), z);

		this.normals.push(
					Math.cos(k*(2*Math.PI/numberOfSides) ),
					Math.sin(k*(2*Math.PI/numberOfSides) ),
					0 
					);


		this.vertices.push(Xcenter + size * Math.cos(k * 2 * Math.PI / numberOfSides),
		Ycenter + size * Math.sin(k * 2 * Math.PI / numberOfSides),
		z+(1/this.stacks));


		this.normals.push(
					Math.cos( k*(2*Math.PI/numberOfSides) ),
					Math.sin(k*(2*Math.PI/numberOfSides) ),
					0 
					);

		k = k + 1; //importante para mudança de angulo


		this.vertices.push(Xcenter + size * Math.cos(k * 2 * Math.PI / numberOfSides),
		Ycenter + size * Math.sin(k * 2 * Math.PI / numberOfSides),
		z);

		this.normals.push(
					Math.cos(k*(2*Math.PI/numberOfSides) ),
					Math.sin(k*(2*Math.PI/numberOfSides) ),
					0 
					);

		this.vertices.push(Xcenter + size * Math.cos(k * 2 * Math.PI / numberOfSides),
		Ycenter + size * Math.sin(k * 2 * Math.PI / numberOfSides),
		z+(1/this.stacks));

			this.normals.push(
					Math.cos(k*(2*Math.PI/numberOfSides) ),
					Math.sin(k*(2*Math.PI/numberOfSides) ),
					0
					);

		this.indices.push(vert, vert + 2, vert + 3); //formar 1º triangulo da face
		this.indices.push(vert+3, vert + 1, vert ); // formar 2º triangulo da face

		vert = vert + 4; //vertices para os indices


		}
		z = z + (1/this.stacks);
		k = 1;

}


	console.log(this.normals);
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
