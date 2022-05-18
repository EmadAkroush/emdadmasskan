<script lang="ts" setup>
    import  useRouter    from "vue-router";
    import  useRoute    from "vue-router";
    import axios from 'axios';
    import {  useCounterStores } from "../stores";  
    import {ref,reactive} from '@vue/composition-api';
    
    let store = useCounterStores();
    let listad = ref()
                                 
    function getad() {
        // Make a request for a user with a given ID

        axios.get('https://emserver.iran.liara.run/App/Ad')
            .then(function (response) {
                // handle success
                // posts.value = response.data;
                
                listad.value = response.data;
                
                console.log(listad.value)
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
    let deleteId = ref()
    
    
    function deleteAd(i:number){
     
     deleteId.value = listad.value[i]._id;
     console.log(store.adId);
      axios.delete(`https://emserver.iran.liara.run/App/Ad/${deleteId.value}`)
            .then(function (response) {
                // handle success
                // posts.value = response.data;
                
                console.log(deleteId.value)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }
    
function getID(i:number){
      store.adId = listad.value[i]._id;
      
}
</script>
<template>

    <v-card class="mx-auto" tile>

        <v-list>
            <div v-for="(item, i) in listad" :key="i">
                <v-list-item>

                    <v-list-item-content>
                    <router-link class="link" to="/listadsingle" >   <v-list-item-title  @click="getID(i)">{{item.Title}}</v-list-item-title>  </router-link> 
                        <v-row>
                            <v-col>
                                <v-list-item-subtitle>دسته بندی : {{item.Category}}</v-list-item-subtitle>
                            </v-col>

                            <v-col>
                                <v-list-item-subtitle> نام اپراتور </v-list-item-subtitle>
                            </v-col>
                            <v-col>
                                <v-list-item-subtitle>تاریخ ثبت : {{item.Created_at}}</v-list-item-subtitle>
                            </v-col>
                            <v-col>
                                <v-list-item-subtitle>
                                    <v-btn elevation="2" class="mx-4 my-1" @click="deleteAd(i)">حذف اگهی</v-btn>
                                </v-list-item-subtitle>
                            </v-col>
                        </v-row>
                    </v-list-item-content>

                </v-list-item>
                <v-divider inset></v-divider>
            </div>
        </v-list>

    </v-card>
</template>
<style>

</style>