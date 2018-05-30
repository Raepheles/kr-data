<template>
  <p class="white-center">Coming soon?</p>
</template>

<script>

export default {
  name: 'Artifacts'
}
</script>

<style scoped>
hr {
  border-color: white;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.heroes {
  color: white;
}
.heroIcon {
  border: 5px solid white;
  cursor: pointer;
  transition: 0.3s;
  width: 100px;
  margin: 2px;
}
.heroIcon:hover {
  border: 5px solid red;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.white-center {
  color: white;
  text-align: center;
}
</style>
