import {createApp} from "vue";

let instance;

export function init() {
  const app = createApp({
    render() {
      return (
        <div>
          <h1>hala</h1>
        </div>
      )
    }
  });
  const root = document.createElement('div');

  document.body.appendChild(root);
  app.mount(root)
}
