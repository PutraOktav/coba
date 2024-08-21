<template>
    <section id="features">
      <h2>Features</h2>
      <div class="features-list">
        <div class="feature-item">
          <h3>Aquatic</h3>
          <p>Detail about feature 1.</p>
        </div>
        <div class="feature-item">
          <h3>Gapura</h3>
          <p>Detail about feature 2.</p>
        </div>
        <div class="feature-item">
          <h3>Luar Sekolah</h3>
          <p>Detail about feature 3.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AppFeatures',
  }
  </script>
  
  <style scoped>
  .features-list {
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
  }
  .feature-item {
    text-align: center;
    width: 30%;
  }
  </style>
  