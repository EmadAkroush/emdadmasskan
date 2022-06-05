
<script lang="ts">

export default {
  
   beforeRouteEnter (to, from, next) {
     let store = useCounterStores()
     let convert:any = localStorage.getItem('login')
    if(JSON.parse(convert).Meta.status == 200){
     
     next()
   }else{
     
   }
console.log(store.logindata.Meta.status)
   }

}

</script>

<script lang="ts"  setup >
import axios from 'axios';
import {ref , reactive} from '@vue/composition-api';
import {  useCounterStores } from "../stores";  
import  useRouter    from "vue-router";
import  useRoute    from "vue-router";





let store = useCounterStores();
const route = new useRoute();

let listuser = ref()
function getPosts(){
// Make a request for a user with a given ID

axios.get('https://emserver.iran.liara.run/App/User/AllUser')
  .then(function (response) {
    // handle success
    // posts.value = response.data;
   listuser.value = response.data; 
   console.log("list-User",listuser.value)
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
function getIDUser(i:number){
      store.userId = listuser.value[i]._id;
      
}

</script>
<template>
 <v-card
    class="mx-auto"
    
    tile
  >
    <v-list dense>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
       
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
             <router-link class="link" to="/listusersingle" > 
            <v-list-item-title @click="getIDUser(i)">{{item.User_Name}}</v-list-item-title>
             </router-link>
          </v-list-item-content>

        </v-list-item>
        
        </router-link>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<style>


</style>