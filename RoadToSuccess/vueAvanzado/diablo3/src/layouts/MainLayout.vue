<template>
  <div class="container">

    <HeaderBar/>

    <router-view/>

    <FooterBar/>

  </div>
</template>

<script>

export default {

  name: 'MainLayout',

  components: {
  }

}
</script>
