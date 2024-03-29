export type Hex = string;

export function HexToRgba({ hex }: { hex: Hex }): string {

        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);

        return `rgba(${r}, ${g}, ${b})`;
}
