<template>
  <div>
    <div class="google-map" ref="googleMap">
        <gmap-map :center="{lat: 1.38, lng: 103.8}"
            :zoom="12"
            style="height: 200px">
                <GmapMarker ref="myMarker"
            :position="google && new google.maps.LatLng(1.38, 103.8)" />
        </gmap-map>
        
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
