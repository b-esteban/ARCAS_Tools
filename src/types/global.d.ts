export {};

declare global {
    interface Window {
        webFunction: (param1: any, param2: any) => void;
    }
}
