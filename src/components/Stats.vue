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
  background-color: $color-secondary-60;

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
    background-color: $color-secondary-300;

    h2 {
      color: $color-white;
    }
  }

  &__right {
    color: $color-secondary-300;

    h2 {
      color: $color-secondary-300;
    }
  }

  &__icon {
    margin-bottom: $base * 6;
  }

  &__number {
    font-size: $fs-xl;
    font-weight: $fw-light;
    margin-bottom: $base * 7;
  }

  &__text {
    width: 42%;
    font-size: $fs-lg;
    line-height: 1.5;
  }
}

</style>
