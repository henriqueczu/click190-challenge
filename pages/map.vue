<template>
    <div>
    <!-- Localização -> Campo limpo Paulista -->
      <GmapMap
        :center="{ lat: -23.206134, lng: -46.7864501 }"
        :zoom="10"
        style="width: 100%; height: 800px; margin: 0 auto;"
      >
        <GmapMarker
          :position="{ lat: -23.206134, lng: -46.7864501 }"
          :clickable="true"
          :draggable="false"
        />
      </GmapMap>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MapPage'
  }
  </script>
  