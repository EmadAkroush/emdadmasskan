<script lang="ts" setup>
  import {  useCounterStores } from "../stores";
  import  useRouter    from "vue-router";
  import  useRoute    from "vue-router";
  let router = new useRouter()
  let store = useCounterStores();
 function logout(){
  localStorage.removeItem('login')
  localStorage.removeItem('listUserShow')
  localStorage.removeItem('listAdShow')
  localStorage.removeItem('creatAdShow')
  localStorage.removeItem('emdadmaskanManShow')
  store.creatAdShow = false
  store.listUserShow = false
  store.listAdShow = false
  store.emdadmaskanManShow = false
  store.logoutShow = true

  location.reload();
  router.push('/')
}

</script>
<template>

<div>
   <template >
        <v-btn color="primary"  @click="logout()" dark dense   active v-show="store.logoutShow">
         خروج از حساب کاربری
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>


      </template>
</div>

</template>
<style>


</style>
