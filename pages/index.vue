<template>
  <div class="container">
    <h3>hey, i'm</h3>
    <h1>will pak poy</h1>
    <div class="socials">
      <Social
        name="instagram"
        image="https://www.flaticon.com/svg/static/icons/svg/1384/1384031.svg"
        url="https://instagram.com/willpakpoy"
      />
      <Social
        name="twitter"
        image="https://www.flaticon.com/svg/static/icons/svg/733/733635.svg"
        url="https://twitter.com/willpakpoy"
      />
      <Social
        name="facebook"
        image="https://www.flaticon.com/svg/static/icons/svg/1384/1384005.svg"
        url="https://facebook.com/willpakpoy"
      />
      <Social
        name="spotify"
        image="https://www.flaticon.com/svg/static/icons/svg/2111/2111685.svg"
        url="https://open.spotify.com/user/willeoso"
      />
      <Social
        name="github"
        image="https://www.flaticon.com/svg/static/icons/svg/2111/2111425.svg"
        url="https://github.com/willpakpoy"
      />
      <Social
        name="github"
        image="https://www.flaticon.com/svg/static/icons/svg/733/733627.svg"
        url="https://snapchat.com/add/willthe3rd1990"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  background-color: #002147;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;

  color: #ffffff;
  font-family: Poppins;
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
  display: flex;
}
</style>
