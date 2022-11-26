<template>
    <div class="homepage-view">
            <!-- <Attendance msg="Welcome to Your Vue.js App" /> -->
            <header>
                <!-- <h1>Login</h1> -->
            </header>

            <main>
                <img src="../../assets/images/login_img.png" width=200 high=100 >

                <div class="form">
                    <form action="/action_page.php">
                        <label for="username"></label>
                        <input type="text" id="username" name="username" placeholder="please enter your username">
                        <label for="password"></label>
                        <input type="text" id="password" name="password" placeholder="please enter your password">
                        <input type="submit" value="Submit">
                    </form> 
                </div>
                
            </main>
 

            <!-- <div class="list">
                    <div class="users">

                        <input type="text" class="form-control" placeholder="please enter your username"
                            v-model="name">
                    </div>
                    <div class="password">
                        <input type="text" class="form-control" placeholder="please enter your password"
                            v-model="name" />
                    </div>

                    <div class="login">
                        <button class="btn btn-outline-secondary" type="button"
                                @click="searchName">
                            login
                        </button>
                    </div>
            </div> -->
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

