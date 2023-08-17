// Create a Scene
const scene = new THREE.Scene();

// Canvas
const canvas = document.querySelector("canvas.webgl");

//load images as textures
const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);
//load minecraft block
const minecraftBlock = textureLoader.load("/images/musnote.jpg");
minecraftBlock.generateMinmaps = false;
minecraftBlock.minFilter = THREE.NearestFilter;
minecraftBlock.magFilter = THREE.NearestFilter;
// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: '#00ff00' });
const material = new THREE.MeshBasicMaterial({ map: minecraftBlock });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(45, 500 / 500, 0.1, 100);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	alpha: true,
});

renderer.setSize(125, 125);
renderer.setClearColor(0x000000, 0);

// Animate
function animate() {
	//start the animation
	requestAnimationFrame(animate);

	//animate the cube
	cube.rotation.x += 0.005;
	cube.rotation.y += 0.005;
	cube.rotation.z += 0.005;

	renderer.render(scene, camera);
}

animate();
