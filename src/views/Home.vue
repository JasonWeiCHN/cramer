<template>
  <div class="cra-index-wrapper">
    <div class="cra-index-mark">
      <span class="cra-index-mark__currency"></span>
    </div>
    <div class="cra-index-cont">
      <div class="cra-index-cont__main">
        <div class="cra-index-cont__logo">Logo</div>
        <div class="cra-index-cont__txt">
          <p>Powerful</p>
          <p>liquidity</p>
          <p>machine</p>
        </div>
        <div class="cra-index-cont__lay">
          <p class="cra-index-cont__tit">Choosing The Right Path</p>
          <div @click="go('/deal')" class="cra-index-cont__arrow"></div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods:{
    go(path){
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
