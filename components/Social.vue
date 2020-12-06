<template>
  <a class="a-social" :href="url" target="_BLANK">
    <img :alt="name" :src="image" />
  </a>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    url: String,
  },
}
</script>

<style scoped>
.a-social {
  display: flex;
  padding: 12px;
  transition: 0.2s ease-in-out;
}

img {
  height: 40px;
  width: 40px;
  filter: invert(1);
}

.a-social:hover {
  transform: rotate(10deg) scale(1.1);
  transition: 0.2s ease-in-out;
}
</style>
