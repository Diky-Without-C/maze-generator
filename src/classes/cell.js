import line from "../utils/line";

export default class Cell {
  constructor({ position, size }) {
    this.position = position;
    this.size = size;
    this.isVisited = false;
    this.walls = [true, true, true, true];
  }

  checkNeighbor(grid) {
    const neighbors = [];
    const x = this.position.x;
    const y = this.position.y;

    const getGrid = (x, y) => grid?.[x]?.[y];

    const top = getGrid(x, y - 1);
    const right = getGrid(x + 1, y);
    const bottom = getGrid(x, y + 1);
    const left = getGrid(x - 1, y);

    if (top && !top.isVisited) {
      neighbors.push(top);
    }

    if (right && !right.isVisited) {
      neighbors.push(right);
    }

    if (bottom && !bottom.isVisited) {
      neighbors.push(bottom);
    }

    if (left && !left.isVisited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      const random = Math.floor(Math.random() * neighbors.length);
      return neighbors[random];
    }
  }

  highlight(c) {
    const size = this.size;
    const x = this.position.x * size;
    const y = this.position.y * size;

    c.fillStyle = "dodgerblue";
    c.fillRect(x, y, size, size);
  }

  draw(c) {
    const size = this.size;
    const x = this.position.x * size;
    const y = this.position.y * size;

    // Top
    if (this.walls[0]) {
      line(c, x, y, x + size, y);
    }

    // Right
    if (this.walls[1]) {
      line(c, x + size, y, x + size, y + size);
    }

    // Bottom
    if (this.walls[2]) {
      line(c, x, y + size, x + size, y + size);
    }

    // Left
    if (this.walls[3]) {
      line(c, x, y, x, y + size);
    }

    if (this.isVisited === true) {
      c.fillStyle = "crimson";
      c.fillRect(x, y, size, size);
    }
  }
}
