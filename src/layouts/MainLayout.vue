<template>
  <div class="container">
    <HeaderBar />

    <router-view />

    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeadeBar/Index.vue'
import FooterBar from '@/components/FooterBar/index'
export default {

  name: 'MainLayout',

  components: {
    HeaderBar,
    FooterBar
  }

}
</script>
