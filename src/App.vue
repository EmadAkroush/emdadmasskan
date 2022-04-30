<script setup lang="ts">
import titlebar from './views/titlebar.vue'
import ourtor from './views/ourtor.vue'
import  useRouter   from 'vue-router';

</script>

<template>
  <v-app>
<v-main>
  <titlebar>
    
  </titlebar>
   
<router-view></router-view>
    
   

  </v-main>

 
  </v-app>
  
</template>

<style>

/* width */
::-webkit-scrollbar {
  width: 10px;
  
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:  #1976d2 ; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #311B92; 
}


</style>
