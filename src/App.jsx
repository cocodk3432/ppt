import { useState, useEffect } from 'react'
import './index.css'
import page1Bg from './assets/page1/image.png'
import mainMenuImg from './assets/mainmenu/image.png'
import mainMenuImg2 from './assets/mainmenu/image copy.png'
import aimVideo from './assets/playerchar/aim.mp4'
import aimImg from './assets/playerchar/image.png'
import dodgeVideo from './assets/dorge/2026-03-27 21-33-02.mp4'
import dodgeImg from './assets/dorge/image.png'
import hitTakeVideo from './assets/hittake/2026-03-27 21-48-11.mp4'
import hitTakeImg from './assets/hittake/image.png'
import outfitVideo from './assets/outfit/2026-03-27 22-01-32.mp4'
import outfitImg from './assets/outfit/image.png'
import hudImg from './assets/hud/image.png'
import hudImg2 from './assets/hud/image copy.png'
import levelImg from './assets/level/image.png'
import saveImg from './assets/saves/image.png'
import saveImg2 from './assets/saves/image copy.png'
import interImg1 from './assets/inter/image.png'
import interImg2 from './assets/inter/image copy.png'
import interImg3 from './assets/inter/image copy 2.png'
import soundImg1 from './assets/music/image.png'
import soundImg2 from './assets/music/image copy.png'
import enemyImg1 from './assets/enemy/image.png'
import enemyImg2 from './assets/enemy/image copy.png'

