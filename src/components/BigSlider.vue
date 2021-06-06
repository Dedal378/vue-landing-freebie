<template>
  <section class="section-outer section-slider-big">
    <ul class="slider-big">
      <li class="slider-big__item">
        <div class="slider-big__item icon-stats"></div>

        <div class="section-inner slider-big__item-content vertical-indent vertical-indent--m">
          <h2>PLAN YOUR LIFE</h2>
          <div class="section-subtitle">Increase your <span>productivity</span></div>

          <div class="slider-big__item-content text">
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
          </div>

          <div class="btn-icon-play-wrapper">
            <!--<img src="../../src/assets/btn-play.svg" alt="play slideshow" />-->
            <a href="#" aria-label="Play button in slider">
              <i class="icon-play">
                <svg width="12" height="12" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2.73354C6.66667 3.11844 6.66667 4.08069 6 4.46559L1.5 7.06367C0.833333 7.44857 0 6.96744 0 6.19764V1.00149C0 0.231691 0.833333 -0.249434 1.5 0.135467L6 2.73354Z" fill="#5e81ff"/>
                </svg>
              </i>
            </a>
          </div>
        </div>
      </li>
    </ul>

    <ul class="dots">
      <li class="dots__item dots__item--active"></li>
      <li class="dots__item"></li>
      <li class="dots__item"></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "BigSlider"
}
</script>

<style scoped lang="scss">
.section-slider-big {
  position: relative;
  padding: 0;
  background-color: $color-gray-50;

  .dots {
    position: absolute;
    bottom: $base * 7;
    left: 50%;
    transform: translateX(-50%);
  }
}

.slider-big {
  @include list-null();
  position: relative;

  &__item {
    position: relative;
    height: $base * 140;
    background:
        center/cover no-repeat url("../../src/assets/chart.svg"),
        35% 50% no-repeat url("../../src/assets/clouds.svg");
    text-align: center;

    &.icon-stats {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      background: 30.65% 84%/170px no-repeat url("../../src/assets/stats.svg");

      @media (max-width: $breakpoint-xs-max) {
        display: none;
      }
    }

    .icon-play {
      position: relative;
      z-index: 53;

      svg {
        margin-left: 4px;
        margin-top: 2px;
      }
    }

    &-content {
      .section-subtitle {
        font-weight: $fw-light;

        span {
          font-weight: $fw-medium;
        }
      }

      .text {
        max-width: 50%;
        margin: 0 auto $base*5;
        font-size: $fs-s;
        line-height: 2;
      }
    }
  }
}

.icon-play {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: $base * 13;
  height: $base * 13;
  border-radius: 100%;
  background-color: $color-white;
  box-shadow: 0 $base*2 $base*12 rgba($color-gray-300, .6);

/*  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    margin-left: $base * 4;
    border-color: transparent;
    border-width: $base*2 $base*3;
    border-style: solid;
    border-left-color: #5e81ff;
    border-radius: $base;
  }*/
}
</style>
