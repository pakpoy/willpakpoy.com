<template>
  <img class="bitmoji" :src="getBitmoji">
</template>

<script>
import libmoji from "libmoji";
  export default {
    name: "bitmoji",
    data: function () {
      return {
        hello: "Hi!"
      }
    },
    computed: {
      getBitmoji() {
        let comicId = libmoji.getComicId(libmoji.randTemplate(libmoji.templates));
        let avatarId = libmoji.getAvatarId("https://render.bitstrips.com/v2/cpanel/8968038-193774737_66-s5-v1.png?transparent=1&palette=1");
        let outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands("male"))));
        
        return libmoji.buildRenderUrl(comicId,avatarId,1,2,outfit);
      }
    }
  }
</script>