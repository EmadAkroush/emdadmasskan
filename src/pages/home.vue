<script lang="ts" setup>
import ourtor from '../views/ourtor.vue'
import Header from '../views/header.vue';
import Titlebar from '../views/titlebar.vue';
import footerg from '../views/footerg.vue';
import {  useCounterStores } from "../stores";  
import { storeToRefs } from "pinia";

let store = useCounterStores();
console.log(store.userdata)
let ler = store.formnout
</script>
<template>
<div>

<Header>

</Header>
<v-p>last form </v-p>
  
   <footerg></footerg>
   </div>
</template>
<style>

</style>