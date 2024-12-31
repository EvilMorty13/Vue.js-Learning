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
  </div>
</template>

<script setup>
import DemoComponent from '@/components/DemoComponent.vue';
import { ref, reactive, isRef, unref, isReactive, isReadonly, isProxy} from 'vue';


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
</style>
