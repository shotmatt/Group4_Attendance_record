<template>
  <div class="home">
    <Attendance msg="Welcome to Your Vue.js App"/>
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
