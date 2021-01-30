<template>
  <div class="container">
    <h2>hey, i'm<br /><span>will pak poy</span></h2>
    <div class="socials">
      <social
        name="instagram"
        :image="require(`~/assets/icons/instagram.svg`)"
        sprite="#instagram"
        url="https://instagram.com/willpakpoy"
      />
      <social
        name="twitter"
        :image="require(`~/assets/icons/twitter.svg`)"
        sprite="#twitter"
        url="https://twitter.com/willpakpoy"
      />
      <social
        name="facebook"
        :image="require(`~/assets/icons/facebook.svg`)"
        sprite="#facebook"
        url="https://facebook.com/william.pakpoy"
      />
      <social
        name="spotify"
        :image="require(`~/assets/icons/spotify.svg`)"
        sprite="#spotify"
        url="https://open.spotify.com/user/willeoso"
      />
      <social
        name="github"
        :image="require(`~/assets/icons/github.svg`)"
        sprite="#github"
        url="https://github.com/willpakpoy"
      />
      <social
        name="snapchat"
        :image="require(`~/assets/icons/snapchat.svg`)"
        sprite="#snapchat"
        url="https://snapchat.com/add/willthe3rd1990"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    135deg,
    rgba(54, 76, 119, 1) 0%,
    rgba(0, 0, 36, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;

  color: #ffffff;
  font-family: Poppins;
}

.container {
  max-width: 325px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h2 {
  margin: 0px;
  text-align: center;
  span {
    font-size: 50px;
  }
}

.socials {
  display: grid;
  padding-top: 6px;
  grid-template-columns: repeat(6, 1fr);
  max-height: 42px;
  grid-gap: 16px;
}
</style>
