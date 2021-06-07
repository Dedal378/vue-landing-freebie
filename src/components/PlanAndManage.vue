<template>
  <section class="section-outer section-plan">
    <div class="section-inner vertical-indent vertical-indent--xl">
      <div class="section-plan__content">
        <img class="aside-image" src="../assets/illustration.png" alt="picture">

        <h2>DESKTOP AND MOBILE APP</h2>
        <div class="section-subtitle"><span>Plan</span> and <span>manage</span></div>

        <div class="text">
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.
        </div>

        <div class="btn-group">
          <a href="#" class="btn btn--secondary">
            View video
            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2.73354C6.66667 3.11844 6.66667 4.08069 6 4.46559L1.5 7.06367C0.833333 7.44857 0 6.96744 0 6.19764V1.00149C0 0.231691 0.833333 -0.249434 1.5 0.135467L6 2.73354Z" fill="white"/>
            </svg>
          </a>
          <a href="#" class="btn btn--transparent">See features</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlanAndManage"
}
</script>

<style scoped lang="scss">
.section-plan {
  position: relative;
  background-color: $color-gray-50;
  overflow: hidden;

  &__content {
    width: 50%;

    h2 {
      margin-bottom: $base * 7;
    }

    .section-subtitle {
      font-size: $fs-xl;
      font-weight: $fw-light;

      span {
        font-weight: $fw-medium;
      }
    }

    .text {
      font-size: $fs-s;
      margin-bottom: $base * 12;
      line-height: 2;
    }

    .btn-group {
      svg {
        margin-left: $base;
      }

      .btn--secondary {
        box-shadow: 0px 5px 15px rgba(188, 199, 255, 0.75);
      }
    }

    .aside-image {
      position: absolute;
      top: 15%;
      left: 41%;
    }

    @media (max-width: $breakpoint-sm-max) {
      width: 60%;
    }

    @media (max-width: $breakpoint-xs-max) {
      width: 70%;
    }
  }
}
</style>
