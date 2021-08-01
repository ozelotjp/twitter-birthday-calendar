<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-dark">
      <q-toolbar>
        <!-- <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title>
          <q-avatar square>
            <img src="~assets/logo.svg" />
          </q-avatar>
          Twitter Birthday Calendar
        </q-toolbar-title>

        <btn-twitter-login showIcon />
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
    >
      <q-list padding> -->
    <!-- <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label> -->

    <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <!-- <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout> -->
</template>

<script lang="ts">
// import EssentialLink from 'components/EssentialLink.vue';

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev',
//   },
// ];

import { defineComponent } from 'vue';
import BtnTwitterLogin from 'components/Btn/BtnTwitterLogin.vue';

export default defineComponent({
  components: { BtnTwitterLogin },
  name: 'MainLayout',

  // components: {
  //   EssentialLink,
  // },

  setup() {
    // const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      // leftDrawerOpen,
      // toggleLeftDrawer() {
      //   leftDrawerOpen.value = !leftDrawerOpen.value;
      // },
      BtnTwitterLogin,
    };
  },
});
</script>
