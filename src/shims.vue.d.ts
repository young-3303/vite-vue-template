import { Dialog } from "@vant/compat";

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios
    $route: RouteLocationNormalizedLoaded
    $dialog: typeof Dialog
    // $toast: typeof Toast
    person: {
      name: string
      age: number
      id: number
    }
  }
}
