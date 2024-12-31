<template>
  <div class="container">
    <div class="section">
      <h2>Actual Name:</h2>
      <p class="name">{{ fullname.firstName }} {{ fullname.lastName }}</p>
    </div>
    <div class="section">
      <h2>Using <code>toRefs</code>:</h2>
      <p class="name">{{ toRefsFullName.firstName }} {{ toRefsFullName.lastName }}</p>
    </div>
    <div class="section">
      <h2>Using <code>toRef</code>:</h2>
      <p class="name">{{ firstNameRef }} {{ lastNameRef }}</p>
    </div>
    <DemoComponent2 :fname="fullname" />
    <button @click="changeName" class="btn">Change Name</button>
  </div>
</template>

<script setup>
import { reactive, toRef, toRefs} from 'vue';
import DemoComponent2 from './DemoComponent2.vue';

const fullname = reactive({
  firstName: "Tony",
  lastName: "Starck"
});

function changeName() {
  fullname.firstName = "Iron";
  fullname.lastName = "Man";
}

const toRefsFullName = toRefs(fullname);


const firstNameRef = toRef(fullname, 'firstName');
const lastNameRef = toRef(fullname, 'lastName');



</script>

<style scoped>


.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.section {
  text-align: center;
}

h2 {
  margin-bottom: 10px;
  color: #2C3E50;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #16A085;
}


.btn {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #3498DB;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980B9;
}
</style>
