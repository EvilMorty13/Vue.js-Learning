<template>
  <div class="maincontainer">
    <div class="subcontainer">
      <button @click="incrementRefCount">Click Ref Button : {{ refCount }}</button>
      <p>Is a Ref? {{ isCountRef }}</p>
      <p>Count via unref: {{ unrefCount }}</p>
      <p>Is Reactive Object Proxy? {{ isReactiveObject }}</p>
      <p>Is Readonly Object Proxy? {{ isReadonlyObject }}</p>
      <p>Is Proxy Object? {{ isProxyObject }}</p>
    </div>

    <div class="subcontainer">
      <button @click="incrementReactiveCount">Click Reactive Button : {{ reactiveObj.recactiveCount }}</button>
      <p>Is a Ref? {{ isCountRef2 }}</p>
      <p>Count via unref: {{ unrefCount2 }}</p>
      <p>Is Reactive Object Proxy? {{ isReactiveObject2 }}</p>
      <p>Is Readonly Object Proxy? {{ isReadonlyObject2 }}</p>
      <p>Is Proxy Object? {{ isProxyObject2 }}</p>
    </div>

    <div class="subcontainer">
      <DemoComponent/>
    </div>

    <div class="subcontainer">
      <button @click="incrementComputedCount">Click Button : {{ countComputed }}</button>
      <p>Is Odd? {{ isOdd }}</p>
      <p class="celebrate"> {{ celebrateMessageWatch }}</p>
      <p class="celebrate"> {{ celebrateMessageWatchEffect }}</p>
    </div>

  </div>
</template>

<script setup>
import DemoComponent from '@/components/DemoComponent.vue';
import { ref, reactive, isRef, unref, isReactive, isReadonly, isProxy,computed,watch, watchEffect} from 'vue';


const refCount = ref(0);

const isCountRef = isRef(refCount);
const unrefCount = unref(refCount);
const isReactiveObject = isReactive(refCount);
const isReadonlyObject = isReadonly(refCount);
const isProxyObject = isProxy(refCount);

const incrementRefCount = () => {
  refCount.value++;
};


const reactiveObj = reactive({
  recactiveCount:0
})

const isCountRef2 = isRef(reactiveObj);
const unrefCount2 = unref(reactiveObj);
const isReactiveObject2 = isReactive(reactiveObj);
const isReadonlyObject2 = isReadonly(reactiveObj);
const isProxyObject2 = isProxy(reactiveObj);

const incrementReactiveCount = () => {
  reactiveObj.recactiveCount++;
};

const isOdd = computed(() => {
  return countComputed.value % 2 !== 0;
});



const countComputed = ref(0);
const celebrateMessageWatch = ref('');
const celebrateMessageWatchEffect = ref('');


const incrementComputedCount = () => {
  countComputed.value++;
};

// Watch: Reactively handles updates to countComputed for multiples of 10
watch(countComputed, (newCount) => {
  if (newCount % 10 === 0) {
    celebrateMessageWatch.value =
      "🎉 Congratulations! You reached a multiple of 10! (Using watch) 🎉";
    setTimeout(() => {
      celebrateMessageWatch.value = '';
    }, 2000);
  }
});

// WatchEffect: Similar functionality using implicit dependency tracking
watchEffect(() => {
  if (countComputed.value % 10 === 0) {
    celebrateMessageWatchEffect.value =
      "🎉 Congratulations! You reached a multiple of 10! (Using watchEffect) 🎉";
    setTimeout(() => {
      celebrateMessageWatchEffect.value = '';
    }, 2000);
  }
});
watchEffect()

</script>

<style scoped>
.maincontainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.subcontainer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;

  margin-top: 50px;
}

button {
  width: auto;
  height: auto;
  padding: 10px 10px;
  font-size: 1.2rem;
  border: none;
  background-color: #2C5F2D;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: #97BC62;
}

.celebrate {
  color: #e74c3c;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  animation: fadeIn 1s ease-in-out;
}
</style>
