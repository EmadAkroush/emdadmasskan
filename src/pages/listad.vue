<script lang="ts" setup>
    import axios from 'axios';
    import {
        ref,
        reactive
    } from '@vue/composition-api';
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
    let deleteId = ref()
    getad()
    function deleteAd(i:number){
     deleteId.value = listad.value[i]._id 
     console.log(listad.value[i]._id);
      axios.delete(`https://emserver.iran.liara.run/App/Ad/${listad.value}`)
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
</script>
<template>

    <v-card class="mx-auto" tile>

        <v-list>
            <div v-for="(item, i) in listad" :key="i">
                <v-list-item>

                    <v-list-item-content>
                        <v-list-item-title>{{item.Title}}</v-list-item-title>
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