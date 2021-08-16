<template>
  <q-page>
    <q-calendar-month no-active-date :day-min-height="60" locale="ja">
      <template #day="{ scope: { timestamp } }">
        <template v-for="event in eventsMap[timestamp.date]" :key="event.id">
          <div class="title q-calendar__ellipsis">
            {{ event.title + (event.time ? ' - ' + event.time : '') }}
            <q-tooltip>{{ event.details }}</q-tooltip>
          </div>
        </template>
      </template>
    </q-calendar-month>
  </q-page>
</template>

<script lang="ts">
import { computed } from 'vue';
import {
  QCalendarMonth,
  parseDate,
  parseTimestamp,
} from '@quasar/quasar-ui-qcalendar';

export default {
  components: { QCalendarMonth },
  setup() {
    const events = [
      {
        title: '@ozelotjp',
        date: parseDate(new Date('2021-08-10'))?.date,
        bgcolor: 'orange',
      },
    ];

    const eventsMap = computed(() => {
      const map = {};
      events.forEach((event) => {
        const date: string = event.date ?? '';
        if (map[!!date ? date : 'null'] === undefined) {
          map[!!date ? date : 'null'] = [];
        }
        map[!!date ? date : 'null'].push(event);
      });
      return map;
    });

    return { eventsMap };
  },
};
</script>
