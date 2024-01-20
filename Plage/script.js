import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';

function init() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const cube = createWireframe(new THREE.BoxGeometry(2, 2, 2), getRandomColor());
    cube.position.y = -2;
    scene.add(cube);

    const ball = createWireframe(new THREE.SphereGeometry(1.5, 32, 32), getRandomColor());
    ball.position.y = 2;
    scene.add(ball);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        ball.rotation.x += 0.01;
        ball.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
    });

    animate();
}

function createWireframe(geometry, color) {
    const material = new THREE.LineBasicMaterial({ color: color });
    return new THREE.LineSegments(new THREE.WireframeGeometry(geometry), material);
}

function getRandomColor() {
    return Math.random() * 0xFFFFFF << 0;
}

init();
