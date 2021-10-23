<template>
  <img class="bitmoji" :src="getBitmoji" alt="my bitmoji">
</template>

<script>
import {getComicId, getAvatarId, randOutfit, buildRenderUrl, randTemplate, templates, getOutfits, randBrand, getBrands} from "libmoji";
  export default {
    name: "bitmoji",
    data: function () {
      return {
        hello: "Hi!"
      }
    },
    computed: {
      getBitmoji() {
        let comicId = getComicId(randTemplate(templates));
        let avatarId = getAvatarId("https://render.bitstrips.com/v2/cpanel/8968038-193774737_66-s5-v1.png?transparent=1&palette=1");
        let outfit = randOutfit(getOutfits(randBrand(getBrands("male"))));
        
        return buildRenderUrl(comicId,avatarId,1,2,outfit);
      }
    }
  }
</script>