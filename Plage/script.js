import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';

function init() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight * 5);

    const container = document.createElement('div');
    container.style.overflowY = 'scroll';
    container.appendChild(renderer.domElement);
    document.body.appendChild(container);

    const shapes = createShapes();
    shapes.forEach(shape => scene.add(shape));

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        shapes.forEach(shape => {
            shape.rotation.x += 0.01;
            shape.rotation.y += 0.01;
        });
        renderer.render(scene, camera);
    }

    function handleResize() {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight * 5;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
        render();
    }

    function render() {
        renderer.render(scene, camera);
    }

    window.addEventListener('resize', handleResize);

    animate();
}

function createShapes() {
    const shapes = [];
    const spacing = 3;
    const startY = -10;

    shapes.push(createWireframe(new THREE.TetrahedronGeometry(), getRandomColor(), 3));
    shapes.push(createWireframe(new THREE.BoxGeometry(), getRandomColor(), 3));
    shapes.push(createWireframe(new THREE.OctahedronGeometry(), getRandomColor(), 3));
    shapes.push(createWireframe(new THREE.DodecahedronGeometry(), getRandomColor(), 3));
    shapes.push(createWireframe(new THREE.IcosahedronGeometry(), getRandomColor(), 3));

    shapes.forEach((shape, index) => {
        shape.position.y = startY + spacing * index;
    });

    return shapes;
}

function createWireframe(geometry, color, linewidth) {
    const material = new THREE.MeshBasicMaterial({ color: color, wireframe: true, linewidth: linewidth });
    return new THREE.Mesh(geometry, material);
}

function getRandomColor() {
    return Math.random() * 0xFFFFFF << 0;
}

init();
