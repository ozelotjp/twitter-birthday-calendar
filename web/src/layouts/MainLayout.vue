<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="toggleDrawer()"
          aria-label="Menu"
          icon="eva-menu"
          class="q-mr-sm"
        />

        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <q-icon name="eva-twitter" />
          <span class="q-ml-sm">Twitter Birthday Calendar</span>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <btn-twitter-login v-if="loginStatus === 'guest'" />
          <q-btn-dropdown round flat v-if="loginStatus === 'user'">
            <template #label>
              <q-avatar>
                <img :src="photoURL" />
              </q-avatar>
            </template>
            <q-list>
              <q-item clickable>
                <q-item-section>
                  <q-item-label>ログアウト</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item
            class="GNL__drawer-item"
            v-for="link in links"
            :key="link.text"
            :to="link.to"
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <div class="q-mt-md">
            <div class="flex flex-center q-gutter-xs">
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="Privacy"
                >プライバシーポリシー</a
              >
              <span> · </span>
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="Terms"
                >利用規約</a
              >
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed, ref } from 'vue';
import BtnTwitterLogin from 'src/components/Btn/BtnTwitterLogin.vue';
import { useStore } from 'src/store';

export default {
  components: { BtnTwitterLogin },
  setup() {
    const drawerOpen = ref(false);
    const toggleDrawer = () => {
      drawerOpen.value = !drawerOpen.value;
    };

    const links = computed(() => {
      if (loginStatus.value !== 'user') return [];
      return [
        { icon: 'eva-list', text: 'フォロー', to: 'follow' },
        { icon: 'eva-list', text: 'フォロワー', to: 'follower' },
        { icon: 'eva-settings', text: '設定', to: 'settings' },
      ];
    });

    const loginStatus = computed(() => {
      return useStore().state.auth.status;
    });

    const photoURL = computed(() => {
      if (loginStatus.value !== 'user') return null;
      return useStore().state.auth.user.providerData[0].photoURL;
    });

    return {
      drawerOpen,
      toggleDrawer,
      links,
      loginStatus,
      photoURL,
    };
  },
};
</script>

<style lang="sass" scoped>
.GNL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>
