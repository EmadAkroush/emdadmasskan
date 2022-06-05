

<script setup lang="ts">
import { ref } from 'vue-demi';
import signinpopup from '../views/signinpopup.vue';
import signinpopupsms from '../views/signinpopupsms.vue';
import {  useCounterStores } from "../stores";
import signout from '../views/signout.vue' 
import { storeToRefs } from 'pinia';

let userMenu = [
        {
          action: 'mdi-google-my-business',
          items: [ { title: 'List Item'},{ title: 'List Item' }  ],
          
        },
       
 ]
 

 
let store = useCounterStores();
  var drawer=ref(false);
  let listUser = ref()

   let convert1:any = localStorage.getItem('listUserShow')
   let convert2:any =  localStorage.getItem('listAdShow')
   let convert3:any =  localStorage.getItem('creatAdShow')
   let convert4:any =  localStorage.getItem('emdadmaskanManShow')
  store.listUserShow = JSON.parse(convert1);
  store.listAdShow = JSON.parse(convert2);
  store.creatAdShow = JSON.parse(convert3);
  store.emdadmaskanManShow = JSON.parse(convert4);
  listUser.value = store.listUserShow

      console.log("store.logindata", store.logindata)

</script>

<template>
   <div>
     <v-navigation-drawer  v-model="drawer" app class="grey lighten-3"
     right
     >
       
              <v-list >
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-exit-to-app
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title >  ثبت نام ورود </v-list-item-title>
          
        </v-list-item-content>

      </v-list-item>

        <v-divider inset></v-divider>


              <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-registered-trademark
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>

        <router-link class="link" to="/register"> 
          <v-list-item-title  >  تکمیل ثبت نام </v-list-item-title>
        </router-link>  
          
        </v-list-item-content>

      </v-list-item>

        <v-divider inset></v-divider>

     





        <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-home
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <router-link class="link" to="/">
          <v-list-item-title > صفحه اصلی </v-list-item-title>
          </router-link>
        </v-list-item-content>

      </v-list-item>

        <v-divider inset></v-divider>

       <v-list-group
        v-for="item in userMenu"
        v-show="store.emdadmaskanManShow"
        
        
        no-action
      >
        <template v-slot:activator>
           <v-list-item-icon>
          <v-icon color="indigo">
            mdi-google-my-business
          </v-icon>
        </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title > مسکنت من </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-information-variant
          </v-icon>
        </v-list-item-icon>
          <v-list-item-content>
              <router-link class="link" to="/userinfo"> 
            <v-list-item-title   >اطلاعات کاربری</v-list-item-title>
              </router-link>
          </v-list-item-content>
        </v-list-item>
          <v-list-item >
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-order-bool-ascending-variant
          </v-icon>
        </v-list-item-icon>
          <v-list-item-content>
            <router-link class="link" to="/userorder"> 
            <v-list-item-title   > سفارشات من </v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
         <v-list-item >
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-heart-outline
          </v-icon>
        </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title   > نشان شده ها </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>


        <v-divider inset></v-divider>
        
         <v-list-item>
        <v-list-item-icon >
         
            <v-icon color="indigo"> mdi-post </v-icon>
         
        </v-list-item-icon>

        <v-list-item-content>

          <v-list-item-title> وبلاگ  </v-list-item-title>
          
        </v-list-item-content>

      </v-list-item>

    

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon >
          <v-icon color="indigo">mdi-card-account-mail-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> تماس با ما  </v-list-item-title>
         
        </v-list-item-content>
      </v-list-item>


      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon color="indigo"> 
    
            <v-icon  color="indigo" >mdi-information-outline</v-icon>
       

        </v-list-item-icon>

        <v-list-item-content >
          <v-list-item-title>  درباره ما  </v-list-item-title>
          
        </v-list-item-content>
        
      </v-list-item>
       
      <v-divider inset></v-divider>
         <v-list-item v-show="store.listUserShow">
        <v-list-item-icon >
    
            <v-icon color="indigo">mdi-folder-plus</v-icon>
       

        </v-list-item-icon>

        <v-list-item-content>
         
          <router-link class="link" to="/form">
               <v-list-item-title>   ثبت اگهی   </v-list-item-title>
             </router-link>



        
          
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>
            <v-list-item v-show="store.listUserShow">
        <v-list-item-icon >
    
            <v-icon color="indigo">mdi-account-multiple</v-icon>
       

        </v-list-item-icon>

        <v-list-item-content>
         
          <router-link class="link" to="/listuser">

               <v-list-item-title >   لیست کاربران   </v-list-item-title>
               
           </router-link>



        
          
        </v-list-item-content>
        
      </v-list-item>
<v-divider inset></v-divider>
         
            <v-list-item v-show="store.listAdShow">
        <v-list-item-icon >
    
            <v-icon color="indigo">mdi-advertisements</v-icon>
       

        </v-list-item-icon>

        <v-list-item-content>
         
          <router-link class="link" to="/listad">

               <v-list-item-title>   لیست اگهی ها   </v-list-item-title>
               
           </router-link>



        
          
        </v-list-item-content>
      </v-list-item>


    </v-list>



    </v-navigation-drawer>
    <v-app-bar
     
      color="primary"
      dense
      dark
    >
      <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> امداد مسکن  </v-toolbar-title>
       
      <v-spacer></v-spacer>
       <signout></signout>
       <signinpopup></signinpopup>
       <signinpopupsms></signinpopupsms>
        <v-icon>mdi-magnify</v-icon>

   
     
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    
  </div>
</template>
<style>
   .link {
        text-decoration: none;
        color: black !important;
    }

</style>
