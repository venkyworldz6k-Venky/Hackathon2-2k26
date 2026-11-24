import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  connections: number[];
  pulse: number;
}

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Create Nodes
    let nodes: Node[] = [];
    const nodeCount = Math.min(Math.floor((width * height) / 16000), 75);

    function initNodes() {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const isLime = Math.random() > 0.8;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: isLime ? Math.random() * 2.5 + 2 : Math.random() * 2 + 1.2,
          color: isLime ? '#C6FF3D' : '#155655',
          connections: [],
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }

    initNodes();

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle AI Grid Background Overlay
      ctx.strokeStyle = 'rgba(243, 240, 232, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce on boundary
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Mouse interaction
        const dxMouse = nodeA.x - mouse.x;
        const dyMouse = nodeA.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          nodeA.x += (dxMouse / distMouse) * force * 1.5;
          nodeA.y += (dyMouse / distMouse) * force * 1.5;
        }

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            const isConnectedToLime = nodeA.color === '#C6FF3D' || nodeB.color === '#C6FF3D';

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            if (isConnectedToLime) {
              ctx.strokeStyle = `rgba(198, 255, 61, ${alpha * 0.9})`;
              ctx.lineWidth = 1.2;
            } else {
              ctx.strokeStyle = `rgba(16, 98, 96, ${alpha})`;
              ctx.lineWidth = 0.8;
            }
            ctx.stroke();
          }
        }

        // Draw node
        nodeA.pulse += 0.03;
        const pulseEffect = Math.sin(nodeA.pulse) * 0.5 + 1;

        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius * pulseEffect, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color;

        if (nodeA.color === '#C6FF3D') {
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#C6FF3D';
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-70"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
