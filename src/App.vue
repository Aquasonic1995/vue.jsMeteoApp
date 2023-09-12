<template>
  <body>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                <div class="city-inner">
                  <input type="text" class="search" v-model="city" @keyup.enter="fetchWeather" placeholder="Enter a city...">
                </div>
                <WeatherSummary :weatherInfo="weatherInfo"  :city="city"/>
              </div>
            </section>
            <section class="section section-right">
              <Highlights  :weatherInfo="weatherInfo" />
            </section>
          </div>
          <div class="sections" v-if="weatherInfo?.weather">
            <Coords :coord="weatherInfo.coord"/>
            <Humidity :humidity="weatherInfo.main.humidity"/>
          </div>
        </div>
      </div>
    </main>
  </div>
  </body>
</template>
<script setup lang="ts">
import '@/assets/styles/app.scss'
import WeatherSummary from "@/components/WeatherSummary.vue";
import Highlights from "@/components/Highlights.vue";
import {onMounted, ref} from "vue";
import Coords from "@/components/Coords.vue";
import Humidity from "@/components/Humidity.vue";

const fetchWeather = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=fe2da118f14ae05bbd5e331700e08b20`)
      .then(response => response.json())
      .then(data => weatherInfo.value = data)

}

export type weatherInfoType = any
const city = ref('Paris')
const weatherInfo: weatherInfoType = ref(null)
onMounted(fetchWeather)
</script>

<style scoped>
.info{
  min-width: 320px;
}
</style>
