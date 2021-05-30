<template>
  <section class="section-outer section-features">
    <div class="section-inner">
      <h5 class="ta-с">ABOUT US</h5>
      <h4 class="ta-с">Read about our app</h4>

      <ul class="features-list ta-с">
        <li class="features-list__item">
          <div class="features-list__item-icon">
            <img src="../assets/icon-features-home.svg" alt="icon">
          </div>
          <div class="features-list__item-title">Overview</div>
          <div class="features-list__item-text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</div>
        </li>
        <li class="features-list__item">
          <div class="features-list__item-icon">
            <img src="../assets/icon-features-files.svg" alt="icon">
          </div>
          <div class="features-list__item-title">Files</div>
          <div class="features-list__item-text">No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.</div>
        </li>
        <li class="features-list__item">
          <div class="features-list__item-icon">
            <img src="../assets/icon-features-chats.svg" alt="icon">
          </div>
          <div class="features-list__item-title">Meeting chats</div>
          <div class="features-list__item-text">Vim ne tacimates neglegentur. Erat diceret omittam at est.</div>
        </li>
        <li class="features-list__item">
          <div class="features-list__item-icon">
            <img src="../assets/icon-features-events.svg" alt="icon">
          </div>
          <div class="features-list__item-title">Save events</div>
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

  h5 {
    margin-bottom: $base * 5;
  }

  h4 {
    margin-bottom: $base * 23;
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
      font-size: $fs-sm;
      font-weight: $fw-medium;
      color: $color-third;

      &::before, &::after {
        content: '';
        display: block;
        width: $base * 4;
        height: 1px;
        background-color: #dae4fe;
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
      width: 28px;
      top: 130px;
      right: 120%;
      background-color: #dae4fe;
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
      background-color: #f1f5ff;
    }

    &-title {
      @include opensans;
      font-weight: $fw-bold;
      color: #4074f8;
      margin-bottom: $base * 6;

    }

    &-text {
      @include opensans;
      font-size: $fs-sm;
      font-weight: $fw-medium;
      color: $color-third;
      line-height: 2;
    }
  }
}
</style>
