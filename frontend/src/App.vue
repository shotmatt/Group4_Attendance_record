<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Login</router-link> -->
      <!-- <router-link to="/about">Register attendance</router-link> -->
    </nav>
    <router-view/>
  </div>
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