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
        image="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
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
