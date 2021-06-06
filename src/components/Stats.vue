<template>
  <section class="section-outer section-stats">
    <h2 class="visually-hidden">Statistic</h2>

    <div class="section-stats__left">
      <div class="section-stats__icon">
        <img src="../assets/icon-blog-1.svg" alt="icon">
      </div>
      <div class="section-stats__number">89%</div>
      <div class="section-stats__text">Customers who have increased their productivity</div>
    </div>

    <div class="section-stats__right">
      <div class="section-stats__icon">
        <img src="../assets/icon-blog-2.svg" alt="icon">
      </div>
      <div class="section-stats__number">3123</div>
      <div class="section-stats__text">Users who have used our application</div></div>
  </section>
</template>

<script>
export default {
  name: "Stats"
}
</script>

<style scoped lang="scss">
.section-stats {
  @include quicksand;
  display: flex;
  padding: 0;
  background-color: $color-blue-60;

  &__left, &__right {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    padding: $base*16 $base*22;
  }

  &__left {
    align-items: flex-end;
    text-align: right;
    color: $color-white;
    background-color: $color-blue-300;

    h2 {
      color: $color-white;
    }
  }

  &__right {
    color: $color-blue-300;

    h2 {
      color: $color-blue-300;
    }
  }

  &__icon {
    margin-bottom: $base * 6;
  }

  &__number {
    font-size: $fs-xxl;
    font-weight: $fw-light;
    margin-bottom: $base * 7;
  }

  &__text {
    font-size: $fs-m;
    line-height: 1.5;

    @media (min-width: $breakpoint-lg-min) {
      width: 42%;
    }
  }
}

</style>
