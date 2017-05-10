


function MyLampInverted(scene, nrslicess, nrstacks) {
 	CGFobject.call(this,scene);
	

	this.andares=nrstacks;
	this.lados=nrslicess;

	 this.indices = [];this.vertices = [];
 	this.texCoords = [];this.normals = [];
 var nrstack = 0;
var nrslices = 0;
	
 	this.initBuffers();
 };

 MyLampInverted.prototype = Object.create(CGFobject.prototype);
 MyLampInverted.prototype.constructor = MyLampInverted;


 MyLampInverted.prototype.func1 = function(aux1,aux2,ang,alturaAng) {
			
				this.vertices.push(
			Math.cos( alturaAng*nrstack)*Math.cos(ang*nrslices) , 
			Math.cos(alturaAng*nrstack)*Math.sin(ang*nrslices) , 
			Math.sin(nrstack * alturaAng)
			);

			this.func11(aux1,aux2,ang,alturaAng);
};

 MyLampInverted.prototype.func11 = function(aux1,aux2,ang,alturaAng) {
			

		this.normals.push(
			-Math.cos(alturaAng*nrstack)*Math.cos(ang*nrslices), 
			-Math.cos(alturaAng*nrstack)*Math.sin(nrslices * ang) , 
			-Math.sin(nrstack * alturaAng)
			);	
};


 MyLampInverted.prototype.lastfunc = function(nrslices,nrstack, aux3) {
			
			if (1+nrslices < this.lados) 
		{
			this.indices.push(
			2 + nrslices+this.andares * this.lados , 
			1+this.andares * this.lados, 
			nrslices +3+this.andares * this.lados
			);
		}
		else if (1+nrslices >= this.lados)
		{
			this.lastfunc2(nrslices,nrstack, aux3);
		}
			

};

 MyLampInverted.prototype.lastfunc2 = function(nrslices,nrstack, aux3) {
			this.indices.push(
			 2 + nrslices+this.andares * this.lados , 
			1+this.andares * this.lados ,
			2+ this.andares * this.lados 
			 );
 };

 MyLampInverted.prototype.func2 = function(aux1,aux2,aux3,ang,alturaAng, nrstack, nrslices) {

			this.func22(aux1,aux2,aux3,ang,alturaAng, nrstack, nrslices);

			this.indices.push(
			nrstack * aux3 + nrslices, 
			(nrstack + 1) * aux3 + ((nrslices + 1) % aux3), 
			(nrstack + 1) * aux3 + nrslices
			);

};


 MyLampInverted.prototype.func22 = function(aux1,aux2,aux3,ang,alturaAng, nrstack, nrslices) {

			this.indices.push(
			nrstack * aux3 + nrslices, 
			nrstack * aux3 + ((nrslices + 1) % aux3), 
			(nrstack + 1) * aux3 + ((nrslices + 1) % aux3)
			);


};

 MyLampInverted.prototype.initBuffers = function() {
	

	var aux1 = 0;var aux2 = 0;
	var ang = 2 * Math.PI / (this.lados);var alturaAng = (Math.PI / 2)/this.andares;

	
	
	for (nrstack = 0; nrstack <= this.andares; )
	{
		for (nrslices = 0; nrslices <= this.lados; )
		{
		this.func1(aux1,aux2,ang,alturaAng);

			aux1= aux1 + 1/this.lados;
			this.texCoords.push(aux1, aux2);
nrslices++;
			
		}
		
		aux2 = aux2 + 1/this.andares;aux1 = 0;	nrstack++;
	}


	var aux3 = this.lados + 1;
	this.normals.push(0, 0, -1);
	this.vertices.push(0, 0, 1);
	
	
	
	for ( nrstack = 0; nrstack < this.andares; )
	{
		for (nrslices = 0; nrslices < this.lados; nrslices++)
		{
			this.func2(aux1,aux2,aux3,ang,alturaAng, nrstack, nrslices);
		}
		nrstack++
	}
	
	this.vertices.push(0, 0, 0);



	for ( nrslices = -1; nrslices < this.lados;)
	{
		this.normals.push(0, 0, -1);

		this.vertices.push(Math.cos(ang*nrslices), 
		Math.sin(ang*nrslices), 0
		);

		nrslices++;
	}

	for ( nrslices = 0; nrslices < this.lados; )
	{
		this.lastfunc(nrslices,nrstack, aux3);nrslices++;
	}
	


 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();

 };


