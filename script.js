// step 1 main ၃ ခုကို let ကြေငြာမယ်
let scene, camera, renderer;

// step 2 init function ဆောက်မယ်
function init() {
    // step 3 scene တစ်ခုတည်ဆောက်မယ်
    scene = new THREE.Scene();

    // step 4 camera ထောင်မယ်
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
    camera.position.set(-900, -200, -900);

    // step 5 renderer ပေါင်းစပ်လှုပ်ရှားမယ်
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);

    // step 6 controler တပ်မယ်    
    let controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);
    controls.minDistance = 500;
    controls.maxDistance = 5500;
    // step 7 skybox ပုံတွေသိမ်းဖို့ array ခန်းတစ်ခန်းဆောက်မယ်
    // alt + shift copy patse
    let materialArray = [];

    // step 9 ပုံတွေကို texture နဲ့ load ပြီး array ခန်းထဲ ထည့်ဖို့ ပြင်ဆင်မယ်
    let texture_ft = new THREE.TextureLoader().load('humble_ft.jpg');
    let texture_bk = new THREE.TextureLoader().load('humble_bk.jpg');
    let texture_up = new THREE.TextureLoader().load('humble_up.jpg');
    let texture_dn = new THREE.TextureLoader().load('humble_dn.jpg');
    let texture_rt = new THREE.TextureLoader().load('humble_rt.jpg');
    let texture_lf = new THREE.TextureLoader().load('humble_lf.jpg');

    // step 10 သိမ်းထားတဲ့ ပုံတွေကို material အနေနဲ့ ပြောင်းသိမ်းပြီး array ခန်းထဲ push ထည့်မယ်
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

    // step 11 array ထည်က ပုံတွေကို ထောင့်တွေပေါင်းစပ်မယ်
    for (let i = 0; i < 6; i++)
        materialArray[i].side = THREE.BackSide; // အတွင်းဖက်ကနေ ချဲ့ကြည့်ရင် အတည့်ဖြစ်အောင် 
    // step 12 geometry box တစ်ခုလုပ်မယ် , box ထဲ ကို materialArray ထဲက ပုံတွေကပ်မယ်        
    let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    // step 13 geometry နဲ့ array Mesh ပေါင်းမယ်
    let skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);

    const geometry = new THREE.SphereGeometry(100, 100, 100);
    const wireframe = new THREE.WireframeGeometry(geometry);
    // const material = new THREE.MeshStandardMaterial(wireframe)


    const line = new THREE.LineSegments(wireframe);
    line.material.color = new THREE.Color('gold');
    line.material.depthTest = true;
    line.material.opacity = 0.15;
    line.material.transparent = true;
    scene.add(line);
    const gridHelper = new THREE.GridHelper(100, 100);
    scene.add(gridHelper);
    animate();

}
// render functon လုပ်မယ်။
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();