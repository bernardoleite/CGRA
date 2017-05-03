function MyBubble(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

 	this.initBuffers();
 };

 MyBubble.prototype = Object.create(CGFobject.prototype);
 MyBubble.prototype.constructor = MyBubble;

 MyBubble.prototype.initBuffers = function() {
	
 	this.vertices = [];
 	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var angle = 2 * Math.PI / (this.slices);
	var angle_height = (Math.PI / 2)/this.stacks;
	var stepS = 0;
	var stepT = 0;
	// topo
	for (var stack = 0; stack <= this.stacks; stack++)
	{
		for (var slice = 0; slice <= this.slices; slice++)
		{
			this.vertices.push(Math.cos(slice * angle) * Math.cos(stack * angle_height), Math.sin(slice * angle) * Math.cos(stack * angle_height), Math.sin(stack * angle_height));
			this.normals.push(-Math.cos(slice * angle) * Math.cos(stack * angle_height), -Math.sin(slice * angle) * Math.cos(stack * angle_height), -Math.sin(stack * angle_height));
			this.texCoords.push(stepS, stepT);

			stepS+=1/this.slices;
		}
		stepS = 0;
		stepT+= 1/this.stacks;
	}

	this.vertices.push(0, 0, 1);
	this.normals.push(0, 0, -1);
	
	var n = this.slices + 1;
	for (var stack = 0; stack < this.stacks - 1; stack++)
	{
		for (var slice = 0; slice < this.slices; slice++)
		{
			this.indices.push(stack * n + slice, stack * n + ((slice + 1) % n), (stack + 1) * n + ((slice + 1) % n));
			this.indices.push(stack * n + slice, (stack + 1) * n + ((slice + 1) % n), (stack + 1) * n + slice);
		}
	}
	
	this.vertices.push(0, 0, 0);
	// base
	for (var slice = -1; slice < this.slices; slice++)
	{
		this.vertices.push(Math.cos(slice * angle), Math.sin(slice * angle), 0);
		this.normals.push(0, 0, 1);
	}

	for (var slice = 0; slice < this.slices; slice++)
	{
		if (slice + 1 >= this.slices)
		{
			this.indices.push(this.stacks * this.slices + 2 + slice, this.stacks * this.slices + 1, this.stacks * this.slices + 2);
		}
		else this.indices.push(this.stacks * this.slices + 2 + slice, this.stacks * this.slices + 1, this.stacks * this.slices + 3 + slice);
	}
	

	/*var stack = 1/this.stacks;
	//---------------stacks------------------
	for (var q = 0; q <= 1;) {
		//---------------slices------------------
		for (var i = 0; i < this.slices; i++) {
			this.vertices.push(Math.sqrt(1-(q*q))*Math.cos(i*(2*Math.PI)/this.slices));
			this.vertices.push(Math.sqrt(1-(q*q))*Math.sin(i*(2*Math.PI)/this.slices));
			this.vertices.push(q);

			this.normals.push(-Math.sqrt(1-(q*q))*Math.cos(i*(2*Math.PI)/this.slices));
			this.normals.push(-Math.sqrt(1-(q*q))*Math.sin(i*(2*Math.PI)/this.slices));
			this.normals.push(-q);

					//this.texCoords.push(q/this.slices,1-(stack-1)/(this.stacks-1));
					//this.texCoords.push(q/this.slices,1-(stack-1)/(this.stacks-1));
					//this.texCoords.push(q/this.slices,1-(stack-1)/(this.stacks-1));

		}

		q = q + stack;
	}

	for (var q = 0; q < this.stacks; q++) {
		//---------------slices------------------
		for (var i = 0; i < this.slices; i++) {

			this.indices.push(this.slices*q+i);
			this.indices.push(this.slices*q+i+1);
			this.indices.push(this.slices*(q+1)+i);
			if (i != (this.slices - 1)) {
				this.indices.push(this.slices*(q+1)+i+1);
				this.indices.push(this.slices*(q+1)+i);
				this.indices.push(this.slices*q+i+1);
				}
			else {
				this.indices.push(this.slices*q);
				this.indices.push(this.slices*q+i+1)
				this.indices.push(this.slices*q+i);
				}
		}
	}

	var stepS = 0;
	var stepT = 0;
	// topo
	for (var stack = 0; stack <= this.stacks; stack++)
	{
		for (var slice = 0; slice < this.slices; slice++)
		{
			this.texCoords.push(stepS, stepT);

			stepS+=1/this.slices;
		}
		stepS = 0;
		stepT+= 1/this.stacks;
	}*/

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();

 };