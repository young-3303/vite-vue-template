import type {App, DefineComponent} from "vue";
import {Button} from 'vant'
import type {WithInstall} from "vant/es/utils";

const list:  WithInstall<DefineComponent<any>>[] = [Button]
export function useVant (app: App) {
    list.forEach(item => {
        app.use(item)
    })
}
