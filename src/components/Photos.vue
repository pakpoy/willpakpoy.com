<template>
  <div class="wrap-center">
      <Transition mode="out-in">
      <div class="show-password" v-if="!showFrame">
        <h1>Will's Perpetual<br>Camera Roll</h1>
        <p class="html-tag">enter password to continue</p>
        <input type="password" v-model="decryptionKey" @keyup.enter="decrypt()">
      </div>
      <div class="show-photos" v-else-if="showFrame">
        <p class="html-tag">You're in!.</p>
      </div></Transition>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";

export default {
  name: "Photos",
  data: function () {
    return {
      showFrame: false,
      decryptionKey: ""
    }
  },

  methods: {
    async decrypt() {
      try {
        const cipher = "U2FsdGVkX18tySTBrdI90SLbaDiWD4L8OKD2+E5+LKfT9w2N0E3+/nW1RH15GJbWEg8WcUXEkIUGuuB7q8CojQiehycENl+fQ+tjMsEX75M="
        var bytes  = CryptoJS.AES.decrypt(cipher, this.decryptionKey);
        var decrypted = bytes.toString(CryptoJS.enc.Utf8);
        console.log(decrypted)

        if (decrypted === "") {
          alert("incorrect password")
        } else {
          this.showFrame = true;
          setTimeout(function() {
            window.location = decrypted;
          }, 1000);
        }
      } catch {
        alert("incorrect password")
      }
      
    }
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}

.html-tag {
  opacity: 0.5;
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace
}

h1 {
  display: block;
  letter-spacing: -0.055em;
  line-height: 0.9em;
  text-index: 0.03em;
  font-size: 2.8em;
}

html, body {
  height: 100%;
  margin: 0px;
}
.wrap-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 10%;
}

input {
  width: 100%;
  background-color: transparent;
  border: 1px solid #dddddd50;
  padding: 1.1em;
  border-radius: 0.8em;
  color: #ffffff;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>