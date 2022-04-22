<script setup lang="ts">
import { ref } from 'vue-demi';
import signinpopup from '../views/signinpopup.vue';
  var drawer=ref(false);

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
          <v-list-item-title>  ثبت نام ورود </v-list-item-title>
          
        </v-list-item-content>

      </v-list-item>

        <v-divider inset></v-divider>
        
         <v-list-item>
        <v-list-item-icon>
         
            <font-awesome-icon icon="fa-solid fa-blog" />
         
        </v-list-item-icon>

        <v-list-item-content>

          <v-list-item-title> وبلاگ  </v-list-item-title>
          
        </v-list-item-content>

      </v-list-item>

    

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
           <font-awesome-icon icon="fa-solid fa-address-card" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> تماس با ما  </v-list-item-title>
         
        </v-list-item-content>
      </v-list-item>


      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
    
            <font-awesome-icon icon="fa-solid fa-circle-info" />
       

        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>  درباره ما  </v-list-item-title>
          
        </v-list-item-content>
      </v-list-item>
       
         <v-list-item>
        <v-list-item-icon>
    
            <font-awesome-icon icon="fa-solid fa-circle-info" />
       

        </v-list-item-icon>

        <v-list-item-content>
         
          <router-link class="link" to="/form">
               <v-list-item-title>   ثبت اگهی   </v-list-item-title>
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

       <signinpopup></signinpopup>

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
