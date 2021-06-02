<template>
  <section class="section-outer section-newsletter">
    <div class="section-inner">
      <div class="section-newsletter__left">
        <h2 class="section-newsletter__left-title">Sign up for newsletter</h2>
        <div class="section-newsletter__left-text">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.</div>
      </div>

      <div class="section-newsletter__right">
        <form class="form-newsletter">
          <label for="email" class="visually-hidden">Email: </label>
          <input id="email" class="input input--size-lg form-newsletter__input" type="email" placeholder="Email address" />
          <button class="btn btn--secondary btn--size-lg form-newsletter__btn">Save me</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Newsletter"
}
</script>

<style scoped lang="scss">
.section-newsletter {
  background-color: $color-primary-50;

  .section-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__left {
    flex-basis: 39%;

    &-title {
      @include quicksand();
      color: $color-secondary-900;
      margin-bottom: $base * 4;
      font-size: $fs-lg;
      font-weight: $fw-bold;
      text-transform: none;
    }

    &-text {
      font-size: $fs-md - 1;
      line-height: 1.9;
    }
  }

  &__right {
    text-align: end;

    .btn--size-lg {
      box-shadow: 0px 5px 15px rgba(116, 104, 255, 0.2);
    }
  }

  .form-newsletter {
    display: flex;

    &__input {
      flex-grow: 1;
    }

    &__btn {
      margin-left: $base * 3;
    }
  }
}
</style>
