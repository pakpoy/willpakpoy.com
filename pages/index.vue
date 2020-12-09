<template>
  <div class="container">
    <h3>hey, i'm</h3>
    <h1>will pak poy</h1>
    <div class="socials">
      <social
        name="instagram"
        :image="require(`~/assets/icons/instagram.svg`)"
        url="https://instagram.com/willpakpoy"
      />
      <social
        name="twitter"
        :image="require(`~/assets/icons/twitter.svg`)"
        url="https://twitter.com/willpakpoy"
      />
      <social
        name="facebook"
        :image="require(`~/assets/icons/facebook.svg`)"
        url="https://facebook.com/willpakpoy"
      />
      <social
        name="spotify"
        :image="require(`~/assets/icons/spotify.svg`)"
        url="https://open.spotify.com/user/willeoso"
      />
      <social
        name="github"
        :image="require(`~/assets/icons/github.svg`)"
        url="https://github.com/willpakpoy"
      />
      <social
        name="snapchat"
        :image="require(`~/assets/icons/snapchat.svg`)"
        url="https://snapchat.com/add/willthe3rd1990"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  height: calc(100vh - 40px);
  width: calc(100vw - 40px);
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

h1,
h3 {
  margin: 0px;
  font-weight: 900;
}

h1 {
  font-size: 50px;
}

.socials {
  display: grid;
  padding-top: 6px;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
}
</style>
