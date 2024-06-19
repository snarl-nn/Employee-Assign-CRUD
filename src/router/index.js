import { createWebHistory, createRouter } from 'vue-router'

import CreateComponent from '@/components/CreateComponent.vue'
import EditComponent from '@/components/EditComponent.vue'
import ListComponent from '@/components/ListComponent.vue'
import WatchComponent from '@/components/WatchComponent.vue'

const routes = [
  { path: '/' ,name:'create',component: CreateComponent },
  { path: '/edit/:id',name:'edit', component: EditComponent },
  { path: '/view',name:'view', component: ListComponent },
  { path: '/data/:id',name:'data', component: WatchComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;