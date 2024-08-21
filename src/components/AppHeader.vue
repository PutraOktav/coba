<template>
  <header>
    <nav>
      <h1>My Landing Page</h1>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}
nav ul {
  display: flex;
  list-style: none;
}
nav ul li {
  margin: 0 10px;
}
nav ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
