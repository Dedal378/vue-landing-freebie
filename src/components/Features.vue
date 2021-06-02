<template>
  <section class="section-outer section-features">
    <div class="section-inner">
      <h2 class="ta-с">ABOUT US</h2>
      <div class="ta-с section-subtitle">Read about our app</div>

      <ul class="features-list ta-с">
        <li class="features-list__item">
          <div class="features-list__item-icon">
            <img src="../assets/icon-features-home.svg" alt="icon">
          </div>
          <h3 class="features-list__item-title">Overview</h3>
          <div class="features-list__item-text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</div>
        </li>
        <li class="features-list__item">
          <div class="features-list__item-icon">
            <img src="../assets/icon-features-files.svg" alt="icon">
          </div>
          <h3 class="features-list__item-title">Files</h3>
          <div class="features-list__item-text">No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.</div>
        </li>
        <li class="features-list__item">
          <div class="features-list__item-icon">
            <img src="../assets/icon-features-chats.svg" alt="icon">
          </div>
          <h3 class="features-list__item-title">Meeting chats</h3>
          <div class="features-list__item-text">Vim ne tacimates neglegentur. Erat diceret omittam at est.</div>
        </li>
        <li class="features-list__item">
          <div class="features-list__item-icon">
            <img src="../assets/icon-features-events.svg" alt="icon">
          </div>
          <h3 class="features-list__item-title">Save events</h3>
          <div class="features-list__item-text">Nisl idque mel ea, nominati voluptatum.</div>
        </li>
      </ul>

      <div class="btns">
        <a href="#" class="btn btn--danger">Read more</a>
        <span class="btns__item-text">OR</span>
        <a href="#" class="btn btn--primary">Get started</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features"
}
</script>

<style scoped lang="scss">
.section-inner {
  padding-top: $base * 43;
  padding-bottom: $base * 43;
}

.section-features {
  background: 50% 40% no-repeat url("../../src/assets/clouds-features.svg");

  h2 {
    margin-bottom: $base * 5;
  }

  .section-subtitle {
    margin-bottom: $base * 23;
    font-size: $fs-m + 6;
    font-weight: $fw-medium;
  }

  .btns {
    display: flex;
    justify-content: center;
    margin: 0 auto;

    &__item-text {
      @include opensans;
      display: inline-flex;
      align-items: center;
      margin: 0 $base*4;
      font-size: $fs-xs;
      font-weight: $fw-medium;
      color: $color-gray-300;

      &::before, &::after {
        content: '';
        display: block;
        width: $base * 4;
        height: 1px;
        background-color: $color-gray-100;
      }

      &::before { margin-right: $base * 4; }
      &::after { margin-left: $base * 4; }
    }
  }
}

.features-list {
  display: flex;
  justify-content: space-around;
  @include list-null();
  margin: 0 0 $base*25;

  &__item {
    position: relative;
    flex-basis: 17%;

    &:not(:first-child)::before {
      position: absolute;
      content: '';
      height: 1px;
      width: $base * 7;
      top: $base * 32;
      right: 120%;
      background-color: $color-gray-100;
    }

    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $base * 17;
      height: $base * 17;
      margin: 0 auto;
      margin-bottom: $base * 8;
      border-radius: 100%;
      background-color: $color-gray-50;
    }

    &-title {
      @include opensans;
      font-size: $fs-s - 1;
      font-weight: $fw-bold;
      color: $color-blue-800;
      margin-bottom: $base * 6;

    }

    &-text {
      @include opensans;
      font-size: $fs-xs;
      font-weight: $fw-medium;
      color: $color-gray-300;
      line-height: 2;
    }
  }
}
</style>
