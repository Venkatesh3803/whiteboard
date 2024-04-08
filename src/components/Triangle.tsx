import { TriangleLayer } from "../types";
import { colorToCss } from "../utils";

type Props = {
  id: string;
  layer: TriangleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
};

export default function Triangle(
  { layer, onPointerDown, id, selectionColor }: Props
) {
  const { x, y, width, height, fill } = layer;
  const points = `${x},${y + height} ${x + width / 2},${y} ${x + width},${y + height}`;
  return (

    <polygon
      points={points}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        fill: fill ? colorToCss(fill) : "#CCC",
        stroke: selectionColor || "transparent",
        strokeWidth: 1,
      }}
    />
  );
}