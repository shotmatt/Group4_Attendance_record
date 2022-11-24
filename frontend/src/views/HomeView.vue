<template>
    <div class="home">
        <Attendance msg="Welcome to Your Vue.js App" />
        <div class="img">
            <img src="https://ucarecdn.com/68f429ed-29ee-4015-b99d-764e405cf1ae/-/resize/601x326/" width=200 high=100 >
        </div>
        <div class="list">
            <div class="col-md-8">
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
            </div>
        </div>
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
    .img {
        position: absolute;
        left:525px;
        top: 150px;
    }
    .home{
        color:black;
        background: linear-gradient(to left,#9c88ff,#3cabeb);
        position:fixed;
        height:100%;
        width:100%;
    }
    .list {
        position: absolute;
        left: 550px;
        top: 270px;
    }
    .login {
        position: absolute;
        left:35px;
    }

</style>