export default function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 44

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [totalPages])

  return (
    <div className="landing">
      <div className="slider" style={{ transform: `translateX(-${currentPage * 100}vw)` }}>

        {/* ── Slide 1 (Hero) ── */}
        <section className="hero slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">Behold The Gloom</h1>
            <p className="hero-sub" style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '2px', color: 'rgba(255,255,255,0.8)' }}>
              A 3D Game Exploring the Circle of Hell
            </p>
          </div>
        </section>

        {/* ── Slide 2 (Project Info) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="content-box fade-up" style={{ maxWidth: 1000 }}>
            <h2 className="content-title">Project Information</h2>
            <div className="content-divider" />

            <div className="table-container">
              <table className="info-table">
                <thead>
                  <tr>
                    <th>Name of the Student</th>
                    <th>Seat Number</th>
                    <th>ABC</th>
                    <th>PRN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DHIRAJ KUTTIKAR</td>
                    <td>2305011</td>
                    <td>748527654090</td>
                    <td>202301395</td>
                  </tr>
                  <tr>
                    <td>MOHAMMED RAZA TATUR</td>
                    <td>2305023</td>
                    <td>850446013506</td>
                    <td>202301352</td>
                  </tr>
                  <tr>
                    <td>SNEYDEN DIAS</td>
                    <td>2305036</td>
                    <td>658993072139</td>
                    <td>202301361</td>
                  </tr>
                  <tr>
                    <td>THOUHEEDU ZAMAAN</td>
                    <td>2305038</td>
                    <td>665274084053</td>
                    <td>20231343</td>
                  </tr>
                  <tr>
                    <td>VALENTIO ROSARIO</td>
                    <td>2305039</td>
                    <td>788991350931</td>
                    <td>20231363</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-footer">
              <div className="detail-item" style={{ marginBottom: 0, textAlign: 'left' }}>
                <h3>Supervisor</h3>
                <p style={{ fontSize: '20px' }}>Ms. Nitisha Govekar, Asst. Prof.</p>
              </div>
              <div className="detail-item" style={{ marginBottom: 0, textAlign: 'right' }}>
                <h3>Course</h3>
                <p style={{ fontSize: '20px' }}>CSA 307 - Project</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Slide 3 (Project Overview) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="content-box fade-up">
            <h2 className="content-title">Project Overview</h2>
            <div className="content-divider" />
            <p className="overview-text">
              Behold the Gloom is a third-person horror-action vertical slice built in Unreal Engine 5. You play as Z, exploring eerie locations from an apartment to a library while uncovering a dark, supernatural story. Guided by entities like the Aura and Helping Hand, you face enemies like VineGhouls, solve progression challenges, and ultimately confront the sound-hunting boss, the Librarian. The stylized cel-shaded visuals and surreal elements, including a “Fake World,” create a unique psychological horror experience.
            </p>
          </div>
        </section>

        {/* ── Slide 4 (System Requirements) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="content-box fade-up" style={{ maxWidth: 940 }}>
            <h2 className="content-title">System Requirements</h2>
            <div className="content-divider" />
            <div className="req-grid">
              <div className="req-card">
                <h3>Software Stack</h3>
                <ul>
                  <li>Unreal Engine 5.2+</li>
                  <li>Blender 3.6 LTS</li>
                  <li>GIMP 3.0</li>
                  <li>Audacity 3.4.2</li>
                  <li>GitHub for VCS</li>
                </ul>
              </div>
              <div className="req-card">
                <h3>Hardware Specs</h3>
                <ul>
                  <li>Intel i5 / AMD Ryzen 5+</li>
                  <li>8 GB RAM minimum</li>
                  <li>NVIDIA GTX 1650 / AMD RX 570+</li>
                  <li>10 GB SSD storage</li>
                  <li>1366x768 display</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Slide 5 (Functional Requirements Title) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="content-box fade-up" style={{ background: 'transparent', border: 'none', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
            <h1 className="hero-title" style={{ textAlign: 'center', fontSize: 'clamp(50px, 8vw, 100px)', textTransform: 'uppercase', letterSpacing: '4px' }}>
              Functional<br />Requirements
            </h1>
          </div>
        </section>

        {/* ── Slide 6 (Player Movement & Exploration) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Functional Requirements</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Player Movement & Exploration</h2>
            <div className="content-divider" style={{ marginBottom: 30 }} />
            <div className="func-container">
              <div className="func-card"><h4>Locomotion</h4><p> movement, 360° input on WASD/Left Stick. 20 cm/s dead zone.</p></div>
              <div className="func-card"><h4>Rotation & Camera</h4><p>Auto-rotates to movement. 400cm dynamic spring arm facing the right direction.</p></div>
              <div className="func-card"><h4>Jump Mechanics</h4><p>Responsive single jump featuring a vertical lift speed of 1200 cm/s.</p></div>
              <div className="func-card"><h4>Dodge Roll</h4><p>Directional evasive rolling. Temporarily disables block-strafe during animation.</p></div>
              <div className="func-card"><h4>Combat Movement</h4><p>Limits speed to 300 cm/s while focused on a locked target.</p></div>
              <div className="func-card"><h4>Lock-on System</h4><p>950cm sphere trace target cycles with smooth camera following at speed 30.</p></div>
              <div className="func-card"><h4>Dynamic Cameras</h4><p>Volume triggers shift dynamic cameras to static cinematic angles.</p></div>
              <div className="func-card"><h4>Knockback</h4><p>-100 backward and 100 upward impulse applied overriding player velocity on hit.</p></div>
            </div>
          </div>
        </section>

        {/* ── Slide 6 (Interaction & Dialog) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Functional Requirements</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Interaction & Dialog</h2>
            <div className="content-divider" style={{ marginBottom: 30 }} />
            <div className="func-container">
              <div className="func-card"><h4>Detection</h4><p>Sphere overlaps verify valid Interaction Interface targets nearby.</p></div>
              <div className="func-card"><h4>UI Feedback</h4><p>Displays an active widget on interactables while overlapping.</p></div>
              <div className="func-card"><h4>Logic Gates</h4><p>Disables interaction if lock-on state is active preventing unwanted actions.</p></div>
              <div className="func-card"><h4>Interactable Types</h4><p>Over 12 variants including doors, lights, dressers, NPCs, and locks.</p></div>
              <div className="func-card"><h4>Validation</h4><p>Checks player Keys Array against locked doors &Outfit Indices for transitions.</p></div>
              <div className="func-card"><h4>Dialog System</h4><p>Manages conversation paths natively via the Behavior Trees.</p></div>
              <div className="func-card"><h4>Audio & Navigation</h4><p>Triggers unique sounds mapped to dialog D-pad & mouse selection UI.</p></div>
              <div className="func-card"><h4>Post-Pickup Dialog</h4><p>Runs scripted BT sequences when objects are gathered into inventory.</p></div>
            </div>
          </div>
        </section>

        {/* ── Slide 7 (Combat System) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Functional Requirements</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Combat System</h2>
            <div className="content-divider" style={{ marginBottom: 30 }} />
            <div className="func-container">
              <div className="func-card"><h4>Melee Combos</h4><p>4 unarmed strikes or 2 armed strikes detected via hand socket sphere traces.</p></div>
              <div className="func-card"><h4>Damage Mechanism</h4><p>Applies a 5-unit or weapon-specific damage constraint enabling one-hit/swing.</p></div>
              <div className="func-card"><h4>Visuals & Sound</h4><p>Spawns impact particles and distinct hit effects (fist/axe) on collision.</p></div>
              <div className="func-card"><h4>Defensive Techniques</h4><p>Taking defensive guard prevents direct enemy damage while retaining knockback.</p></div>
              <div className="func-card"><h4>Ranged & AoE</h4><p>Calculates ground slam and ranged crosshair attack area of effect capabilities.</p></div>
              <div className="func-card"><h4>Object Throwing</h4><p>Throws prop at 5500 cm/s spawning artificial noise detectable at 4500 cm.</p></div>
              <div className="func-card"><h4>Damage Reactions</h4><p>Transitions instantly to 3 randomized hurt montages scaled at 2x speed.</p></div>
              <div className="func-card"><h4>Death State</h4><p>LIFE ≤ 0 converts player meshes strictly to ragdoll, popping the 'Restart' menu.</p></div>
            </div>
          </div>
        </section>

        {/* ── Slide 8 (Inventory & Items) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Functional Requirements</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Inventory & Items</h2>
            <div className="content-divider" style={{ marginBottom: 30 }} />
            <div className="func-container">
              <div className="func-card"><h4>Classification</h4><p>5-entry Enum defines core asset values (Keys, Files, Weapons, Generic, Bats).</p></div>
              <div className="func-card"><h4>Pickup Mechanics</h4><p>Object instances spawn automatically within the 'Object Socket', discarding mass collision.</p></div>
              <div className="func-card"><h4>Key Management</h4><p>Collected door variables propagate to the Game Instance saving arrays natively.</p></div>
              <div className="func-card"><h4>Dud Keys</h4><p>Includes placeholder 'Dud' inventory configurations failing all primary validations.</p></div>
              <div className="func-card"><h4>Weapon Equipping</h4><p>Auto-overrides base stats applying weapon models, SFX data, and lethal trace radius.</p></div>
            </div>
          </div>
        </section>

        {/* ── Slide 9 (Outfit System) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Functional Requirements</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Outfit System</h2>
            <div className="content-divider" style={{ marginBottom: 30 }} />
            <div className="func-container">
              <div className="func-card"><h4>Modular Meshes</h4><p>Swaps across 4 modes (Casual, Work, ) mapping smoothly across 7 skeletal slots.</p></div>
              <div className="func-card"><h4>simple dress</h4><p>Unlocks full dress configuration and dynamic invisible ranged weaponry after boss kills.</p></div>
              <div className="func-card"><h4>Dresser UI</h4><p>Incorporate 3D character preview via Scene Capture components & rendered UI.</p></div>
              <div className="func-card"><h4>Persistence</h4><p>Propagates Index changes cleanly throughout the application Game Instance object state.</p></div>
            </div>
          </div>
        </section>

        {/* ── Slide 10 (Puzzle System) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Functional Requirements</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Puzzle System</h2>
            <div className="content-divider" style={{ marginBottom: 30 }} />
            <div className="func-container">
              <div className="func-card"><h4>Combination Locks</h4><p>3 rotating 45° cubes leveraging smooth cycle timelines via standard Left/Right inputs.</p></div>
              <div className="func-card"><h4>Puzzle Validation</h4><p>Calculates exact relative orientation thresholds resolving within a 0.1° margin of error.</p></div>
              <div className="func-card"><h4>Inspection Mode</h4><p>Snaps perspective to distinct puzzle cameras offering free mouse/stick translation tools.</p></div>
              <div className="func-card"><h4>Outcome</h4><p>Matches perfectly resolve locked logic flags, tearing down lock actors securely.</p></div>
            </div>
          </div>
        </section>

        {/* ── Slide 11 (Enemy Behavior) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Functional Requirements</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Enemy Behavior</h2>
            <div className="content-divider" style={{ marginBottom: 30 }} />
            <div className="func-container">
              <div className="func-card"><h4>Base Entity & Interface</h4><p>Uses standardized skeletons, variables, locking flags & 'LIFE' metrics equal entirely to 100.</p></div>
              <div className="func-card"><h4>Hearing-Chase</h4><p>Acoustic delays impose a realistic 5-second interval between sound perception and targeting.</p></div>
              <div className="func-card"><h4>Range Management</h4><p>Loops target interval scans every 0.1s spanning defaults of 200cm unless bypassed.</p></div>
              <div className="func-card"><h4>Combat Execution</h4><p>Rotational tracing managed dynamically by bespoke subclass event attack vectors.</p></div>
              <div className="func-card"><h4>Hit Detection</h4><p>Uses unified mesh socket spheres testing variables against the designated player channel setup.</p></div>
              <div className="func-card"><h4>Stagger Logic</h4><p>Halt constraints override running velocity mapping backward momentum based on impact vectors (-10).</p></div>
              <div className="func-card"><h4>Vitality & UI</h4><p>Disables logic automatically while terminating lock-on instances exclusively below 0 vitality.</p></div>
            </div>
          </div>
        </section>

        {/* ── Slide 12 (Main Systems) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Functional Requirements</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Save/Load, Transitions, Visuals, Audio, Menus</h2>
            <div className="content-divider" style={{ marginBottom: 30 }} />
            <div className="func-container">
              <div className="func-card"><h4>Data Serialization</h4><p>Translates array-heavy positional player states sequentially towards discrete object cache forms.</p></div>
              <div className="func-card"><h4>Save Pipeline</h4><p>Fires explicitly strictly upon verified coffee machine interactions pushing instances correctly.</p></div>
              <div className="func-card"><h4>Load Pipeline</h4><p>Reads array values translating physical positioning natively throughout initialized load blocks.</p></div>
              <div className="func-card"><h4>Save UI & Transitions</h4><p>Invokes UI widgets and asynchronous music loading fades prior exactly toward level changes.</p></div>
              <div className="func-card"><h4>Level Doors & Logic</h4><p>Animates 95-degree swing vectors validating keys/outfits thoroughly ahead of specific sequence triggers.</p></div>
              <div className="func-card"><h4>Persistence</h4><p>The single Game Instance structure sustains absolute metadata bridging any complex map travels globally.</p></div>
            </div>
          </div>
        </section>

        {/* ── Slide 13 (Project Schedule & Milestone Tracking) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})`, color: '#111' }}>
          <div className="content-overlay" style={{ background: 'rgba(0,0,0,0.2)' }} />
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1400, padding: '40px 50px', background: '#fff', color: '#111' }}>
            <h2 className="content-title" style={{ fontSize: 32, color: '#111', textTransform: 'none', margin: '0 0 5px 0' }}>Behold The Gloom</h2>
            <h3 style={{ fontSize: 18, color: '#555', margin: '0 0 30px 0', fontWeight: 'normal' }}>Project Schedule & Milestone Tracking</h3>

            <div style={{ display: 'flex', flexDirection: 'column', fontSize: 14, borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>

              {/* Header Row */}
              <div style={{ display: 'flex', borderBottom: '1px solid #eaeaea', padding: '15px 0', color: '#333', fontWeight: 600 }}>
                <div style={{ width: '28%', paddingLeft: '10px' }}>TASK NAME</div>
                <div style={{ width: '72%', display: 'flex' }}>
                  <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid transparent' }}>Jul</div>
                  <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #eaeaea' }}>Aug</div>
                  <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #eaeaea' }}>Sep</div>
                  <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #eaeaea' }}>Oct</div>
                  <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #eaeaea' }}>Nov</div>
                  <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #eaeaea' }}>Dec</div>
                  <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #eaeaea' }}>Jan</div>
                  <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #eaeaea' }}>Feb</div>
                </div>
              </div>

              {/* Row 1 */}
              <div style={{ display: 'flex', borderBottom: '1px solid #fafafa', padding: '18px 0', alignItems: 'center' }}>
                <div style={{ width: '28%', paddingLeft: '10px', fontWeight: 600, color: '#333' }}>1. Research</div>
                <div style={{ width: '72%', position: 'relative', height: '32px', display: 'flex' }}>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', zIndex: 0 }}><div style={{ flex: 1, borderLeft: '1px solid transparent' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div></div>
                  <div style={{ position: 'absolute', left: '0%', width: '25%', height: '100%', background: '#69b4fa', borderRadius: '16px', zIndex: 1, display: 'flex', alignItems: 'center', paddingLeft: '15px', color: '#111', fontSize: '13px', fontWeight: 600 }}>Research</div>
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'flex', borderBottom: '1px solid #fafafa', padding: '18px 0', alignItems: 'center' }}>
                <div style={{ width: '28%', paddingLeft: '10px', fontWeight: 600, color: '#333' }}>2. Design & Documentation</div>
                <div style={{ width: '72%', position: 'relative', height: '32px', display: 'flex' }}>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', zIndex: 0 }}><div style={{ flex: 1, borderLeft: '1px solid transparent' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div></div>
                  <div style={{ position: 'absolute', left: '0%', width: '100%', height: '100%', background: '#a18cf5', borderRadius: '16px', zIndex: 1, display: 'flex', alignItems: 'center', paddingLeft: '15px', color: '#fff', fontSize: '13px', fontWeight: 600 }}>Docs & Design</div>
                </div>
              </div>

              {/* Row 3 */}
              <div style={{ display: 'flex', borderBottom: '1px solid #fafafa', padding: '18px 0', alignItems: 'center' }}>
                <div style={{ width: '28%', paddingLeft: '10px', fontWeight: 600, color: '#333' }}>3. Player System Implementation</div>
                <div style={{ width: '72%', position: 'relative', height: '32px', display: 'flex' }}>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', zIndex: 0 }}><div style={{ flex: 1, borderLeft: '1px solid transparent' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div></div>
                  <div style={{ position: 'absolute', left: '25%', width: '50%', height: '100%', background: '#49e0a8', borderRadius: '16px', zIndex: 1, display: 'flex', alignItems: 'center', paddingLeft: '15px', color: '#111', fontSize: '13px', fontWeight: 600 }}>Player Systems</div>
                </div>
              </div>

              {/* Row 4 */}
              <div style={{ display: 'flex', borderBottom: '1px solid #fafafa', padding: '18px 0', alignItems: 'center' }}>
                <div style={{ width: '28%', paddingLeft: '10px', fontWeight: 600, color: '#333' }}>4. System Module Development</div>
                <div style={{ width: '72%', position: 'relative', height: '32px', display: 'flex' }}>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', zIndex: 0 }}><div style={{ flex: 1, borderLeft: '1px solid transparent' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div></div>
                  <div style={{ position: 'absolute', left: '37.5%', width: '50%', height: '100%', background: '#0bb18c', borderRadius: '16px', zIndex: 1, display: 'flex', alignItems: 'center', paddingLeft: '15px', color: '#fff', fontSize: '13px', fontWeight: 600 }}>System Modules</div>
                </div>
              </div>

              {/* Row 5 */}
              <div style={{ display: 'flex', borderBottom: '1px solid #fafafa', padding: '18px 0', alignItems: 'center' }}>
                <div style={{ width: '28%', paddingLeft: '10px', fontWeight: 600, color: '#333' }}>5. Sound Design & Implementation</div>
                <div style={{ width: '72%', position: 'relative', height: '32px', display: 'flex' }}>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', zIndex: 0 }}><div style={{ flex: 1, borderLeft: '1px solid transparent' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div></div>
                  <div style={{ position: 'absolute', left: '50%', width: '37.5%', height: '100%', background: '#fbc96c', borderRadius: '16px', zIndex: 1, display: 'flex', alignItems: 'center', paddingLeft: '15px', color: '#111', fontSize: '13px', fontWeight: 600 }}>Sound Design</div>
                </div>
              </div>

              {/* Row 6 */}
              <div style={{ display: 'flex', borderBottom: '1px solid #fafafa', padding: '18px 0', alignItems: 'center' }}>
                <div style={{ width: '28%', paddingLeft: '10px', fontWeight: 600, color: '#333' }}>6. Verification & System Testing</div>
                <div style={{ width: '72%', position: 'relative', height: '32px', display: 'flex' }}>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', zIndex: 0 }}><div style={{ flex: 1, borderLeft: '1px solid transparent' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div></div>
                  <div style={{ position: 'absolute', left: '75%', width: '15%', height: '100%', background: '#de6850', borderRadius: '16px', zIndex: 1, display: 'flex', alignItems: 'center', paddingLeft: '15px', color: '#fff', fontSize: '13px', fontWeight: 600 }}>Testing</div>
                </div>
              </div>

              {/* Row 7 */}
              <div style={{ display: 'flex', padding: '18px 0', alignItems: 'center' }}>
                <div style={{ width: '28%', paddingLeft: '10px', fontWeight: 600, color: '#333' }}>7. Final Build & Pre-Launch</div>
                <div style={{ width: '72%', position: 'relative', height: '32px', display: 'flex' }}>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', zIndex: 0 }}><div style={{ flex: 1, borderLeft: '1px solid transparent' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div><div style={{ flex: 1, borderLeft: '1px solid #eaeaea' }}></div></div>
                  <div style={{ position: 'absolute', left: '87.5%', width: '12.5%', height: '100%', background: '#d42a2e', borderRadius: '16px', zIndex: 1, display: 'flex', alignItems: 'center', paddingLeft: '10px', color: '#fff', fontSize: '13px', fontWeight: 600 }}>Launch</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Slide 15 (Modules Title) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="content-box fade-up" style={{ background: 'transparent', border: 'none', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
            <h1 className="hero-title" style={{ textAlign: 'center', fontSize: 'clamp(60px, 10vw, 120px)', textTransform: 'uppercase', letterSpacing: '4px' }}>
              Modules
            </h1>
          </div>
        </section>

        {/* ── Slide 16 (Player Modules) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">System Architecture</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Player Modules</h2>
            <div className="content-divider" style={{ marginBottom: 30 }} />
            <div className="func-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 12 }}>
              <div className="func-card">
                <h4>1.1 Character Controller</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>BP_GenericEntity → BP_ThirdPersonCharacter</div>
                <p>Manages player navigation, health (LIFE), movement states, and animation playback for free exploration.</p>
              </div>
              <div className="func-card">
                <h4>1.2 Input System</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>Input Actions</div>
                <p>Maps physical controller/keyboard inputs to gameplay actions including combat, puzzles, and debug keys.</p>
              </div>
              <div className="func-card">
                <h4>1.3 Camera System</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>FollowCamera, StrafeCamera, BP_FixedCamera</div>
                <p>Drives three view modes: third-person exploration, over-shoulder combat, and fixed level cameras.</p>
              </div>
              <div className="func-card">
                <h4>1.4 Combat System</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>Attack / Dodge / Protect / LockOn / Slam</div>
                <p>Handles melee combos, ranged aiming, target lock-on cycling, dodge rolls, and throwable object physics.</p>
              </div>
              <div className="func-card">
                <h4>1.5 Inventory & Pickup</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>BP_Generic_PickUp, EN_ObjectType</div>
                <p>Logic for object acquisition, key collection for gated progression, and tracking currently equipped weapons.</p>
              </div>
              <div className="func-card">
                <h4>1.6 Outfit System</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>7 SkeletalMeshComponents, BP_Dresser</div>
                <p>Facilitates swapping between multiple outfits with unique appearances and specific special abilities.</p>
              </div>
              <div className="func-card">
                <h4>1.7 Player HUD</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>WG_LifeBar, WG_Aim, WG_Bullets, WG_LockOn</div>
                <p>Real-time UI feedback for health, crosshairs, ammo counts, lock-on indicators, and world prompts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Slide 15 (System Modules) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">System Architecture</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>System Modules</h2>
            <div className="content-divider" style={{ marginBottom: 30 }} />
            <div className="func-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              <div className="func-card">
                <h4>2.1 Game Framework</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>BP_GameInstance, BP_ThirdPersonGameMode</div>
                <p>Maintains global variables across level transitions and the gameplay lifecycle.</p>
              </div>
              <div className="func-card">
                <h4>2.2 Enemy </h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>3 Controllers, 3 BTs, 3 Enemy Types</div>
                <p>Governs enemy behavior including patrol, detection (sight/hearing), chase, and attack.</p>
              </div>
              <div className="func-card">
                <h4>2.3 Dialog System</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>DialogComponent, WG_Dialog, 30+ Trees</div>
                <p>Branching NPC conversation system using BTs with support for player reply selection.</p>
              </div>
              <div className="func-card">
                <h4>2.4 Puzzle System</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>BP_CombinationLock, BP_Inspectable</div>
                <p>Environmental progression-gating including code locks, inspectables, and outfit checks.</p>
              </div>
              <div className="func-card">
                <h4>2.5 Save/Load</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>BP_Savegame, BP_SaveCoffeeMachine</div>
                <p>Serializes and restores progress, position, and inventory via save points.</p>
              </div>
              <div className="func-card">
                <h4>2.6 Environment</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>BP_SwitchLevelDoor, 10 Maps</div>
                <p>Manages interactive world objects and linear map progression up to FakeWorld.</p>
              </div>
              <div className="func-card">
                <h4>2.7 Audio System</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>BP_GameInstance Audio, 7+ SoundCues</div>
                <p>Controls per-level music with fade transitions and spatial combat SFX.</p>
              </div>
              <div className="func-card">
                <h4>2.8 Visuals</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>Cell Shading, Outline, Glitch PP, 28 LUTs</div>
                <p>Stylized horror art direction via custom post-processing and Niagara VFX.</p>
              </div>
              <div className="func-card">
                <h4>2.9 Menu & UI</h4>
                <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>WG_MainMenu, WG_PAUSE, WG_Fade</div>
                <p>All non-HUD interfaces: title screen, menus, screen transitions, and puzzle UI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Slide 18 (Game Design Overview) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="content-box fade-up" style={{ background: 'transparent', border: 'none', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
            <h1 className="hero-title" style={{ textAlign: 'center', fontSize: 'clamp(50px, 8vw, 100px)', textTransform: 'uppercase', letterSpacing: '4px' }}>
              Game Design<br />Overview
            </h1>
          </div>
        </section>

        {/* ── Slide 19 (Game Summary Flow) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Game Flow</div>
          <div className="content-box fade-up" style={{ maxWidth: 1200, padding: '30px 40px', background: 'rgba(20,20,20,0.85)' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Game Summary Flow</h2>
            <div className="content-divider" style={{ marginBottom: 20 }} />

            {/* Diagram Container */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'monospace', fontSize: '13px', paddingTop: '10px' }}>

              {/* Top Row: Main Menu & Game Levels */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', alignItems: 'flex-start' }}>

                {/* Entities (Left) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ border: '2px solid #b36600', padding: '15px', background: '#4d2c00', textAlign: 'center', width: '220px', borderRadius: '8px' }}>
                    <h3 style={{ margin: '0 0 15px 0', color: '#ff9900', fontSize: '16px' }}>Entities</h3>
                    <div style={{ background: '#331c00', padding: '8px', marginBottom: '8px', border: '1px solid #663300' }}>BP_GenericEntity<br />LIFE / TakeDamage</div>
                    <div style={{ background: '#331c00', padding: '8px', marginBottom: '8px', border: '1px solid #663300' }}>BP_GenericEnemy<br />Lock-On Targeting</div>
                    <div style={{ background: '#331c00', padding: '8px', border: '1px solid #663300' }}>BP_GenericObject<br />Pickups / Keys</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <div style={{ padding: '8px 15px', background: '#333', border: '1px solid #666', color: '#aaa', borderRadius: '4px' }}>Boss killed ➔ Gate ➔</div>
                  </div>
                </div>

                {/* Game Levels (Center) */}
                <div style={{ border: '2px solid #0055aa', padding: '15px', background: '#002244', textAlign: 'center', width: '260px', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 15px 0', color: '#3399ff', fontSize: '16px' }}>Game Levels</h3>
                  <div style={{ background: '#001122', padding: '8px', marginBottom: '5px', border: '1px solid #003366' }}>M_MainMenu</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                  <div style={{ background: '#001122', padding: '8px', marginBottom: '5px', border: '1px solid #003366' }}>M_Charadlios</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                  <div style={{ background: '#001122', padding: '8px', marginBottom: '5px', border: '1px solid #003366' }}>M_OfficeIndoor</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                  <div style={{ background: '#001122', padding: '8px', marginBottom: '5px', border: '1px solid #003366' }}>M_Library</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                  <div style={{ background: '#001122', border: '2px solid #ff9900', padding: '8px', marginBottom: '5px', color: '#ffcc88' }}>M_LibraryBusStop</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                  <div style={{ background: '#001122', padding: '8px', marginBottom: '5px', border: '1px solid #003366' }}>M_HallwayStairs</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                  <div style={{ background: '#001122', padding: '8px', marginBottom: '5px', border: '1px solid #003366' }}>M_Appartment</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                  <div style={{ background: '#001122', padding: '8px', border: '1px solid #003366' }}>M_FakeWorld_1</div>
                </div>

                {/* Systems / UI (Right) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <div style={{ border: '2px solid #aa0000', padding: '15px', background: '#440000', textAlign: 'center', width: '250px', borderRadius: '8px' }}>
                    <h3 style={{ margin: '0 0 15px 0', color: '#ff5555', fontSize: '16px' }}>UI / Menus</h3>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '8px' }}>
                      <div style={{ background: '#220000', padding: '8px', flex: 1, border: '1px solid #660000' }}>WG_PAUSE</div>
                      <div style={{ background: '#220000', padding: '8px', flex: 1, border: '1px solid #660000' }}>WG_Save</div>
                    </div>
                    <div style={{ background: '#220000', padding: '8px', marginBottom: '8px', border: '1px solid #660000' }}>BP_LevelInfoHUD<br />WG_LevelTitle 1-8</div>
                    <div style={{ background: '#220000', padding: '8px', border: '1px solid #660000' }}>WG_Aim / WG_Bullets</div>
                  </div>

                  <div style={{ border: '2px solid #555', padding: '15px', background: '#222', textAlign: 'center', borderRadius: '8px' }}>
                    <h3 style={{ margin: '0 0 10px 0', color: '#aaa', fontSize: '16px' }}>Save System</h3>
                    <div style={{ background: '#111', padding: '8px', border: '1px solid #333' }}>Save ➔ CT_Save / Load</div>
                  </div>
                </div>

              </div>

              {/* Bottom Row: Player Actions */}
              <div style={{ border: '2px solid #00aa55', padding: '15px', background: '#004422', textAlign: 'center', marginTop: '15px', borderRadius: '8px' }}>
                <h3 style={{ margin: '0 0 15px 0', color: '#33ff99', fontSize: '16px', letterSpacing: '1px' }}>Player Actions</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                  <div style={{ background: '#002211', padding: '10px 15px', border: '1px solid #006633' }}>Move / Jump / Dodge</div>
                  <div style={{ background: '#002211', padding: '10px 15px', border: '1px solid #006633' }}>Attack / Protect / Slam</div>
                  <div style={{ background: '#002211', padding: '10px 15px', border: '1px solid #006633' }}>Interact / Dialog</div>
                  <div style={{ background: '#002211', padding: '10px 15px', border: '1px solid #006633' }}>Pickup / Keys / Throw</div>
                  <div style={{ background: '#002211', padding: '10px 15px', border: '1px solid #006633' }}>Camera: Follow / Strafe</div>
                  <div style={{ background: '#002211', padding: '10px 15px', border: '1px solid #006633' }}>Aim / Ranged</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Slide 20 (Level 1 Flow) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Level 1 Flow</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px', background: 'rgba(20,20,20,0.85)' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Level 1: Apartment Flow</h2>
            <div className="content-divider" style={{ marginBottom: 20 }} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', fontFamily: 'monospace', fontSize: '13px', paddingTop: '10px' }}>

              {/* Start */}
              <div style={{ background: '#3b82f6', color: '#fff', padding: '12px 30px', borderRadius: '20px', fontWeight: 'bold' }}>
                Start: Spawn in Apartment
              </div>
              <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>

              {/* Explore */}
              <div style={{ background: '#333', border: '1px solid #555', padding: '12px 40px', borderRadius: '4px', position: 'relative' }}>
                Explore
              </div>
              <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>

              {/* Interact */}
              <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '20px', margin: '10px 0' }}>
                <div style={{ transform: 'rotate(-45deg)' }}>Interact?</div>
              </div>

              {/* Branches Container */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '30px', flexWrap: 'wrap', marginTop: '10px', width: '100%' }}>

                {/* Branch 1: Monolog */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', flex: 1, minWidth: '150px' }}>
                  <div style={{ color: '#f97316', fontSize: '12px', background: '#4c2300', padding: '4px 8px', borderRadius: '4px' }}>Bed/Guitar/PC/Books</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                  <div style={{ background: '#1c1c1c', border: '1px solid #444', padding: '10px 20px', textAlign: 'center', borderRadius: '4px', width: '100%' }}>Play Monolog<br />Dialog</div>
                  <div style={{ color: '#888', fontSize: '12px', marginTop: '5px' }}>↺ (Back to Explore)</div>
                </div>

                {/* Branch 2: Dresser */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', flex: 1, minWidth: '150px' }}>
                  <div style={{ color: '#f97316', fontSize: '12px', background: '#4c2300', padding: '4px 8px', borderRadius: '4px' }}>Dresser</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                  <div style={{ background: '#1c1c1c', border: '1px solid #444', padding: '10px 20px', textAlign: 'center', borderRadius: '4px', width: '100%' }}>Outfit Preview<br />+ Change</div>
                  <div style={{ color: '#888', fontSize: '12px', marginTop: '5px' }}>↺ (Back to Explore)</div>
                </div>

                {/* Branch 3: Save Game */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', flex: 1, minWidth: '150px' }}>
                  <div style={{ color: '#f97316', fontSize: '12px', background: '#4c2300', padding: '4px 8px', borderRadius: '4px' }}>Coffee Machine</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                  <div style={{ background: '#6366f1', color: '#fff', padding: '10px 20px', borderRadius: '4px', textAlign: 'center', width: '100%' }}>Save Game</div>
                  <div style={{ color: '#888', fontSize: '12px', marginTop: '5px' }}>↺ (Back to Explore)</div>
                </div>

                {/* Branch 4: Exit Door */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', flex: 1.5, minWidth: '220px' }}>
                  <div style={{ color: '#f97316', fontSize: '12px', background: '#4c2300', padding: '4px 8px', borderRadius: '4px' }}>Exit Door</div>
                  <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>

                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}>
                    <div style={{ transform: 'rotate(-45deg)' }}>Outfit Check</div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '10px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Fail</div>
                      <div style={{ color: '#888', fontSize: '12px', marginTop: '5px' }}>↺ (Back to Explore)</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', flex: 1 }}>
                      <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Pass</div>
                      <div style={{ color: '#666', fontSize: '18px', lineHeight: '10px' }}>↓</div>
                      <div style={{ background: '#22c55e', color: '#fff', padding: '10px', borderRadius: '4px', textAlign: 'center' }}>
                        Fade + Open Level:<br />Hallway
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Slide 21 (Level 3 Flow) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Level 3 Flow</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px', background: 'rgba(20,20,20,0.85)' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Level 3: Town Street Flow</h2>
            <div className="content-divider" style={{ marginBottom: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', fontFamily: 'monospace', fontSize: '13px' }}>
              <div style={{ background: '#3b82f6', color: '#fff', padding: '10px 25px', borderRadius: '20px', fontWeight: 'bold' }}>Start: Spawn in Town</div>
              <div style={{ color: '#666' }}>↓</div>
              <div style={{ background: '#333', border: '1px solid #555', padding: '10px 30px', borderRadius: '4px' }}>Explore Streets</div>
              <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Talk to NPC?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#1c1c1c', border: '1px solid #444', padding: '10px' }}>NPC Dialog + Clues</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Pick Up Item?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#d97706', color: '#fff', padding: '10px', borderRadius: '4px' }}>Collect Item/Weapon</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Reach Bus Stop?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#22c55e', color: '#fff', padding: '10px', borderRadius: '4px', textAlign: 'center' }}>Fade + Open Level:<br />Bus Stop</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Slide 22 (Level 4 Flow) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Level 4 Flow</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px', background: 'rgba(20,20,20,0.85)' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Level 4: Library Bus Stop Flow</h2>
            <div className="content-divider" style={{ marginBottom: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', fontFamily: 'monospace', fontSize: '13px' }}>
              <div style={{ background: '#3b82f6', color: '#fff', padding: '10px 25px', borderRadius: '20px', fontWeight: 'bold' }}>Start: Spawn at Lib Bus Stop</div>
              <div style={{ color: '#666' }}>↓</div>
              <div style={{ background: '#333', border: '1px solid #555', padding: '10px 30px', borderRadius: '4px' }}>Explore Area</div>
              <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Checkpoint?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#6366f1', color: '#fff', padding: '10px', borderRadius: '4px' }}>Auto-Save</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Talk to NPC?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#1c1c1c', border: '1px solid #444', padding: '10px' }}>Advisor/Clerk Dialog</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Enter Door?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#22c55e', color: '#fff', padding: '10px', borderRadius: '4px', textAlign: 'center' }}>Fade + Open Level:<br />Library</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Slide 23 (Level 5 Flow) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Level 5 Flow</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px', background: 'rgba(20,20,20,0.85)' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Level 5: Library Flow</h2>
            <div className="content-divider" style={{ marginBottom: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', fontFamily: 'monospace', fontSize: '13px' }}>
              <div style={{ background: '#3b82f6', color: '#fff', padding: '10px 25px', borderRadius: '20px', fontWeight: 'bold' }}>Start: Spawn in Library</div>
              <div style={{ color: '#666' }}>↓</div>
              <div style={{ background: '#333', border: '1px solid #555', padding: '10px 30px', borderRadius: '4px' }}>Move Quietly / Explore</div>
              <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Checkpoint?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#6366f1', color: '#fff', padding: '10px', borderRadius: '4px' }}>Auto-Save</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Noise Trig?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#dc2626', color: '#fff', padding: '10px', borderRadius: '4px' }}>Librarian Chase</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1.5 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Find Key?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '10px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Real Key?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#1c1c1c', border: '1px solid #444', padding: '10px' }}>Unlock Exit Door</div>
                  <div style={{ background: '#22c55e', color: '#fff', padding: '10px', borderRadius: '4px', textAlign: 'center' }}>Fade + Open Level:<br />Office</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Slide 24 (Level 6 Flow) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Level 6 Flow</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px', background: 'rgba(20,20,20,0.85)' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Level 6: Office Flow</h2>
            <div className="content-divider" style={{ marginBottom: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', fontFamily: 'monospace', fontSize: '13px' }}>
              <div style={{ background: '#3b82f6', color: '#fff', padding: '10px 25px', borderRadius: '20px', fontWeight: 'bold' }}>Start: Spawn in Office</div>
              <div style={{ color: '#666' }}>↓</div>
              <div style={{ background: '#333', border: '1px solid #555', padding: '10px 30px', borderRadius: '4px' }}>Explore Office</div>
              <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Talk to Coworker?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#1c1c1c', border: '1px solid #444', padding: '10px' }}>Coworker Dialog</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1.5 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Outfit Gate Pass?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#1c1c1c', border: '1px solid #444', padding: '10px' }}>Access Restricted Area</div>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Trigger Story?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#ef4444', color: '#fff', padding: '10px' }}>Horror Scene: Lights/Fog</div>
                  <div style={{ background: '#1c1c1c', border: '1px solid #444', padding: '10px' }}>Find Exit</div>
                  <div style={{ background: '#22c55e', color: '#fff', padding: '10px', borderRadius: '4px', textAlign: 'center' }}>Fade + Open Level:<br />FakeWorld</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Slide 25 (Level 7 Flow) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Level 7 Flow</div>
          <div className="content-box fade-up" style={{ maxWidth: 1100, padding: '30px 40px', background: 'rgba(20,20,20,0.85)' }}>
            <h2 className="content-title" style={{ fontSize: 32 }}>Level 7: FakeWorld Flow</h2>
            <div className="content-divider" style={{ marginBottom: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', fontFamily: 'monospace', fontSize: '13px' }}>
              <div style={{ background: '#3b82f6', color: '#fff', padding: '10px 25px', borderRadius: '20px', fontWeight: 'bold' }}>Start: Spawn in FakeWorld</div>
              <div style={{ color: '#666' }}>↓</div>
              <div style={{ background: '#6366f1', border: '1px solid #555', padding: '10px 30px', borderRadius: '4px', color: '#fff' }}>Explore + Save/Checkpoint</div>
              <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Combat Encounter?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#ef4444', color: '#fff', padding: '10px', borderRadius: '4px' }}>Fight Enemies</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>Puzzle?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#1c1c1c', border: '1px solid #444', padding: '10px' }}>Solve Combination Lock</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <div style={{ background: '#222', border: '1px solid #555', transform: 'rotate(45deg)', padding: '15px', margin: '5px 0' }}><div style={{ transform: 'rotate(-45deg)' }}>All Bosses Defeated?</div></div>
                  <div style={{ color: '#f97316', fontSize: '11px', background: '#4c2300', padding: '2px 8px', borderRadius: '4px' }}>Yes</div>
                  <div style={{ background: '#1c1c1c', border: '1px solid #444', padding: '10px' }}>Final Door + Ending Dialog</div>
                  <div style={{ background: '#22c55e', color: '#fff', padding: '10px', borderRadius: '4px', textAlign: 'center' }}>Fade + Open Level: End</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Slide 26 (Implementation Title) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="content-box fade-up" style={{ background: 'transparent', border: 'none', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
            <h1 className="hero-title" style={{ textAlign: 'center', fontSize: 'clamp(60px, 10vw, 120px)', textTransform: 'uppercase', letterSpacing: '4px' }}>
              Implementation
            </h1>
          </div>
        </section>

        {/* ── Slide 27 (Main Menu Implementation) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', gap: '60px', alignItems: 'center' }}>

            <div style={{ flex: 1 }}>
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <h1 className="hero-title" style={{ fontSize: 64, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Main Menu</h1>
              </div>
              <div className="content-divider" style={{ marginBottom: 30 }} />
              <div className="func-container" style={{ gridTemplateColumns: '1fr', gap: 16 }}>

                <div className="func-card">
                  <h4>New Game</h4>
                  <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>Confirm Panel → Fade Transition</div>
                  <p>Triggers a confirmation prompt to prevent accidental save wiping. On 'Yes', initiates a fade transition to the opening sequence.</p>
                </div>

                <div className="func-card">
                  <h4>Continue / Resume</h4>
                  <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>Validates Save File Presence</div>
                  <p>Button remains hidden unless a valid game save exists. On click, fades audio/visuals gracefully before loading runtime data.</p>
                </div>

                <div className="func-card">
                  <h4>Quit Sequence</h4>
                  <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>Confirm Panel → Exit</div>
                  <p>Shares the prompt architecture with 'New Game' to explicitly verify player exit intentions. Handles safe game teardown.</p>
                </div>

                <div className="func-card">
                  <h4>Background Audio</h4>
                  <div style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6 }}>Theme Playback</div>
                  <p>Invokes continuous main theme playback during load for immersive UX right from startup.</p>
                </div>

              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              <img
                src={mainMenuImg}
                alt="Main Menu Interface 1"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              />
              <img
                src={mainMenuImg2}
                alt="Main Menu Interface 2"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 28 (Player Character: Aiming) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Player Character System</h1>
              <h2 className="content-title" style={{ fontSize: 32, opacity: 0.8, marginTop: 10 }}>Aiming</h2>
            </div>

            <div className="content-divider" style={{ marginBottom: 30, width: '400px' }} />

            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <div style={{
                flex: 1,
                maxWidth: '600px',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.2)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.6)'
              }}>
                <video
                  src={aimVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1.5, maxWidth: '1000px' }}>
                <img
                  src={aimImg}
                  alt="Aiming Interface Documentation"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    border: '2px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 15px 45px rgba(0,0,0,0.6)'
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── Slide 29 (Player Character: Dodge) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Player Character System</h1>
              <h2 className="content-title" style={{ fontSize: 32, opacity: 0.8, marginTop: 10 }}>Dodge</h2>
            </div>

            <div className="content-divider" style={{ marginBottom: 30, width: '400px' }} />

            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <div style={{
                flex: 1,
                maxWidth: '600px',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.2)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.6)'
              }}>
                <video
                  src={dodgeVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1.5, maxWidth: '1000px' }}>
                <img
                  src={dodgeImg}
                  alt="Dodge Mechanic Documentation"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    border: '2px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 15px 45px rgba(0,0,0,0.6)'
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── Slide 30 (Player Character: Hit and Take Damage) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Player Character System</h1>
              <h2 className="content-title" style={{ fontSize: 32, opacity: 0.8, marginTop: 10 }}>Hit and Take Damage</h2>
            </div>

            <div className="content-divider" style={{ marginBottom: 30, width: '400px' }} />

            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <div style={{
                flex: 1,
                maxWidth: '600px',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.2)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.6)'
              }}>
                <video
                  src={hitTakeVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1.5, maxWidth: '1000px' }}>
                <img
                  src={hitTakeImg}
                  alt="Hit/Take Damage Documentation"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    border: '2px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 15px 45px rgba(0,0,0,0.6)'
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── Slide 31 (Player Character: Outfit Change) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 10 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Player Character System</h1>
              <h2 className="content-title" style={{ fontSize: 32, opacity: 0.8, marginTop: 10 }}>Outfit Change</h2>
            </div>

            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '1600px', lineHeight: 1.5, marginBottom: 10 }}>
              Players can seamlessly swap between different modular outfits, changing the materials and meshes of the character's jacket, torso, and pants on the fly. Some puzzles even check what outfit you are currently wearing to unlock progression. The outfit you choose is permanently saved and carries over between different levels.
            </p>

            <div className="content-divider" style={{ marginBottom: 20, width: '400px' }} />

            <div style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <div style={{
                flex: 1,
                maxWidth: '800px',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.2)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.6)'
              }}>
                <video
                  src={outfitVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1.5, maxWidth: '1000px' }}>
                <img
                  src={outfitImg}
                  alt="Outfit Change Documentation"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    border: '2px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 15px 45px rgba(0,0,0,0.6)'
                  }}

                />
              </div>
            </div>

          </div>
        </section>

        {/* ── Slide 32 (HUD / Game Interface: Screenshots) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 10 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>HUD / Game Interface</h1>
            </div>

            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '1600px', lineHeight: 1.5, marginBottom: 10 }}>
              The intuitive Heads-Up Display constantly tracks the player's status in real-time. It seamlessly updates your health, stamina, and current objectives every single frame to ensure you always have access to crucial survival information.
            </p>

            <div className="content-divider" style={{ marginBottom: 20, width: '400px' }} />

            <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <img
                src={hudImg}
                alt="HUD Elements 1"
                style={{
                  flex: 1,
                  maxWidth: '48%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
              <img
                src={hudImg2}
                alt="HUD Elements 2"
                style={{
                  flex: 1,
                  maxWidth: '48%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 33 (Level System) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 10 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Level System</h1>
            </div>

            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '1600px', lineHeight: 1.5, marginBottom: 10 }}>
              Moving between areas is smoothly handled by interactive doors. When you open a door, the game gracefully fades out the music, saves your exact position and rotation, and seamlessly loads the new environment, placing you exactly where you need to be.
            </p>

            <div className="content-divider" style={{ marginBottom: 20, width: '400px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src={levelImg}
                alt="Level System Documentation"
                style={{
                  maxWidth: '100%',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 34 (Save System: Part 1) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 10 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Save System</h1>
            </div>

            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '1600px', lineHeight: 1.5, marginBottom: 10 }}>
              The game features both automatic checkpoints and interactive manual save stations (like coffee machines!). Walking past a checkpoint or interacting with a station instantly saves your exact position, current outfit, collected keys, and defeated bosses so you never lose progress.
            </p>

            <div className="content-divider" style={{ marginBottom: 20, width: '400px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src={saveImg}
                alt="Save System 1"
                style={{
                  maxWidth: '100%',
                  maxHeight: '55vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 35 (Save System: Part 2) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Save System</h1>
            </div>

            <div className="content-divider" style={{ marginBottom: 30, width: '400px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src={saveImg2}
                alt="Save System 2"
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 36 (Interaction System: Part 1) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 10 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Interaction System</h1>
            </div>

            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '1600px', lineHeight: 1.5, marginBottom: 10 }}>
              When the player walks close enough to an object or NPC, it becomes interactable. Pressing the interact button triggers dynamic events or opens up deep branching dialogue trees, allowing players to engage in rich, choice-driven conversations with characters in the world.
            </p>

            <div className="content-divider" style={{ marginBottom: 20, width: '400px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src={interImg1}
                alt="Interaction System 1"
                style={{
                  maxWidth: '100%',
                  maxHeight: '55vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 37 (Interaction System: Part 2) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Interaction System</h1>
            </div>

            <div className="content-divider" style={{ marginBottom: 30, width: '400px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src={interImg2}
                alt="Interaction System 2"
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 38 (Interaction System: Part 3) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Interaction System</h1>
            </div>

            <div className="content-divider" style={{ marginBottom: 30, width: '400px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src={interImg3}
                alt="Interaction System 3"
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 39 (Sound System: Part 1) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 10 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Sound System</h1>
            </div>

            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '1400px', lineHeight: 1.6, marginBottom: 10 }}>
              The game features a completely centralized music system that persists uninterrupted across all loading screens and levels. It allows any object or event in the game world to dynamically change the background track to match the current mood or combat intensity.
            </p>

            <div className="content-divider" style={{ marginBottom: 20, width: '400px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src={soundImg1}
                alt="Sound System 1"
                style={{
                  maxWidth: '100%',
                  maxHeight: '55vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 40 (Sound System: Part 2) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Sound System</h1>
            </div>

            <div className="content-divider" style={{ marginBottom: 30, width: '400px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src={soundImg2}
                alt="Sound System 2"
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 41 (Enemy System: Part 1) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 10 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Enemy System</h1>
            </div>

            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '1600px', lineHeight: 1.5, marginBottom: 10 }}>
              Enemies are built using a highly scalable system, allowing for varied behaviors, attack patterns, and dynamic speeds. From standard grunts to highly complex boss fights, enemies are intelligently placed into the world and follow custom patrol paths to hunt the player down.
            </p>

            <div className="content-divider" style={{ marginBottom: 20, width: '400px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src={enemyImg1}
                alt="Enemy System 1"
                style={{
                  maxWidth: '100%',
                  maxHeight: '55vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 42 (Enemy System: Part 2) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <h1 className="hero-title" style={{ fontSize: 58, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Enemy System</h1>
            </div>

            <div className="content-divider" style={{ marginBottom: 30, width: '400px' }} />

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <img
                src={enemyImg2}
                alt="Enemy System 2"
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.6)',
                  border: '2px solid rgba(255,255,255,0.1)'
                }}
              />
            </div>

          </div>
        </section>

        {/* ── Slide 43 (Test Cases) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Implementation</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1800, padding: '30px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <h1 className="hero-title" style={{ fontSize: 80, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Test Cases</h1>
            </div>

            <div className="content-divider" style={{ marginBottom: 30, width: '400px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', background: 'rgba(0,0,0,0.5)', padding: '60px 100px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: 28, color: 'rgba(255,255,255,0.9)', textAlign: 'center', maxWidth: '800px', lineHeight: 1.5 }}>
                Comprehensive suite of testing scenarios and validations can be found at the following destination:
              </p>

              <a
                href="https://shorturl.at/8rdcH"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'var(--accent)',
                  color: '#fff',
                  fontSize: 32,
                  fontWeight: 600,
                  padding: '20px 60px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(124,92,252,0.4)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(124,92,252,0.6)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(124,92,252,0.4)'
                }}
              >
                View Test Cases Document
              </a>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', marginTop: '-20px' }}>
                https://shorturl.at/8rdcH
              </p>
            </div>

          </div>
        </section>
        {/* ── Slide 44 (Conclusion & Future Vision) ── */}
        <section className="content-slide slide" style={{ backgroundImage: `url(${page1Bg})` }}>
          <div className="content-overlay" />
          <div className="fr-header">Project Wrap-Up</div>
          <div className="content-box fade-up" style={{ width: '92vw', maxWidth: 1200, padding: '40px 50px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', boxShadow: 'none' }}>

            <h1 className="hero-title" style={{ fontSize: 64, margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center' }}>
              Conclusion & Future Vision
            </h1>

            <div className="content-divider" style={{ marginBottom: 20, width: '400px' }} />

            <div style={{ display: 'flex', gap: '30px', marginBottom: '10px', width: '100%' }}>

              {/* Project Success */}
              <div style={{ flex: 1, background: 'rgba(20,20,20,0.85)', borderRadius: '15px', padding: '35px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '70px', height: '70px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '32px' }}></span>
                </div>
                <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '15px', fontWeight: 600 }}>Project Success</h3>
                <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                  Demonstrated Unreal Engine 5 capabilities with modular systems, responsive gameplay, and atmospheric horror design.
                </p>
              </div>

              {/* Key Learnings */}
              <div style={{ flex: 1, background: 'rgba(20,20,20,0.85)', borderRadius: '15px', padding: '35px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '70px', height: '70px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '32px' }}></span>
                </div>
                <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '15px', fontWeight: 600 }}>Key Learnings</h3>
                <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                  Game architecture, behavior trees, level streaming, and performance optimization in modern game engines.
                </p>
              </div>

            </div>

            {/* Future Enhancements */}
            <div style={{ width: '100%', background: 'rgba(20,20,20,0.85)', borderRadius: '15px', padding: '35px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '32px' }}></span>
              </div>
              <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '15px', fontWeight: 600 }}>Future Enhancements</h3>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                Procedural level generation, adaptive AI, fear meter system, multiple endings, and VR support.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}
