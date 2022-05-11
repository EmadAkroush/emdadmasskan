import home from '../pages/home.vue'
import form from '../pages/form.vue'
import completeregister from '../pages/completeregister.vue'
import { component } from 'vue/types/umd'

import listuser from '../pages/listuser.vue'
import listad from '../pages/listad.vue'
import listadsingle from '../pages/listadsingle.vue'
export default[
    {path: '/', component: home},
    {path: '/form' , component: form},
    {path: '/register' , component: completeregister},

    {path: '/listuser' , component: listuser},
    {path: '/listad' , component: listad},
    {path: '/listadsingle' , component: listadsingle},
    
    
]


