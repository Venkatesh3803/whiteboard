import { ImageLayer } from "../types";

type Props = {
    id: string;
    layer: ImageLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
};

export default function Image(
    { layer, onPointerDown, id, selectionColor }: Props
) {
    const { x, y, width, height, imageUrl } = layer;
    return (
        <image
            xlinkHref={imageUrl}
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                transform: `translate(${x}px, ${y}px)`,
            }}
            x={0}
            y={0}
            width={width}
            height={height}
            strokeWidth={1}
            stroke={selectionColor || "transparent"}
        />
    );
}