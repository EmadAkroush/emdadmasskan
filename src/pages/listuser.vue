<script lang="ts" setup>
import axios from 'axios';
import {ref , reactive} from '@vue/composition-api';
let listuser = reactive([])
function getPosts(){
// Make a request for a user with a given ID

axios.get('https://emserver.iran.liara.run/App/User/AllUser')
  .then(function (response) {
    // handle success
    // posts.value = response.data;
    listuser = response.data; 
   console.log(response.data)
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

</template>
<style>


</style>