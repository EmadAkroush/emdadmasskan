<script lang="ts" setup>
import axios from 'axios';
import {ref , reactive} from '@vue/composition-api';
import {  useCounterStores } from "../stores";  

let store = useCounterStores();
let singleAd = ref()
let adIdInside = ref(store.adId) 
     function getad() {
        // Make a request for a user with a given ID
        console.log(store.adId)
        axios.get(`https://emserver.iran.liara.run/App/Ad/${adIdInside.value}`)
            .then(function (response) {
                // handle success
                // posts.value = response.data;
                
                singleAd.value = response.data;
                console.log(singleAd.value)
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
</script>
<template>
<div>ghgfhfh</div>
</template>
<style>

</style>