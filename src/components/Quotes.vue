<template>
  <section class="section-outer section-quotes">
    <div class="section-inner">
      <div class="section-quotes__left">
        <h5>TESTIMONIALS</h5>
        <h3>Customers's quotes</h3>
        <div class="text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.</div>
      </div>

      <div class="section-quotes__right">
        <ul class="slider-quotes">
          <li class="slider-quotes__item">
            <div class="slider-quotes__item-text">
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
            </div>
            <div class="slider-quotes__item-pic">
              <img src="../assets/pic-1.jpg" alt="avatar">
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
  background: linear-gradient(180deg, #EAF0FF 0%, #F6F9FF 100%);

  .section-inner {
    display: flex;
    justify-content: space-between;
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 45%;

    h5 {
      margin-bottom: $base * 7;
    }

    h3 {
      font-weight: $fw-medium;
      margin-bottom: $base * 2;
    }

    .text {
      @include opensans;
      color: #a4abc8;
      font-size: $fs-sm;
      line-height: 1.9;
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
      border: 1px solid #d8e3fe;
      background-color: #fff;
      box-shadow: 0 $base+1 $base*13 #f3f5fa;

      &-text {
        color: #676f95;
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
        background-color: #fff;
        overflow: hidden;
        transform: translateX(-50%);
      }
    }
  }
}

</style>
