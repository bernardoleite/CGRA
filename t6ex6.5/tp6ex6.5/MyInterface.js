/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	//this.gui.add(this.scene, 'doSomething');	

	// add a group of controls (and open/expand by defult)
	
	var group=this.gui.addFolder("Luzes");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'luz0');
	group.add(this.scene, 'luz1');
	group.add(this.scene, 'luz2');
	group.add(this.scene, 'luz3');
	group.add(this.scene, 'luz4');
	group.add(this.scene, 'luz5');
	
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	//this.gui.add(this.scene, 'SubmarineSpeed', -5, 5);
	this.gui.add(this.scene, 'Clock');
	this.gui.add(this.scene, 'Texture', 
	{ Metal: 0, Simpson: 1, Blue: 2} );

	

	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		case (65): // 'A'
		{
		    this.scene.submarine.goLeft();
		    
		    break;
		}

        case(97): // 'a'
		{
			this.scene.submarine.goLeft();
			
		    break;
		}

		case(68): // 'D'
		{
			this.scene.submarine.goRight();
		    break;
		}

		case(100): // 'd'
		{
			this.scene.submarine.goRight();
		    break;
		}

		case(87): // 'W'
		{
			this.scene.submarine.goBack();
		    break;
		}

		case(119): // 'w'
		{
			this.scene.submarine.goBack();
		    break;
		}

		case(83): // 'S'
		{
			this.scene.submarine.goFront();
		    break;
		}

		case(115): // 's'
		{
			this.scene.submarine.goFront();
		    break;
		}

		// updowm
		case(81): // 'Q'
		{
			this.scene.submarine.goUp();
		    break;
		}

		case(113): // 'q'
		{
			this.scene.submarine.goUp();
		    break;
		}

		case(69): // 'E'
		{
			this.scene.submarine.goDown();
		    break;
		}

		case(101): // 'e'
		{
			this.scene.submarine.goDown();
		    break;
		}

		case(80): // 'P'
		{
			this.scene.submarine.goPerUp();
		    break;
		}

		case(112): // 'p'
		{
			this.scene.submarine.goPerUp();
		    break;
		}

		case(76): // 'L'
		{
			this.scene.submarine.goPerDown();
		    break;
		}

		case(108): // 'l'
		{
			this.scene.submarine.goPerDown();
		    break;
		}

		case(70): // 'F'
		{
			if (this.scene.NR_TARGET >= 3)
				console.log ('No More Targets!');
				
			if (this.scene.NR_TARGET < 3)
			{	
			this.scene.updatePoints();
			this.scene.torpedoAng = Math.PI/2;
			this.scene.ACTIVATE_TORPEDO = true;
		    break;
			}
		}

		case(102): // 'f'
		{
			if (this.scene.NR_TARGET >= 3)
				console.log ('No More Targets!');
				
			if (this.scene.NR_TARGET < 3)
			{	
			this.scene.updatePoints();
			this.scene.torpedoAng = Math.PI/2;
			this.scene.ACTIVATE_TORPEDO = true;
		    break;
			}
		}

		
	};
};
