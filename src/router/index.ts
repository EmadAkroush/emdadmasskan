import home from '../pages/home.vue'
import form from '../pages/form.vue'
import completeregister from '../pages/completeregister.vue'
import { component } from 'vue/types/umd'
import testsin from '../views/testsin.vue'
export default[
    {path: '/', component: home},
    {path: '/form' , component: form},
    {path: '/register' , component: completeregister},
    {path: '/test' , component: testsin}
]


