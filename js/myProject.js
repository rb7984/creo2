import * as THREE from './three.module.js';
import {OrbitControls} from './OrbitControls.js';
import {FBXLoader} from './FBXLoader.js';
import { MTLLoader } from './MTLLoader.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#ededed");
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var g2 = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
var m2 = new THREE.MeshBasicMaterial({ color: '#a18787', side: THREE.DoubleSide });
var plane = new THREE.Mesh(g2, m2);
plane.rotateX( - Math.PI / 2);

scene.add(plane);

camera.position.set(5,5,5);
camera.lookAt(0,0,0);

const light = new THREE.AmbientLight( 0x404040, 20);
scene.add(light);

const controls = new OrbitControls(camera, renderer.domElement);

const fbxLoader = new FBXLoader();
fbxLoader.load('../assets/stand.fbx',
(object) => {
    object.translateY(0.01);
    scene.add(object)
}
);


function animate() {
	requestAnimationFrame( animate );

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
    controls.update();
	renderer.render( scene, camera );
};

animate();