<template>
  <section class="section-outer section-faq">
    <div class="section-inner">
      <h2 class="ta-с">CUSTOMER HELP</h2>
      <div class="ta-с section-subtitle">Frequently asked questions</div>

      <ul class="faq-accordion">
        <li class="faq-accordion__item">
          <div class="faq-accordion__item-trigger">
            <div class="faq-accordion__item-trigger-icon">
              <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M16 9L9 2L2 9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="faq-accordion__item-trigger-title">Reque insolens in vel?</h3>
          </div>
          <div class="faq-accordion__item-content">
            <div class="faq-accordion__item-content-text">
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
            </div>
            <div class="faq-accordion__item-content-btn">
              <a href="#" class="btn btn--grayscale">Go to documentation</a>
            </div>
          </div>
        </li>

        <li class="faq-accordion__item">
          <div class="faq-accordion__item-trigger">
            <div class="faq-accordion__item-trigger-icon">
              <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M16 9L9 2L2 9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="faq-accordion__item-trigger-title">Vis rebum error graecis ea, id sit postea accusamus?</h3>
          </div>
          <div class="faq-accordion__item-content">
            <div class="faq-accordion__item-content-text">
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
            </div>
            <div class="faq-accordion__item-content-btn">
              <a href="#" class="btn btn--grayscale">Go to documentation</a>
            </div>
          </div>
        </li>

        <li class="faq-accordion__item faq-accordion__item--active">
          <div class="faq-accordion__item-trigger">
            <div class="faq-accordion__item-trigger-icon">
              <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M16 9L9 2L2 9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="faq-accordion__item-trigger-title">Lorem repudiandae ne nec?</h3>
          </div>
          <div class="faq-accordion__item-content">
            <div class="faq-accordion__item-content-text">
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
            </div>
            <div class="faq-accordion__item-content-btn">
              <a href="#" class="btn btn--grayscale">Go to documentation</a>
            </div>
          </div>
        </li>


        <li class="faq-accordion__item">
          <div class="faq-accordion__item-trigger">
            <div class="faq-accordion__item-trigger-icon">
              <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M16 9L9 2L2 9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="faq-accordion__item-trigger-title">Ad dicit numquam vel. Et eos iudico feugait percipitur?</h3>
          </div>
          <div class="faq-accordion__item-content">
            <div class="faq-accordion__item-content-text">
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
            </div>
            <div class="faq-accordion__item-content-btn">
              <a href="#" class="btn btn--grayscale">Go to documentation</a>
            </div>
          </div>
        </li>

        <li class="faq-accordion__item">
          <div class="faq-accordion__item-trigger">
            <div class="faq-accordion__item-trigger-icon">
              <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M16 9L9 2L2 9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="faq-accordion__item-trigger-title">Sea no dico percipitur. Fierent constituam definitiones id eum?</h3>
          </div>
          <div class="faq-accordion__item-content">
            <div class="faq-accordion__item-content-text">
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
            </div>
            <div class="faq-accordion__item-content-btn">
              <a href="#" class="btn btn--grayscale">Go to documentation</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Faq"
}
</script>

<style scoped lang="scss">
.section-faq {
  h2 {
    margin-bottom: $base * 5;
  }

  .section-subtitle {
    font-size: $fs-m + 6;
    font-weight: $fw-medium;
    margin-bottom: $base * 17;
  }
}

.faq-accordion {
  @include list-null();
  width: $base * 185;
  margin: 0 auto;

  &__item {
    $parent: &;
    border-bottom: 1px solid $color-gray-100;

    &-trigger {
      display: flex;
      padding: $base * 7;
      cursor: pointer;

      &-icon {
        margin-right: $base * 4;
        transform: rotate(180deg);

        .arrow {
          stroke: $color-gray-400;
        }
      }

      &-title {
        @include quicksand;
        font-size: $fs-s;
        font-weight: $fw-medium;
      }
    }

    &--active {
      .arrow {
        stroke: $color-gray-900;
      }

      #{$parent}-trigger {
        color: $color-gray-900;

        &-title {
          font-weight: $fw-bold;
        }

        &-icon {
          transform: rotate(0);
        }
      }

      #{$parent}-content {
        display: flex;
      }
    }

    &-content {
      display: none;
      padding: 0 $base*4 $base*4 $base*18;

      &-text {
        flex-grow: 1;
        font-size: $fs-xs + 2;
        letter-spacing: 0.03em;
        line-height: 1.9;
      }

      &-btn {
        margin-left: $base * 15;

        .btn--grayscale {
          font-weight: $fw-medium;
        }
      }
    }
  }
}
</style>
