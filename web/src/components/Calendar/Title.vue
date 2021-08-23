<template>
  <div
    v-for="event of eventsMap[timestamp.month][timestamp.day]"
    :key="event.id"
    class="title q-calendar__ellipsis"
  >
    {{ event.id }}
    <!-- {{ event.title + (event.time ? ' - ' + event.time : '') }}
    <q-tooltip>{{ event.details }}</q-tooltip> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import * as firestore from 'firebase/firestore';

type Timestamp = {
  date: string; // YYYY-MM-DD
  time: string; // HH:MM (optional)
  year: number; // YYYY
  month: number; // MM (Jan = 1, etc)
  day: number; // day of the month
  weekday: number; // week day
  hour: number; // 24-hr
  minute: number; // mm
  doy: number; // day of year
  workweek: number; // workweek number
  hasDay: boolean; // if this timestamp is supposed to have a date
  hasTime: boolean; // if this timestamp is supposed to have a time
  past: boolean; // if timestamp is in the past (based on `now` property)
  current: boolean; // if timestamp is current date (based on `now` property)
  future: boolean; // if timestamp is in the future (based on `now` property)
  disabled: boolean; // if timestamp is disabled
};

type EventsMap = {
  [month: number]: {
    [day: number]: {
      id: string;
      title: string;
    }[];
  };
};

export default defineComponent({
  props: {
    timestamp: {
      type: Object as PropType<Timestamp>,
      required: true,
    },
  },
  setup() {
    const events = [
      {
        id: 'id:ozelotjp',
        title: '@ozelotjp',
        date: firestore.Timestamp.now(),
        bgcolor: 'orange',
      },
    ];

    const eventsMap = computed(() => {
      const map: EventsMap = {
        8: {
          10: events,
        },
      };
      // events.forEach((event) => {
      //   if (map['aaa'] === undefined) {
      //     map['aaa'] = [];
      //   }
      //   map['aaa'].push(event);
      // });
      return map;
    });

    return { eventsMap };
  },
});
</script>
