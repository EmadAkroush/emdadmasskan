<script lang="ts" setup>
import axios from 'axios';
import {ref , reactive} from '@vue/composition-api';
import {  useCounterStores } from "../stores";  

let store = useCounterStores();
     function getad() {
        // Make a request for a user with a given ID

        axios.get('https://emserver.iran.liara.run/App/Ad')
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

</template>
<style>

</style>