<template>
  <div>
    <div class="google-map" ref="googleMap">
        <GmapMarker ref="myMarker"
    :position="google && new google.maps.LatLng(1.38, 103.8)" />
    </div>
  </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'
 
export default {
  computed: {
    google: gmapApi
  }
}
</script>

<style></style>
