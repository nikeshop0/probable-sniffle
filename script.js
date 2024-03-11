var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0xff0000});

var cube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 0xff0000}));
scene.add(cube);



camera.position.z = 5;

const rectLight1 = new THREE.RectAreaLight( 0xff0000, 5, 4, 10 );
rectLight1.position.set( 1, 1, 1 );
scene.add( rectLight1 );

var animate = function() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();

function onKeyDown(event) {
    var keyCode = event.which;
    var speed = 0.01;

    console.log('keyCode', keyCode);

    if (keyCode == 32) {
        cube.position.set((Math.random()*2)-1, (Math.random()*2)-1, (Math.random()*2)-1);
        cube.material.color.setHex(randomColor());
        
    }
};

function onScroll(event) {
    console.log("Scroll");
    console.log(scrollY);
	cube.rotation.x = scrollY/1000;
};

const randomColor = () => {
    let color = '0x';
    for (let i = 0; i < 6; i++){
       const random = Math.random();
       const bit = (random * 16) | 0;
       color += (bit).toString(16);
    };
    return color;
 };

document.addEventListener("scroll", onScroll);
document.addEventListener("keydown", onKeyDown, false);
/*
renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.setAnimationLoop( animation );
				renderer.outputEncoding = THREE.sRGBEncoding;
				document.body.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.set( 0, 5, - 15 );

				scene = new THREE.Scene();

				RectAreaLightUniformsLib.init();

				const rectLight1 = new THREE.RectAreaLight( 0xff0000, 5, 4, 10 );
				rectLight1.position.set( - 5, 5, 5 );
				scene.add( rectLight1 );

				const rectLight2 = new THREE.RectAreaLight( 0x00ff00, 5, 4, 10 );
				rectLight2.position.set( 0, 5, 5 );
				scene.add( rectLight2 );

				const rectLight3 = new THREE.RectAreaLight( 0x0000ff, 5, 4, 10 );
				rectLight3.position.set( 5, 5, 5 );
				scene.add( rectLight3 );

				scene.add( new RectAreaLightHelper( rectLight1 ) );
				scene.add( new RectAreaLightHelper( rectLight2 ) );
				scene.add( new RectAreaLightHelper( rectLight3 ) );

				const geoFloor = new THREE.BoxGeometry( 2000, 0.1, 2000 );
				const matStdFloor = new THREE.MeshStandardMaterial( { color: 0x808080, roughness: 0.1, metalness: 0 } );
				const mshStdFloor = new THREE.Mesh( geoFloor, matStdFloor );
				scene.add( mshStdFloor );

				const geoKnot = new THREE.TorusKnotGeometry( 1.5, 0.5, 200, 16 );
				const matKnot = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0, metalness: 0 } );
				const meshKnot = new THREE.Mesh( geoKnot, matKnot );
				meshKnot.name = 'meshKnot';
				meshKnot.position.set( 0, 5, 0 );
				scene.add( meshKnot );

*/