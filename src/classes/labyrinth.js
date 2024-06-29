import Cell from "./cell";
import removeWall from "../utils/removeWall";

export default class Labyrinth {
  constructor({ canvas, ctx, width, height, size }) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.grid = [];
    this.stack = [];
    this.size = size;
    this.current = null;
  }

  setGrid() {
    for (let i = 0; i < this.width / this.size; i++) {
      const row = [];
      for (let j = 0; j < this.height / this.size; j++) {
        const cell = new Cell({ position: { x: i, y: j }, size: this.size });

        row.push(cell);
      }
      this.grid.push(row);
    }
  }

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.setGrid();
    this.current = this.grid[0][0];
  }

  draw() {
    const map = this.grid.flat();

    map.forEach((cell) => {
      cell.draw(this.ctx);
    });

    this.current.isVisited = true;
    this.current.highlight(this.ctx);

    const next = this.current.checkNeighbor(this.grid);
    if (next) {
      next.isVisited = true;

      this.stack.push(this.current);

      removeWall(this.current, next);

      this.current = next;
    } else if (this.stack.length > 0) {
      this.current = this.stack.pop();
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    requestAnimationFrame(() => this.animate());
    this.draw();
  }
}
