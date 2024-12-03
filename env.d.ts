/// <reference types="vite/client" />
/// <reference types="vite-env" />

declare module "*.vue" {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}
interface ImportMetaEnv {
    VITE_APP_TITLE: string;
    // more environment variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
