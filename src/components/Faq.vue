<template>
  <section class="section-outer section-faq">
    <div class="section-inner">
      <h5 class="ta-с">CUSTOMER HELP</h5>
      <h4 class="ta-с">Frequently asked questions</h4>

      <ul class="faq-accordion">
        <li class="faq-accordion__item">
          <div class="faq-accordion__item-trigger">
            <div class="faq-accordion__item-trigger-icon">
              <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M16 9L9 2L2 9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="faq-accordion__item-trigger-text">Reque insolens in vel?</div>
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
            <div class="faq-accordion__item-trigger-text">Vis rebum error graecis ea, id sit postea accusamus?</div>
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
            <div class="faq-accordion__item-trigger-text">Lorem repudiandae ne nec?</div>
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
            <div class="faq-accordion__item-trigger-text">Ad dicit numquam vel. Et eos iudico feugait percipitur?</div>
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
            <div class="faq-accordion__item-trigger-text">Sea no dico percipitur. Fierent constituam definitiones id eum?</div>
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
  h5 {
    margin-bottom: $base * 5;
  }

  h4 {
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
    border-bottom: 1px solid #d8e3fe;

    &-trigger {
      display: flex;
      padding: $base * 4;
      cursor: pointer;

      &-icon {
        margin-right: $base * 4;
        transform: rotate(180deg);

        .arrow {
          stroke: #8e96b7;
        }
      }

      &-text {
        @include quicksand;
        font-size: $fs-md;
        font-weight: $fw-medium;
      }
    }

    &--active {
      .arrow {
        stroke: #495274;
      }

      #{$parent}-trigger {
        color: #495274;

        &-text {
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
        font-size: $fs-sm + 2;
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
