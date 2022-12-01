<template>
  <div class="homepage-view">

    <main>
      <div class="form">
        <form action="#">
          <label for="Privlege" style="width:100px">Privlege</label>
          <input type="text" id="Privlege" name="Privlege" v-model="form.Privlege" placeholder="Privlege"><br>
          <label for="Name" style="width:100px">Name</label>
          <input type="text" id="Name" name="Name" v-model="form.Name" placeholder="Name"><br>
          <label for="Coarse" style="width:100px">Coarse</label>
          <input type="text" id="Coarse" name="Coarse" v-model="form.Coarse" placeholder="Coarse"><br>
          <label for="Password" style="width:100px">Password</label>
          <input type="password" id="Password" name="Password" v-model="form.Password" placeholder="Password"><br>
          <label for="Attendance" style="width:100px">Attendance</label>

          <select v-model="form.Attendance">
            <option>Attendance</option>
            <option>Absence</option>
          </select><br>
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
      form: {
        Privlege: '',
        Name: '',
        Coarse: '',
        Password: '',
        Attendance: '',
      },
      type: '',
      id: ''
    };
  },
  mounted() {
    console.log('type: ' + this.$route.query.type)
    this.type = this.$route.query.type
    if (this.type == 'edit') {
      this.id = this.$route.query.id
      this.getInfo()
    }

  },
  methods: {
    Submit() {
      const that = this
      if (this.type == 'add') {
        axios.post('http://localhost:9000/StudentIDs/save', this.form).then(function (response) {
          if (response.status == 200) {
            that.$router.push('/students')
          }
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        axios.post('http://localhost:9000/StudentIDs/update', this.form).then(function (response) {
          if (response.status == 200) {
            that.$router.push('/students')
          }
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      }

    },
    getInfo() {
      const that = this
      axios.get('http://localhost:9000/StudentIDs/getInfo?id=' + this.id, {

      }).then(function (response) {
        that.form = response.data;
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>
  
<style>
select {
  margin-bottom: 1rem;
  border-radius: 15px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 25%;
}

@import "../../assets/css/screen.css";
</style>