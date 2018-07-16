<template>
  <div id="app">
    <div class="weather-card">
      <Search ref="search"></Search>

      <div class="weather" v-if="store.appStatus.state === 'loaded'">
        <Current class="fadeIn"></Current>
        <Forecast class="fadeIn"></Forecast>
      </div>

      <div :class="store.appStatus.state" class="loading-or-error" v-else>
        <span>{{ store.appStatus.message }}</span>
        <div class="spinner" v-if="store.appStatus.state === 'loading'"></div>
      </div>

      <div class="weather">
        <StaticCities class="fadeIn"></StaticCities>
      </div>
    </div>
  </div>
</template>

<script>
    import Search from './components/Search'
    import Current from './components/Current'
    import Forecast from './components/Forecast'
    import StaticCities from './components/StaticCities';
    import moment from 'moment'
    import 'moment-timezone'

    export default {
        name: 'app',
        components: {
            Search,
            Current,
            Forecast,
            StaticCities
        },
        computed: {
            store() {
                return this.$store.state
            }
        },
        methods: {
            timestamp(time, zone) {
                return moment(time).tz(zone).format('h:mm A')
            }
        },
        mounted() {
            (localStorage.units) ? this.$store.dispatch('units', localStorage.getItem('units')): null
        }
    }
</script>

<style lang="scss">
    @import 'scss/_base.scss';
    @import 'scss/partials/_spinner.scss';
    #app {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        @media(max-width: 850px) {
            height: initial;
        }
    }
    
    .weather-card {
        background-color: #fbfbfb;
        border-radius: 3px;
        box-shadow: 0px 0px 150px 0px rgba(0, 0, 0, 0.5);
        color: #383842;
        display: flex;
        flex-direction: column;
        margin-top: 10vh;
        max-width: 800px;
        min-height: 510px;
        padding: 32px;
        position: relative;
        width: 100%;
        z-index: 1;
        >* {
            display: flex;
            flex-direction: column;
        }
        @media(max-width: 850px) {
            border-radius: 0;
            margin: 32px;
            max-width: 500px;
            padding: 16px;
        }
        @media(max-width: 550px) {
            box-shadow: none;
            margin: 0;
            max-width: 100%;
            min-height: 100vh;
        }
    }
    
    .weather {
        flex: 1;
        margin-top: 16px;
        padding-bottom: 16px;
        position: relative;
        @media(max-width: 850px) {
            padding-bottom: 48px;
        }
        .current,
        .forecast {
            flex: 1;
            @keyframes fadeIn {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
            svg {
                height: 100%;
                width: 100%;
            }
        }
    }
    
    .loading-or-error {
        align-items: center;
        flex: 1;
        justify-content: center;
        position: relative;
        .spinner {
            margin: -40px auto 0;
        }
        span {
            display: block;
            font-size: 16px;
            height: 16px;
            margin-top: -26px;
            position: absolute;
            text-align: center;
            top: 50%;
            width: 100%;
        }
        &.loading span {
            margin-top: 14px;
        }
    }
</style>