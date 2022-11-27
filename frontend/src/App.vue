<template>
  <nav> <!-- this is for links -->
    <!-- <router-link to="/">Attendance Register</router-link> -->
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
</template>


<style>
#app{
  background: linear-gradient(to left,#9c88ff,#3cabeb);
  position: fixed;
  width: 100%;
  height: 100%;
  
  text-align: center;
  color: black;
};

nav {
  padding: 30px;
}

a {
  font-weight: bold;
}
</style>

