<template>
  <ul class="forecast">
    <li class="day" v-for="day in daily">
      <div>{{ dayOfWeek(day.created * 1000, store.weather.timezone) }}</div>
      <div class="icon">
        <WeatherIcon :icon="day.weather_state_abbr"></WeatherIcon>
      </div>
      <strong>{{ Math.round(day.max_temp) }}°</strong>
      <div>{{ Math.round(day.min_temp) }}°</div>
    </li>
  </ul>
</template>

<script>
  import WeatherIcon from './WeatherIcon'
  import moment from 'moment'
  import 'moment-timezone'

  export default {
    name: 'forecast',
    components: {
      WeatherIcon
    },
    computed: {
      store () {
        return this.$store.state
      },
      daily () {
        return this.$store.state.weather.consolidated_weather
      }
    },
    methods: {
      dayOfWeek (time, zone) {
        return moment(time).tz(zone).format('ddd')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../scss/_vars.scss';

.forecast {
  border-top: 1px solid #dedede;
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  padding-top: 16px;

  li {
    flex: 1;
  }

  .day {
    color: $accent;
    font-size: 16px;
    line-height: 1.6;
    text-align: center;

    @media(max-width: 850px) {
      flex: 0 0 25%;
      margin-top: 8px;
    }
  }

  .icon {
    height: 32px;
    margin: 0 auto;
    width: 32px;
  }
}
</style>
