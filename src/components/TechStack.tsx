import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import { skillsCategories, SkillCategory } from "../data";

const aiSkills = [
  { name: "Python", bg: "#0f172a", text: "#38bdf8", border: "#38bdf8" },
  { name: "LangGraph", bg: "#0b1329", text: "#22d3ee", border: "#22d3ee" },
  { name: "Milvus", bg: "#0d1b2a", text: "#60a5fa", border: "#60a5fa" },
  { name: "Redis", bg: "#1f1016", text: "#f87171", border: "#f87171" },
  { name: "FastAPI", bg: "#06221c", text: "#34d399", border: "#34d399" },
  { name: "PyTorch", bg: "#23140c", text: "#fb923c", border: "#fb923c" },
  { name: "TensorFlow", bg: "#231808", text: "#fbbf24", border: "#fbbf24" },
  { name: "Ollama", bg: "#18202f", text: "#f1f5f9", border: "#94a3b8" },
  { name: "Docker", bg: "#0b1d30", text: "#38bdf8", border: "#38bdf8" },
  { name: ".NET 8", bg: "#1c112b", text: "#c084fc", border: "#c084fc" },
  { name: "PaddleOCR", bg: "#0a1e22", text: "#2dd4bf", border: "#2dd4bf" },
  { name: "Scikit-Learn", bg: "#22170d", text: "#f59e0b", border: "#f59e0b" },
  { name: "SQL Server", bg: "#220e12", text: "#f43f5e", border: "#f43f5e" },
  { name: "LangChain", bg: "#0d1a29", text: "#38bdf8", border: "#38bdf8" },
  { name: "OpenCV", bg: "#111827", text: "#4ade80", border: "#4ade80" },
];

function createSkillTexture(skill: { name: string; bg: string; text: string; border: string }) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.Texture();

  ctx.fillStyle = skill.bg;
  ctx.beginPath();
  ctx.arc(256, 256, 250, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = skill.border;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.arc(256, 256, 236, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = skill.text;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 58px system-ui, sans-serif";
  ctx.fillText(skill.name, 256, 256);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = aiSkills.map((_, i) => ({
  scale: [0.95, 1.05, 1, 1.1][i % 4],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.08, delta);
    const pos = api.current.translation();
    // Pull gently towards lower center (Y = -2.8) so header remains uncluttered
    const targetY = -2.8;
    const diffX = pos.x;
    const diffY = pos.y - targetY;
    const diffZ = pos.z;
    const dist = Math.sqrt(diffX * diffX + diffY * diffY + diffZ * diffZ) || 1;

    const impulse = vec
      .set(diffX / dist, diffY / dist, diffZ / dist)
      .multiply(
        new THREE.Vector3(
          -45 * delta * scale,
          -75 * delta * scale,
          -45 * delta * scale
        )
      );

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.8}
      angularDamping={0.2}
      friction={0.25}
      position={[r(16), r(12) - 15, r(14) - 8]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const [viewMode, setViewMode] = useState<"balls" | "matrix">("balls");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const workEl = document.getElementById("work");
      if (workEl) {
        const threshold = workEl.getBoundingClientRect().top;
        setIsActive(scrollY > threshold);
      } else {
        setIsActive(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const materials = useMemo(() => {
    return aiSkills.map((skill) => {
      const texture = createSkillTexture(skill);
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: skill.border,
        emissiveIntensity: 0.12,
        metalness: 0.7,
        roughness: 0.35,
        clearcoat: 0.4,
        clearcoatRoughness: 0.1,
      });
    });
  }, []);

  // Filter 14 categories based on user query
  const filteredCategories = useMemo<SkillCategory[]>(() => {
    if (!searchQuery.trim()) return skillsCategories;
    const q = searchQuery.toLowerCase();
    const result: SkillCategory[] = [];
    for (const cat of skillsCategories) {
      const matchesCat =
        cat.name.toLowerCase().includes(q) ||
        cat.summary.toLowerCase().includes(q);
      const matchingSkills = cat.skills.filter((s: string) =>
        s.toLowerCase().includes(q)
      );
      if (matchesCat) {
        result.push(cat);
      } else if (matchingSkills.length > 0) {
        result.push({ ...cat, skills: matchingSkills });
      }
    }
    return result;
  }, [searchQuery]);

  return (
    <div
      className={`techstack ${viewMode === "matrix" ? "matrix-mode" : ""}`}
      id="techstack"
    >
      {/* Header with Title and Toggle Switch */}
      <div className="techstack-header">
        <h2>
          My <span>Techstack</span>
        </h2>
        <div className="tech-toggle-bar">
          <button
            type="button"
            className={`tech-toggle-btn ${viewMode === "balls" ? "active" : ""}`}
            onClick={() => setViewMode("balls")}
            data-cursor="disable"
          >
            <span>🪐</span> 3D Interactive Balls
          </button>
          <button
            type="button"
            className={`tech-toggle-btn ${viewMode === "matrix" ? "active" : ""}`}
            onClick={() => setViewMode("matrix")}
            data-cursor="disable"
          >
            <span>📋</span> Full Tech Matrix (14 Domains)
          </button>
        </div>
      </div>

      {/* VIEW 1: 3D Physics Balls */}
      {viewMode === "balls" && (
        <Canvas
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
          camera={{ position: [0, 0, 22], fov: 33, near: 1, far: 100 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.3)}
          className="tech-canvas"
        >
          <ambientLight intensity={1.2} />
          <spotLight
            position={[15, 20, 25]}
            penumbra={1}
            angle={0.25}
            color="#e0f2fe"
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[0, -5, -4]} intensity={1.5} color="#38bdf8" />
          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />
            {spheres.map((props, i) => (
              <SphereGeo
                key={i}
                {...props}
                material={materials[i % materials.length]}
                isActive={isActive}
              />
            ))}
          </Physics>
          <Environment
            files="/models/char_enviorment.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 4, 2]}
          />
          <EffectComposer enableNormalPass={false}>
            <N8AO color="#060913" aoRadius={2} intensity={1.2} />
          </EffectComposer>
        </Canvas>
      )}

      {/* VIEW 2: Complete 14-Domain Tech Matrix */}
      {viewMode === "matrix" && (
        <div className="tech-matrix-container">
          <div className="tech-matrix-search-box">
            <input
              type="text"
              placeholder="Search stack (e.g. LangGraph, Milvus, Redis, Docker, PyTorch, C#)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="tech-matrix-search-input"
              data-cursor="disable"
            />
          </div>

          <div className="tech-matrix-grid">
            {filteredCategories.map((cat: any) => (
              <div key={cat.id || cat.number} className="tech-domain-card">
                <div className="tech-domain-header">
                  <span className="tech-domain-number">{cat.number}</span>
                  <span className="tech-domain-count">{cat.skills.length} skills</span>
                </div>
                <h3 className="tech-domain-title">{cat.name}</h3>
                <p className="tech-domain-summary">{cat.summary}</p>
                <div className="tech-skill-pills">
                  {cat.skills.map((skill: string, sIdx: number) => (
                    <span key={sIdx} className="tech-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechStack;
