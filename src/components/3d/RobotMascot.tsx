import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useAnimation } from '../../context/AnimationContext';

export const RobotMascot = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const { animationsPaused } = useAnimation();
  const animationsPausedRef = useRef(animationsPaused);

  useEffect(() => {
    animationsPausedRef.current = animationsPaused;
  }, [animationsPaused]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 500;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Root Group for pointer/scroll manipulation
    const robotRoot = new THREE.Group();
    scene.add(robotRoot);

    // Materials
    // 1. Matte Graphite Armor (mature, non-glossy, dark)
    const graphiteMat = new THREE.MeshStandardMaterial({
      color: 0x181c24,
      roughness: 0.85,
      metalness: 0.25,
      flatShading: false,
    });

    // 2. Brushed Titanium (mechanical joints, neck, trim)
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x5a6577,
      roughness: 0.35,
      metalness: 0.85,
    });

    // 3. Dark Smoked Glass Visor
    const smokedGlassMat = new THREE.MeshStandardMaterial({
      color: 0x080a0e,
      roughness: 0.15,
      metalness: 0.9,
    });

    // 4. Thin Cyan Optical Band (Clean horizontal strip across visor)
    const opticalBandMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
    });

    // Sub-group: Head & Neck
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.55, 0);
    robotRoot.add(headGroup);

    // --- Head Geometry Construction ---
    // Cranium Shell (Upper dome)
    const craniumGeo = new THREE.CylinderGeometry(0.75, 0.82, 0.95, 32);
    const cranium = new THREE.Mesh(craniumGeo, graphiteMat);
    cranium.position.set(0, 0.45, -0.05);
    headGroup.add(cranium);

    // Top Head Crown Plate
    const crownGeo = new THREE.SphereGeometry(0.78, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45);
    const crown = new THREE.Mesh(crownGeo, graphiteMat);
    crown.position.set(0, 0.8, -0.05);
    headGroup.add(crown);

    // Smoked Glass Visor (Curved horizontal band)
    const visorGeo = new THREE.CylinderGeometry(0.83, 0.81, 0.38, 32, 1, false, Math.PI * 0.72, Math.PI * 0.56);
    const visor = new THREE.Mesh(visorGeo, smokedGlassMat);
    visor.position.set(0, 0.45, 0.02);
    headGroup.add(visor);

    // Single Thin Cyan Optical Band across Visor
    const opticalGeo = new THREE.CylinderGeometry(0.835, 0.835, 0.035, 32, 1, false, Math.PI * 0.77, Math.PI * 0.46);
    const opticalBand = new THREE.Mesh(opticalGeo, opticalBandMat);
    opticalBand.position.set(0, 0.45, 0.022);
    headGroup.add(opticalBand);

    // Chiseled Lower Faceguard / Jaw Plate
    const jawGeo = new THREE.BoxGeometry(0.9, 0.42, 0.85);
    const jaw = new THREE.Mesh(jawGeo, graphiteMat);
    jaw.position.set(0, 0.12, 0.08);
    jaw.scale.set(0.9, 1, 0.9);
    headGroup.add(jaw);

    // Chin Tip Bevel
    const chinGeo = new THREE.BoxGeometry(0.48, 0.22, 0.4);
    const chin = new THREE.Mesh(chinGeo, titaniumMat);
    chin.position.set(0, -0.06, 0.38);
    headGroup.add(chin);

    // Temple / Ear Audio Sensor Modules (Brushed Titanium Cylinders)
    const earGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.15, 24);
    earGeo.rotateZ(Math.PI / 2);

    const leftEar = new THREE.Mesh(earGeo, titaniumMat);
    leftEar.position.set(-0.84, 0.45, -0.05);
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, titaniumMat);
    rightEar.position.set(0.84, 0.45, -0.05);
    headGroup.add(rightEar);

    // Thin Cyan LED dot on temple modules
    const earLedGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.02, 16);
    earLedGeo.rotateZ(Math.PI / 2);

    const leftLed = new THREE.Mesh(earLedGeo, opticalBandMat);
    leftLed.position.set(-0.92, 0.45, -0.05);
    headGroup.add(leftLed);

    const rightLed = new THREE.Mesh(earLedGeo, opticalBandMat);
    rightLed.position.set(0.92, 0.45, -0.05);
    headGroup.add(rightLed);

    // Neck Mechanics (Hydraulic Cylinders & Spine)
    const neckColumnGeo = new THREE.CylinderGeometry(0.35, 0.42, 0.55, 24);
    const neckColumn = new THREE.Mesh(neckColumnGeo, titaniumMat);
    neckColumn.position.set(0, -0.32, -0.05);
    headGroup.add(neckColumn);

    // Sub-group: Upper Torso / Shoulders
    const torsoGroup = new THREE.Group();
    torsoGroup.position.set(0, -0.5, 0);
    robotRoot.add(torsoGroup);

    // Collar Armor Chassis
    const collarGeo = new THREE.BoxGeometry(2.1, 0.5, 1.1);
    const collar = new THREE.Mesh(collarGeo, graphiteMat);
    collar.position.set(0, 0.15, -0.1);
    torsoGroup.add(collar);

    // Upper Chest Plate (Matte Graphite with central titanium intake)
    const chestPlateGeo = new THREE.BoxGeometry(1.6, 0.8, 0.65);
    const chestPlate = new THREE.Mesh(chestPlateGeo, graphiteMat);
    chestPlate.position.set(0, -0.35, 0.1);
    torsoGroup.add(chestPlate);

    // Central Titanium Chest Core Inset
    const chestCoreGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.05, 24);
    chestCoreGeo.rotateX(Math.PI / 2);
    const chestCore = new THREE.Mesh(chestCoreGeo, titaniumMat);
    chestCore.position.set(0, -0.22, 0.44);
    torsoGroup.add(chestCore);

    // Subtle Cyan Indicator on Chest Core
    const chestLightGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.06, 16);
    chestLightGeo.rotateX(Math.PI / 2);
    const chestLight = new THREE.Mesh(chestLightGeo, opticalBandMat);
    chestLight.position.set(0, -0.22, 0.45);
    torsoGroup.add(chestLight);

    // Shoulder Caps (Matte Graphite)
    const shoulderGeo = new THREE.SphereGeometry(0.48, 24, 16);
    const leftShoulder = new THREE.Mesh(shoulderGeo, graphiteMat);
    leftShoulder.position.set(-1.18, 0.1, -0.1);
    leftShoulder.scale.set(1.1, 0.85, 1);
    torsoGroup.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(shoulderGeo, graphiteMat);
    rightShoulder.position.set(1.18, 0.1, -0.1);
    rightShoulder.scale.set(1.1, 0.85, 1);
    torsoGroup.add(rightShoulder);

    // --- Cinematic Lighting ---
    // Ambient Light (subtle neutral fill)
    const ambLight = new THREE.AmbientLight(0x0e131b, 1.8);
    scene.add(ambLight);

    // Key Light (Off-white studio spotlight from top-right front)
    const keyLight = new THREE.DirectionalLight(0xf1f5f9, 2.2);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    // Subtle Titanium Rim Light (Crisp cool rim light from top-rear)
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.8);
    rimLight.position.set(-3.5, 3.5, -3);
    scene.add(rimLight);

    // Soft Optical Glow (Ice-blue light radiating from the visor)
    const opticalGlow = new THREE.PointLight(0x38bdf8, 0.8, 3);
    opticalGlow.position.set(0, 1.0, 0.7);
    scene.add(opticalGlow);

    // Lower Fill Light (Dark slate fill from below)
    const fillLight = new THREE.DirectionalLight(0x1e293b, 1.2);
    fillLight.position.set(0, -3, 2);
    scene.add(fillLight);

    // --- Interactive Pointer & Scroll Physics ---
    let targetHeadYaw = 0;
    let targetHeadPitch = 0;
    let currentHeadYaw = 0;
    let currentHeadPitch = 0;

    let targetTorsoYaw = 0;
    let currentTorsoYaw = 0;

    let scrollYOffset = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      // Normalized coordinates (-1 to 1)
      const nx = (clientX / rect.width) * 2 - 1;
      const ny = -(clientY / rect.height) * 2 + 1;

      // Restrained head turn: max ~0.35 rad (20 degrees)
      targetHeadYaw = nx * 0.38;
      targetHeadPitch = -ny * 0.22;
      targetTorsoYaw = nx * 0.12;
    };

    const handleScroll = () => {
      scrollYOffset = window.scrollY * 0.0003;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Render loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      // Check if paused
      if (animationsPausedRef.current) {
        renderer.render(scene, camera);
        return;
      }

      const elapsed = clock.getElapsedTime();

      // Subtle breathing / micro-pitch motion
      const breathing = Math.sin(elapsed * 1.5) * 0.015;
      robotRoot.position.y = breathing;

      // Smooth pointer interpolation (lerp)
      currentHeadYaw += (targetHeadYaw - currentHeadYaw) * 0.06;
      currentHeadPitch += (targetHeadPitch - currentHeadPitch) * 0.06;
      currentTorsoYaw += (targetTorsoYaw - currentTorsoYaw) * 0.04;

      // Apply subtle scroll reaction
      headGroup.rotation.y = currentHeadYaw + scrollYOffset * 0.4;
      headGroup.rotation.x = currentHeadPitch;
      torsoGroup.rotation.y = currentTorsoYaw + scrollYOffset * 0.2;

      // Very subtle optical pulse
      const pulse = 0.8 + Math.sin(elapsed * 2.0) * 0.15;
      opticalGlow.intensity = pulse;

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      // Dispose geometries & materials
      craniumGeo.dispose();
      crownGeo.dispose();
      visorGeo.dispose();
      opticalGeo.dispose();
      jawGeo.dispose();
      chinGeo.dispose();
      earGeo.dispose();
      neckColumnGeo.dispose();
      collarGeo.dispose();
      chestPlateGeo.dispose();
      chestCoreGeo.dispose();
      shoulderGeo.dispose();
      graphiteMat.dispose();
      titaniumMat.dispose();
      smokedGlassMat.dispose();
      opticalBandMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
      {hasWebGL ? (
        <div
          ref={mountRef}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          aria-label="Interactive 3D AI Robot Mascot with matte graphite armor, brushed titanium components, and single cyan optical band"
          role="img"
        />
      ) : (
        /* Reduced motion / Non-WebGL Fallback Portrait */
        <div
          className="w-72 h-96 rounded-2xl bg-gradient-to-b from-[#141822] via-[#0f1219] to-[#0b0d11] border border-[#232a36] flex flex-col items-center justify-center p-6 shadow-2xl relative overflow-hidden"
          role="img"
          aria-label="Stylized AI Robot Mascot portrait"
        >
          {/* Subtle rim glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>

          {/* Fallback Robot Head Silhouette */}
          <div className="w-36 h-44 rounded-t-3xl rounded-b-xl bg-[#1c2028] border border-[#2d3440] relative flex flex-col items-center justify-center shadow-xl">
            {/* Smoked Visor */}
            <div className="w-full h-12 bg-[#090b10] border-y border-[#2d3440] relative flex items-center justify-center">
              {/* Cyan Optical Band */}
              <div className="w-24 h-1.5 bg-[#38bdf8] rounded-full shadow-[0_0_12px_#38bdf8]"></div>
            </div>
            {/* Chin Accent */}
            <div className="w-12 h-4 bg-[#4b5563] mt-5 rounded-sm"></div>
          </div>
          {/* Collar / Shoulders */}
          <div className="w-56 h-14 bg-[#141821] border-t border-[#232a36] rounded-t-xl mt-2 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[#3e4756] border border-[#38bdf8]/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
            </div>
          </div>
          <span className="text-[11px] font-mono text-slate-500 mt-4 tracking-wider uppercase">
            MrJupyter AI Android
          </span>
        </div>
      )}
    </div>
  );
};
