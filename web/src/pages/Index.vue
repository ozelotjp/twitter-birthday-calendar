<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Twitter Birthday Calendar</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          フォロー・フォロワーの誕生日を調べることができます
        </q-card-section>
        <q-separator />
        <q-card-section>
          <btn-twitter-login text="試してみる（Twitterでログインします）" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';

import BtnTwitterLogin from 'src/components/Btn/BtnTwitterLogin.vue';
import { useStore } from 'src/store';

export default defineComponent({
  components: { BtnTwitterLogin },
  setup() {
    const store = useStore();
    const router = useRouter();

    watch(
      () => store.state.auth.status,
      (status) => {
        if (status === 'user') {
          void router.push('/home');
        }
      }
    );
  },
});
</script>
