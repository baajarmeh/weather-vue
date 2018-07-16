<template>
  <div>
    <WeatherIconClearDay v-if="icon === 'c'"></WeatherIconClearDay>
    <WeatherIconClearNight v-if="icon === 'c'"></WeatherIconClearNight>
    <WeatherIconCloudy v-if="icon === 'hc'"></WeatherIconCloudy>
    <WeatherIconPartlyCloudyDay v-if="icon === 'lc'"></WeatherIconPartlyCloudyDay>
    <WeatherIconPartlyCloudyNight v-if="icon === 'lc'"></WeatherIconPartlyCloudyNight>
    <WeatherIconRain v-if="icon === 'lr'"></WeatherIconRain>
    <WeatherIconRain v-if="icon === 'hr'"></WeatherIconRain>
    <WeatherIconRain v-if="icon === 's'"></WeatherIconRain>
    <WeatherIconSleet v-if="icon === 'sl'"></WeatherIconSleet>
    <WeatherIconSnow v-if="icon === 'sn'"></WeatherIconSnow>
    <WeatherIconWind v-if="icon === 'h'"></WeatherIconWind>
    <WeatherIconWind v-if="icon === 't'"></WeatherIconWind>
  </div>
</template>

<script>
    import WeatherIconClearDay from '../assets/icons/weather/clear_day.svg'
    import WeatherIconClearNight from '../assets/icons/weather/clear_night.svg'
    import WeatherIconCloudy from '../assets/icons/weather/cloudy.svg'
    import WeatherIconPartlyCloudyDay from '../assets/icons/weather/partly_cloudy_day.svg'
    import WeatherIconPartlyCloudyNight from '../assets/icons/weather/partly_cloudy_night.svg'
    import WeatherIconRain from '../assets/icons/weather/rain.svg'
    import WeatherIconSleet from '../assets/icons/weather/sleet.svg'
    import WeatherIconSnow from '../assets/icons/weather/snow.svg'
    import WeatherIconWind from '../assets/icons/weather/wind.svg'

    export default {
        name: 'weatherIcon',
        props: ['icon'],
        components: {
            WeatherIconClearDay,
            WeatherIconClearNight,
            WeatherIconCloudy,
            WeatherIconPartlyCloudyDay,
            WeatherIconPartlyCloudyNight,
            WeatherIconRain,
            WeatherIconSleet,
            WeatherIconSnow,
            WeatherIconWind
        }
    }
</script>