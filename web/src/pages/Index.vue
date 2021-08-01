<template>
  <q-page class="row items-center justify-evenly">
    <!-- <q-card class="text-center">
      <q-card-section>
        まずはTwitterでログインしてください
      </q-card-section>
      <q-card-section>
        <q-btn
          icon="eva-twitter"
          no-caps
        >
          Twitterでログイン
        </q-btn>
      </q-card-section>
    </q-card> -->
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
import BtnTwitterLogin from 'src/components/Btn/BtnTwitterLogin.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { BtnTwitterLogin },
});
</script>
