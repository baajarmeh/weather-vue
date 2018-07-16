<template>
  <ul class="forecast">
    <li class="day" v-for="city in cities">
      <div>{{ city.name }}</div>
      <div class="icon">
        <h4>{{ city.weather.weather_state_name }} - {{ Math.round(city.weather.the_temp) }}°</h4>
      </div>
      <strong>{{ Math.round(city.weather.max_temp) }}°</strong>
      <div>{{ Math.round(city.weather.min_temp) }}°</div>
    </li>
  </ul>
</template>

<script>
    export default {
        name: 'static-cities',
        mounted() {
            this.$store.dispatch('getStaticWeathers')
        },
        computed: {
            cities() {
                return this.$store.state.cities
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
    }
</style>
