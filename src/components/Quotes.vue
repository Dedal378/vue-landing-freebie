<template>
  <section class="section-outer section-quotes">
    <div class="section-inner vertical-indent vertical-indent--m">
      <div class="section-quotes__left">
        <h2>TESTIMONIALS</h2>
        <div class="section-subtitle">Customers's quotes</div>
        <div class="text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.</div>
      </div>

      <div class="section-quotes__right">
        <ul class="slider-quotes">
          <li class="slider-quotes__item">
            <div class="slider-quotes__item-text">
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
            </div>
            <div class="slider-quotes__item-pic">
              <img src="../assets/pic-1.jpg" alt="avatar" width="62" height="63">
            </div>
          </li>
        </ul>

        <ul class="dots">
          <li class="dots__item dots__item--active"></li>
          <li class="dots__item"></li>
          <li class="dots__item"></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Quotes"
}
</script>

<style scoped lang="scss">
.section-quotes {
  background: linear-gradient(180deg, $color-blue-50 0%, $color-gray-50 100%);

  .section-inner {
    display: flex;
    justify-content: space-between;

    @media (max-width: $breakpoint-xs-max) {
      flex-direction: column;
      padding-bottom: $base * 20;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 45%;

    h2 {
      margin-bottom: $base * 7;
    }

    .section-subtitle {
      font-size: $fs-xl;
      font-weight: $fw-medium;
      margin-bottom: $base * 2;
    }

    .text {
      @include opensans;
      color: $color-gray-200;
      font-size: $fs-xs;
      line-height: 1.9;
    }

    @media (max-width: $breakpoint-xs-max) {
      margin-bottom: $base * 7;
      align-items: center;

      h2 {
        margin-bottom: $base * 4;
      }

      .section-subtitle {
        margin-bottom: $base * 4;
      }
    }
  }

  &__right {
    flex-basis: 50%;
  }

  .slider-quotes {
    @include list-null();
    margin-bottom: $base * 18;

    &__item {
      position: relative;
      padding: $base*10 $base*17 $base*15;
      border: 1px solid $color-gray-50;
      background-color: $color-white;
      box-shadow: 0 $base+1 $base*13 $color-gray-50;

      &-text {
        color: $color-gray-400;
        font-size: 14px;
        letter-spacing: 0.03em;
        line-height: 1.9;
      }

      &-pic {
        position: absolute;
        top: 80%;
        left: 50%;
        width: $base * 16;
        height: $base * 16;
        border-radius: 100%;
        background-color: $color-white;
        overflow: hidden;
        transform: translateX(-50%);
      }
    }

    @media (max-width: $breakpoint-xs-max) {
      &__item {
        padding: $base*7 $base*5 $base*15;
      }
    }
  }
}

</style>
