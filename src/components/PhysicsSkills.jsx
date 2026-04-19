import React, { useEffect, useRef } from 'react';
import illustratorSvg from '../assets/adobe-illustrator.svg';
import photoshopSvg from '../assets/adobe-photoshop.svg';
import afterEffectsSvg from '../assets/adobe-after-effects.svg';
import figmaSvg from '../assets/figma.svg';
import Matter from 'matter-js';

const PhysicsSkills = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasContainer = canvasRef.current;
    if (!canvasContainer) return;

    const Engine = Matter.Engine,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    engine.world.gravity.y = 0.8;

    const width = canvasContainer.clientWidth || 800;
    const height = canvasContainer.clientHeight || 350;

    // Invisible walls with virtual padding inside container
    const padding = 24;
    let isSealed = false;
    const wallOpts = { isStatic: true, friction: 0.1, restitution: 0.8 }; // Increased bounce for walls
    const ground = Bodies.rectangle(width / 2, height - padding + 25, width * 2, 50, wallOpts);
    const leftWall = Bodies.rectangle(padding - 25, height / 2, 50, height * 2, wallOpts);
    const rightWall = Bodies.rectangle(width - padding + 25, height / 2, 50, height * 2, wallOpts);
    // Ceiling temporarily moved high up to permit tiles to rain inside
    const ceiling = Bodies.rectangle(width / 2, -800, width * 2, 50, wallOpts);
    Composite.add(engine.world, [ground, leftWall, rightWall, ceiling]);

    // Map DOM nodes → physics bodies
    const domNodes = canvasContainer.querySelectorAll('.skill-body');
    const bodyMap = [];

    domNodes.forEach((node, idx) => {
      const isSq = node.classList.contains('sq');
      // For logo tiles, always 80px. For pills, estimate from text length.
      const innerText = node.querySelector('[data-pill-label]')?.getAttribute('data-pill-label') || node.textContent;
      const w = isSq ? 80 : (innerText.trim().length * 9 + 48);
      const h = isSq ? 80 : 50;
      const chamfer = isSq ? 24 : 25;

      // Distribute tiles across width to prevent clustering on drop
      const zones = 4;
      const zone = idx % zones;
      const zoneWidth = (width - 200) / zones;
      const x = 100 + zone * zoneWidth + Math.random() * zoneWidth;
      // All tiles start just above the container, held static until released
      const y = -55;

      const body = Bodies.rectangle(x, y, w, h, {
        chamfer: { radius: chamfer },
        restitution: 0.6,
        friction: 0.1,
        density: 0.001,
        isStatic: true   // held — will be released one-by-one
      });

      bodyMap.push({ elem: node, body });
      Composite.add(engine.world, body);
    });

    // Invisible mouse-input canvas overlay
    const mouseCanvas = document.createElement('canvas');
    mouseCanvas.width = width;
    mouseCanvas.height = height;
    Object.assign(mouseCanvas.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '10',
      background: 'transparent'
      // cursor: 'grab' removed so custom cursor is exclusively used
    });
    canvasContainer.appendChild(mouseCanvas);

    const mouse = Mouse.create(mouseCanvas);
    mouse.pixelRatio = mouseCanvas.width / mouseCanvas.offsetWidth;

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.1, render: { visible: false } } // Lower stiffness for bouncy drag
    });
    Composite.add(engine.world, mouseConstraint);

    // Removed native Cursor feedback events to use custom cursor globally

    // Allow page scrolling over the container
    mouseCanvas.addEventListener('wheel', (e) => {
      window.dispatchEvent(new WheelEvent('wheel', {
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        deltaMode: e.deltaMode,
        bubbles: true
      }));
    }, { passive: true });

    // Sync DOM ↔ physics every frame
    let animId;
    const syncDOM = () => {
      bodyMap.forEach(({ elem, body }) => {
        elem.style.transform = `translate(${body.position.x}px, ${body.position.y}px) translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      animId = requestAnimationFrame(syncDOM);
    };
    animId = requestAnimationFrame(syncDOM);

    // Intersection Observer to trigger the physics drop when visible
    const runner = Runner.create();
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        Runner.run(runner, engine);
        observer.disconnect();

        // Release tiles one-by-one so each falls & settles before the next drops
        bodyMap.forEach(({ body }, i) => {
          setTimeout(() => {
            Matter.Body.setStatic(body, false);
          }, i * 180);
        });

        // Seal ceiling after all tiles have dropped + settle time
        const totalDropTime = bodyMap.length * 180 + 1500;
        setTimeout(() => {
          isSealed = true;
          const nw = canvasContainer.clientWidth || 800;
          Matter.Body.setPosition(ceiling, { x: nw / 2, y: padding - 25 });
        }, totalDropTime);
      }
    }, { threshold: 0.3 }); // Trigger earlier so animation starts as section enters view

    observer.observe(canvasContainer);

    // Resize handler
    const handleResize = () => {
      const nw = canvasContainer.clientWidth || 800;
      const nh = canvasContainer.clientHeight || 350;
      Matter.Body.setPosition(rightWall, { x: nw - padding + 25, y: nh / 2 });
      Matter.Body.setPosition(ground, { x: nw / 2, y: nh - padding + 25 });
      if (isSealed) {
        Matter.Body.setPosition(ceiling, { x: nw / 2, y: padding - 25 });
      } else {
        Matter.Body.setPosition(ceiling, { x: nw / 2, y: -800 });
      }
      mouseCanvas.width = nw;
      mouseCanvas.height = nh;
      mouse.pixelRatio = mouseCanvas.width / mouseCanvas.offsetWidth;
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      Runner.stop(runner);
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
      if (mouseCanvas.parentNode) mouseCanvas.remove();
    };
  }, []);

  return (
    <section className="skills-physics" id="skills">
      <div className="skills-header">
        <h2 className="subtitle">My <span className="italic-accent">skills</span></h2>
      </div>
      <div className="skills-canvas" id="skills-canvas" ref={canvasRef}>
        <div className="drag-hint">👋 Drag me!</div>

        {/* Tool Logos — real SVG assets at 1.5x size */}
        <div className="skill-body sq" data-label="Illustrator">
          <img src={illustratorSvg} alt="Adobe Illustrator" width="78" height="78" draggable="false" />
        </div>
        <div className="skill-body sq" data-label="Photoshop">
          <img src={photoshopSvg} alt="Adobe Photoshop" width="78" height="78" draggable="false" />
        </div>
        <div className="skill-body sq" data-label="AfterEffects">
          <img src={afterEffectsSvg} alt="Adobe After Effects" width="78" height="78" draggable="false" />
        </div>
        <div className="skill-body sq" data-label="Figma">
          <img src={figmaSvg} alt="Figma" width="78" height="78" draggable="false" />
        </div>

        {/* Text Skill Pills */}
        <div className="skill-body pill"><span data-pill-label="User Interviews">User Interviews</span></div>
        <div className="skill-body pill"><span data-pill-label="Competitive Analysis">Competitive Analysis</span></div>
        <div className="skill-body pill"><span data-pill-label="UI Animation">UI Animation</span></div>
        <div className="skill-body pill"><span data-pill-label="A/B Testing">A/B Testing</span></div>
        <div className="skill-body pill"><span data-pill-label="Heatmaps">Heatmaps</span></div>
        <div className="skill-body pill"><span data-pill-label="End-to-End Product Design">End-to-End Product Design</span></div>
        <div className="skill-body pill"><span data-pill-label="Design Systems & Tokens">Design Systems &amp; Tokens</span></div>
        <div className="skill-body pill"><span data-pill-label="Interaction & Motion">Interaction &amp; Motion</span></div>
        <div className="skill-body pill"><span data-pill-label="Data-Driven UX">Data-Driven UX</span></div>
        <div className="skill-body pill"><span data-pill-label="Information Architecture">Information Architecture</span></div>
        <div className="skill-body pill"><span data-pill-label="Visual Design Craft">Visual Design Craft</span></div>
        <div className="skill-body pill"><span data-pill-label="AI-Driven Design">AI-Driven Design</span></div>
        <div className="skill-body pill"><span data-pill-label="Product Thinking">Product Thinking</span></div>
      </div>
    </section>
  );
};

export default PhysicsSkills;
