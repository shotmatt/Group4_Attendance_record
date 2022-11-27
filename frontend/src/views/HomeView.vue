<template>
  <div class="homepage-view">
          <Attendance msg="Welcome to Your Vue.js App" />
          <header>
              <!-- <h1>Login</h1> -->
          </header>

          <main>
              <img src="../../assets/images/login_img.png" width=200 high=100 >

              <div class="form">
                  <form action="#">
                      <label for="username"></label>
                      <input type="text" id="username" name="username" placeholder="Username"><br>
                      <label for="password"></label>
                      <input type="text" id="password" name="password" placeholder="Password"><br>
                      <a href="#">Submit</a>
                  </form> 
              </div>
          
          </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Attendance from '@/components/Attendance.vue'

export default {
  name: 'HomeView',
  components: {
    Attendance
  }
}
</script>

<style>

@import "../../assets/css/screen.css";

</style>