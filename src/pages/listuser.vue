<script lang="ts" setup>
import axios from 'axios';
import {ref , reactive} from '@vue/composition-api';
import {  useCounterStores } from "../stores";  

let store = useCounterStores();


let listuser = ref()
function getPosts(){
// Make a request for a user with a given ID

axios.get('https://emserver.iran.liara.run/App/User/AllUser')
  .then(function (response) {
    // handle success
    // posts.value = response.data;
   listuser.value = response.data; 
   console.log(listuser.value)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
}
getPosts()


</script>
<template>
 <v-card
    class="mx-auto"
    
    tile
  >
    <v-list dense>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >

       <router-link class="link" to="/listuser">
        <v-list-item
          v-for="(item, i) in listuser"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >{{item.User_Name}}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        
        </router-link>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<style>


</style>