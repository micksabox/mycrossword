export declare const DEFAULT_TIMEOUT = 10;
interface ConfirmProps {
    buttonText: string;
    onCancel: () => void;
    onConfirm: () => void;
    timeout?: number;
}
export default function Confirm({ buttonText, onCancel, onConfirm, timeout, }: ConfirmProps): import("react/jsx-runtime").JSX.Element;
export {};
