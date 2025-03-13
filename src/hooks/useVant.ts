import type { App, DefineComponent } from "vue";
import { Button } from 'vant'
import type { WithInstall } from "vant/es/utils";
import { Dialog, Toast } from '@vant/compat'

const list: WithInstall<DefineComponent<any>>[] = [Button]

export function useVant(app: App) {
  Dialog.install(app)
  Toast.install(app)
  list.forEach(item => {
    app.use(item)
  })
}
