<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import {usecategoryStore} from '@/stores/category'
const categoryStore = usecategoryStore()
import {onMounted} from 'vue'
onMounted(()=>{
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>