<template>
  <div class="background">
    <div class="maps">
      <!-- Localização -> Campo Limpo Paulista -->
      <div class="map-container">
        <GmapMap :center="{ lat: -23.206134, lng: -46.7864501 }" :zoom="10"
          style="width: 100%; height: 100%; border-radius: 15px;"
        >
          <GmapMarker
            :position="{ lat: -23.206134, lng: -46.7864501 }"
            :clickable="true"
            :draggable="false"
          />
        </GmapMap>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapPage'
}
</script>

<style scoped>
.background{
  background-color: #16181d;
}
.maps {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajuste conforme necessário */
}

.map-container {
  width: 80%; /* Ajuste conforme necessário */
  height: 60%; /* Ajuste conforme necessário */
  border: 2px solid #ccc;
  border-radius: 15px;
  overflow: hidden; /* Garante que o mapa não ultrapasse as bordas arredondadas */
}
</style>
