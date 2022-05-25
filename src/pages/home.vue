

<script lang="ts" setup>
import ourtor from '../views/ourtor.vue'
import Header from '../views/header.vue';
import Titlebar from '../views/titlebar.vue';
import footerg from '../views/footerg.vue';
import addata from '../views/addata.vue';
import axios from 'axios';
import {  useCounterStores } from "../stores";  
import { storeToRefs } from "pinia";
import {ref,reactive} from '@vue/composition-api';




let store = useCounterStores();

let ler = store.formnout





let adData:any = ref()
  function getad() {
        // Make a request for a user with a given ID

        axios.get('https://emserver.iran.liara.run/App/Ad')
            .then(function (response) {
                // handle success
                // posts.value = response.data;
                adData.value = response.data
                
                store.adData = response.data
                console.log("mydata",response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }
    getad()

function test(){
   console.log("test-cash",store.logindata)
}
  

</script>
<template>
<div>

<Header>

</Header>
    
    <addata :adData="adData"></addata>
   
   <footerg></footerg>
   
   </div>

</template>
<style>

</style>