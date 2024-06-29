export default function line(ctx, x, y, dx, dy, color = "white") {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(dx, dy);
  ctx.stroke();
}
