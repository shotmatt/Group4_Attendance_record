<template>
  <div class="homepage-view">
    <Attendance msg="Welcome to Your Vue.js App" />
    <header>
      <!-- <h1>Login</h1> -->
    </header>

    <main>
      <img src="../../assets/images/login_img.png" width=200 high=100>

      <div class="form">
        <form action="#">
          <label for="username"></label>
          <input type="text" id="username" name="username" v-model="username" placeholder="Username"><br>
          <label for="password"></label>
          <input type="password" id="password" name="password" v-model="password" placeholder="Password"><br>
          <a href="#" @click="Submit">Submit</a>
        </form>
      </div>

    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Attendance from '@/components/Attendance.vue'
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    Attendance
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    Submit() {
      const that = this
      axios.post('http://localhost:9000/Auth/record/auth/signin', {
        username: this.username,
        password: this.password
      }).then(function (response) {
        if (response.status == 200) {
          that.$router.push('/students')
        }
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    },
  }
}
</script>

<style>
@import "../../assets/css/screen.css";
</style>