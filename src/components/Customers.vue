<template>
  <section class="section-outer section-customers">
    <div class="section-inner">
      <a href="#"><img src="../assets/logo-bitbucket.svg" alt="icon"></a>
      <a href="#"><img src="../assets/logo-apple.svg" alt="icon"></a>
      <a href="#"><img src="../assets/logo-facebook.svg" alt="icon"></a>
      <a href="#"><img src="../assets/logo-atlassian.svg" alt="icon"></a>
      <a href="#"><img src="../assets/logo-audi.svg" alt="icon"></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Customers"
}
</script>

<style scoped lang="scss">
.section-customers {
  .section-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: $padding-vertical-sm;
    padding-bottom: $padding-vertical-sm;

    a {
      opacity: .3;
      transition: $transition;

      &:hover {
        opacity: 1;
      }
    }

    /*&__items {
      display: flex;
      justify-content: space-between;

      path {
        fill: #D6DAE5;
        transition: $transition;

        &:hover {
          fill: #5982E7;
        }
      }
    }*/
  }
}
</style>
