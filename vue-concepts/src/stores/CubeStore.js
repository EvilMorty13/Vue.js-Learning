import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useCubeStore = defineStore('cube', () => {
  const cube = reactive({
    length: 10,
    width: 20,
    height: 30,
  });

  const increaseLength = () => {
    cube.length++;
  };

  const increaseWidth = () => {
    cube.width++;
  };

  const increaseHeight = () => {
    cube.height++;
  };

  return {
    cube,
    increaseLength,
    increaseWidth,
    increaseHeight,
  };
});
