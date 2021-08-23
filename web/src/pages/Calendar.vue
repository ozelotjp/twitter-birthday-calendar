<template>
  <q-page>
    <q-calendar-month no-active-date :day-min-height="60" locale="ja">
      <template #day="{ scope: { timestamp } }">
        <calendar-title :timestamp="timestamp" />
      </template>
    </q-calendar-month>
  </q-page>
</template>

<script lang="ts">
import { QCalendarMonth } from '@quasar/quasar-ui-qcalendar';

import CalendarTitle from 'src/components/Calendar/Title.vue';

export default {
  components: { QCalendarMonth, CalendarTitle },
};
</script>
