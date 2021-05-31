<template>
  <section class="section-outer section-get-started">
    <div class="section-inner">
      <h5>PLAN YOUR LIFE</h5>
      <h2>Get <span>started</span> now</h2>

      <div class="text">
        Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
      </div>

      <div class="btn-group">
        <a href="#" class="btn btn--secondary btn--secondary-inverted">View pricing</a>
        <a href="#" class="btn btn--transparent btn--transparent-inverted">Read documentation</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GetStarted"
}
</script>

<style scoped lang="scss">
.section-get-started {
  position: relative;
  color: $color-white;
  text-align: center;
  background: linear-gradient(#6888ff, #5e80ff);

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("../assets/clouds-get-started.svg") no-repeat center;
    z-index: 1;
  }

  .section-inner {
    position: relative;
    z-index: 10;
  }

  h2, h5 {
    color: $color-white;
  }

  h2 {
    font-weight: $fw-light;

    span {
      font-weight: $fw-medium;
    }
  }

  .text {
    max-width: 69%;
    margin: 0 auto $base*12;
    font-size: $fs-md;
    line-height: 2;
  }

  .btn-group {
    .btn--transparent-inverted {
      font-weight: $fw-medium;
    }
  }
}
</style>
