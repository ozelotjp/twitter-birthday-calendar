<template>
  <q-btn color="primary" no-caps @click="signInWithTwitter">
    {{ text }}
  </q-btn>
</template>

<script type="ts">
import { defineComponent } from 'vue'
import {getAuth, signInWithRedirect, TwitterAuthProvider} from 'firebase/auth'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: false,
      default: 'Twitterでログイン'
    },
  },
  setup(){
    const signInWithTwitter = async () => {
      const auth = getAuth();
      const provider = new TwitterAuthProvider();
      await signInWithRedirect(auth, provider);
    }

    return { signInWithTwitter }
  }
})
</script>
