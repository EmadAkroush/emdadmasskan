
import home from '../pages/home.vue'
import form from '../pages/form.vue'
import completeregister from '../pages/completeregister.vue'
import { component } from 'vue/types/umd'
import listuser from '../pages/listuser.vue'
import listad from '../pages/listad.vue'
import listadsingle from '../pages/listadsingle.vue'
import listadsinglepublic from '../pages/listadsinglepublic.vue'
import listusersingle from '../pages/listusersingle.vue'
import { useCounterStores } from '../stores'

export default[
    {path: '/', component: home},
    {path: '/form' , component: form},
    {path: '/register' , component: completeregister},

    {path: '/listuser' , name: 'listuser' , component: listuser},
    {path: '/listusersingle', component:  listusersingle},
    {path: '/listad' , component: listad},
    {path: '/listadsingle' , component: listadsingle},
    {path: '/listadsinglepublic' , component: listadsinglepublic}
     
    
]


