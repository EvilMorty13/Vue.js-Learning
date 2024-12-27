import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useBlogStore = defineStore('blog', () => {
  const blog = reactive([
    {
      id: 1,
      title: 'Introduction to Vue.js',
      content: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, and it focuses on the view layer. Vue is easy to integrate with other libraries and frameworks, making it a great choice for both simple and complex applications.',
    },
    {
      id: 2,
      title: 'Understanding Reactivity in Vue',
      content: 'Reactivity is the core concept in Vue.js. When data changes, the view is automatically updated to reflect the new data. This reactivity system is efficient and optimized, allowing for smooth and responsive applications. In Vue, reactivity can be achieved through reactive objects, refs, and computed properties.',
    },
    {
      id: 3,
      title: 'Vue Router: Navigating Between Pages',
      content: 'Vue Router is the official router for Vue.js. It enables navigation between views or pages in a Vue application, allowing developers to create single-page applications with smooth transitions. Vue Router uses a declarative routing system, which helps manage URLs and provides features such as nested routes, lazy loading, and dynamic routing.',
    },
    {
      id: 4,
      title: 'Building a Vue.js Todo App',
      content: 'In this tutorial, we will build a simple Todo app using Vue.js. The app will allow users to add, edit, and remove tasks. We will also cover how to use Vue’s reactivity system to update the task list in real-time, and how to persist data using local storage. This will be a hands-on example of building a practical Vue application.',
    },
  ]);

  return {
    blog,
  };
});
