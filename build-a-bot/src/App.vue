<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png" alt="">
          Build-A-Bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <!-- <SearchRobot /> -->
    <RobotBuilder/>
  </main>
</template>

<script>

import RobotBuilder from './build/RobotBuilder.vue';
// import SearchRobot from './search/SearchRobot.vue';

export default {
  name: 'App',
  components: {
    RobotBuilder,
  },
  // data() {
  //   return {
  //     userName: 'Jim',
  //   };
  // },
  // provide() {
  //   return { userName: this.userName };
  // },
};
</script>
<style>
body {
  background: linear-gradient(to bottom, #555,#999);
  background-attachment: fixed;
}
</style>
<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
main{
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
