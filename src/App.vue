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
                  <input type="text" class="search" v-model="city" @keyup.enter="fetchWeather" >

                </div>
                <WeatherSummary :weatherInfo="weatherInfo" :city="city"/>
              </div>
            </section>
            <section class="section section-right">
              <Highlights/>
            </section>
          </div>
          <div class="sections">
            <section class="section-bottom">
              <div
                  class="block-bottom"
              >
                <div class="block-bottom-inner">
                  <div class="block-bottom-pic pic-coords"></div>
                  <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Longitude: 2.3488
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Longitude measures distance east or west of the prime meridian.
                      </div>
                    </div>
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Latitude: 48.8534
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the
                        equator.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="section-bottom">
              <div
                  class="block-bottom"
              >
                <div class="block-bottom-inner">
                  <div class="block-bottom-pic pic-humidity"></div>
                  <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Humidity: 60 %
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state
                        of water, is generally invisible to the human eye.
                        <br/><br/>
                        The same amount of water vapor results in higher relative humidity in cool air than warm air.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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

const fetchWeather = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=fe2da118f14ae05bbd5e331700e08b20`)
      .then(response => response.json())
      .then(data => weatherInfo.value = data)


}
const city = ref('Paris')
const weatherInfo = ref(null)
onMounted(fetchWeather)
</script>

<style scoped>
</style>
