<template>
  <section class="section-outer section-customers">
    <h2 class="visually-hidden">CUSTOMERS</h2>

    <div class="section-inner vertical-indent vertical-indent--s">
      <a href="#" aria-label="BitBucket"><img src="../assets/logo-bitbucket.svg" alt="icon"></a>
      <a href="#" aria-label="Apple"><img src="../assets/logo-apple.svg" alt="icon"></a>
      <a href="#" aria-label="Facebook"><img src="../assets/logo-facebook.svg" alt="icon"></a>
      <a href="#" aria-label="Atlassian"><img src="../assets/logo-atlassian.svg" alt="icon"></a>
      <a href="#" aria-label="Audi"><img src="../assets/logo-audi.svg" alt="icon"></a>
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
    flex-wrap: wrap;

    a {
      opacity: .3;
      transition: $transition;

      &:hover {
        opacity: 1;
      }
    }

    @media (max-width: $breakpoint-sm-max) {
      justify-content: center;
      gap: $base * 5;
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
