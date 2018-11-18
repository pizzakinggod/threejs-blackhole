/* globals THREE */
// http://www.dominictran.com/pdf/ThreeJS.Essentials.PACKT.pdf

// Start with scene, camera, and renderer
let scene;
let camera;
let renderer;

window.onload =()=>{
  
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); // POV, ratio, start, end
  camera.position.x = 15;
  camera.position.y = 16;
  camera.position.z = 13;
  camera.lookAt(scene.position);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000, 1.0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMapEnabled = true;
  
  document.body.appendChild( renderer.domElement );
  
  sceneInit();
  render();

}

const sceneInit=()=>{
  
  //cube
  var cubeGeometry = new THREE.CubeGeometry(6, 4, 6); // width, height, depth
  var cubeMaterial = new THREE.MeshLambertMaterial({
   color: "red"
  });
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true; // must tell which object will cast shadow
  scene.add(cube);
  
  //floor
  var planeGeometry = new THREE.PlaneGeometry(20, 20);
  var planeMaterial = new THREE.MeshLambertMaterial({
   color: 0xcccccc
  });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true; // shadow will be casted on the floor
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.y = -2;
  scene.add(plane);
  
  //light
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(10, 20, 20);
  spotLight.castShadow = true;
  scene.add(spotLight);
  
  
}

const render=()=>{
  
  requestAnimationFrame(render)
	renderer.render( scene, camera );
  
}
