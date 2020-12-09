<template>
  <a class="a-social" :href="url" target="_BLANK">
    <svg class="icon">
      <use
        v-bind="{ 'xlink:href': require('~/assets/iconsprite.svg') + sprite }"
      />
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    url: String,
    sprite: String,
  },
}
</script>

<style scoped>
.a-social {
  display: flex;
  transition: 0.2s ease-in-out;
  height: 50px;
}

.icon {
  height: 100%;
  width: 100%;
  filter: invert(1);
  display: block;
}

.a-social:hover {
  transform: rotate(10deg) scale(1.1);
  transition: 0.2s ease-in-out;
}
</style>
