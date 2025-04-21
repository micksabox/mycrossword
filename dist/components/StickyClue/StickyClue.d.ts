interface StickyClueProps {
    allowedTags: string[];
    num?: string;
    onMoveNext: () => void;
    onMovePrev: () => void;
    show: 'always' | 'auto';
    text?: string;
}
export default function StickyClue({ allowedTags, num, onMoveNext, onMovePrev, show, text, }: StickyClueProps): import("react/jsx-runtime").JSX.Element;
export {};
