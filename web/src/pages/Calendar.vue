<template>
  <q-page>
    <q-calendar-month no-active-date :day-min-height="60" locale="ja">
      <template #day="{ scope: { timestamp } }">
        <template v-for="event in eventsMap[timestamp.date]" :key="event.id">
          <div class="title q-calendar__ellipsis">
            {{ event.title + (event.time ? ' - ' + event.time : '') }}
            <q-tooltip>{{ event.details }}</q-tooltip>
            {{ timestamp }}
          </div>
        </template>
      </template>
    </q-calendar-month>
  </q-page>
</template>

<script lang="ts">
import { computed } from 'vue';
import { QCalendarMonth } from '@quasar/quasar-ui-qcalendar';

export default {
  components: { QCalendarMonth },
  setup() {
    const events = [
      {
        title: '@ozelotjp',
        date: firestore.Timestamp.now(),
        bgcolor: 'orange',
      },
    ];

    const eventsMap = computed(() => {
      const map = {};
      events.forEach((event) => {
        if (map['aaa'] === undefined) {
          map['aaa'] = [];
        }
        map['aaa'].push(event);
      });
      return map;
    });

    return { eventsMap };
  },
};
</script>
