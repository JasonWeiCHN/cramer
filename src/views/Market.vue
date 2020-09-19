<template>
  <div class="cra-market-wrapper">
    <div class="cra-deal-title">
      <div class="cra-deal-title__main">
        <ul class="cra-deal-titleTab">
          <li class="cra-deal-titleTab__item">About</li>
          <li class="cra-deal-titleTab__item">Preview</li>
          <li class="cra-deal-titleTab__item">My Dividend</li>
          <li class="cra-deal-titleTab__item">Connect Wallet</li>
          <li class="cra-deal-titleTab__user"></li>
        </ul>
      </div>
    </div>
    <div class="cra-market-cont">
      <div class="cra-market-cont__main">
        <div class="cra-marketTitle">
          <div class="cra-marketTitle__left">
            <p class="cra-marketTitle__logo">logo</p>
            <p class="cra-marketTitle__price"><span>$.</span>150<span>.95</span></p>
            <p class="cra-marketTitle__range">+8.64%</p>
          </div>
          <div class="cra-marketTitle__main">
            <p>Stock-Chameleon</p>
          </div>
          <div class="cra-marketTitle__right">
            <p class="cra-marketTitle__txt">24H Vol:</p>
            <p class="cra-marketTitle__txt">$ 886BT USD</p>
          </div>
        </div>
        <div class="cra-marketChart" style="background: #ffffff;"></div>
        <div class="cra-marketOperation">
          <i class="cra-marketOperation__icon-eth"></i>
          <p class="cra-marketOperation__price"><span>v.</span>298.95</p>
          <i class="cra-marketOperation__icon-cra"></i>
          <p class="cra-marketOperation__price"><span>v.</span>298.95</p>
          <div class="cra-marketOperation__main">
            <div class="cra-marketOperation__input" style="display: none;">
              <input type="text" value="100.00">
            </div>
            <div class="cra-marketOperation__btn">Exchange now</div>
            <!--                    <div class="cra-marketOperation__btn">Sell</div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Market"
}
</script>

<style scoped>

</style>
