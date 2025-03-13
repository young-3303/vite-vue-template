export {}
declare module 'vue' {
  interface ComponentCustomProperties {
    $thisTest: (arr: number []) => string;
    $translate: (key: string) => string;
    $hello: string;
  }
}
