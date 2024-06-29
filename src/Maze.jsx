import { useEffect, useRef } from "react";
import Labyrinth from "./classes/labyrinth";

export default function Maze() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const maze = new Labyrinth({
      canvas: canvas,
      ctx: ctx,
      width: 600,
      height: 600,
      size: 30,
    });

    maze.init();
    maze.animate();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}
