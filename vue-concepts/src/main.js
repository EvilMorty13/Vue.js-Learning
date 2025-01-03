import { createApp,inject } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('message', 'This is the message from app')
console.log('Vue version:', app.version);
console.log(app.config)

app.directive('highlight', {
  mounted: (el) => {
    el.classList.add('is-highlight')
  }
});

app.runWithContext(() => {
  const injected = inject('message');
  console.log('Injected message inside runWithContext : ', injected);
});

app.config.errorHandler = (err, instance, info) => {
  console.error('Error:', err);
  console.error('Instance:', instance);
  console.error('Info:', info);
};

app.config.warnHandler = (msg, instance, trace) => {
  console.warn('Warning Message:', msg);
  console.warn('Component Instance:', instance);
  console.warn('Trace:', trace);
};

app.config.performance = true
app.config.compilerOptions.comments = true
app.config.compilerOptions.whitespace = 'preserve'

app.config.globalProperties.msg = 'hello from main.js'
app.config.idPrefix = 'vuejs-learning'
app.config.throwUnhandledErrorInProduction = true

app.mount('#app')


// app.onUnmount(() => {
//   console.log('App is about to unmount!');
// });

// setTimeout(() => {
//   app.unmount();
//   console.log('App has been unmounted!');
// }, 5000);



