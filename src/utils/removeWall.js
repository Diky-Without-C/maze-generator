export default function removeWall(current, next) {
  const dx = current.position.x - next.position.x;
  const dy = current.position.y - next.position.y;

  switch (dx) {
    case 1:
      current.walls[3] = false;
      next.walls[1] = false;
      break;
    case -1:
      current.walls[1] = false;
      next.walls[3] = false;
      break;
  }

  switch (dy) {
    case 1:
      current.walls[0] = false;
      next.walls[2] = false;
      break;
    case -1:
      current.walls[2] = false;
      next.walls[0] = false;
      break;
  }
}
