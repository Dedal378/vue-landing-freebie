<template>
  <section class="section-outer section-blog">
    <div class="section-inner">
      <h5 class="ta-с">OUR RESOURCES</h5>
      <h4 class="ta-с">Start reading our blog</h4>

      <div class="slider-wrapper">
        <ul class="slider-blog">
          <li class="slider-blog__item">

            <div class="slider-blog__item-gallery">
              <a href="#" class="image-link image-link--b">
                <img src="../assets/img-001.jpg" alt="image">
                <span class="lens"></span>
              </a>
              <a href="#" class="image-link image-link--s-1">
                <img src="../assets/img-002.jpg" alt="image">
                <span class="lens"></span>
              </a>
              <a href="#" class="image-link image-link--s-2">
                <img src="../assets/img-003.jpg" alt="image">
                <span class="lens"></span>
              </a>
            </div>

            <div class="slider-blog__item-content">
              <h3 class="title">How to start planning</h3>
              <div class="text">Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...</div>

              <div class="btn-group">
                <a href="#" class="btn btn--primary">Read now</a>
                <a href="#" class="btn btn--transparent">Add to your bookmarks</a>
              </div>
            </div>
          </li>
        </ul>

        <a href="#" class="btn-blog btn-blog--prev"></a>
        <a href="#" class="btn-blog btn-blog--next"></a>
      </div>

      <ul class="dots">
        <li class="dots__item dots__item--active"></li>
        <li class="dots__item"></li>
        <li class="dots__item"></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog"
}
</script>

<style scoped lang="scss">
.section-blog {
  background-color: $color-primary-50;

  h4 {
    margin-bottom: $base * 23;
  }
}

.slider-wrapper {
  position: relative;
}

.slider-blog {
  @include list-null();
  margin-bottom: $base * 25;
  border: 1px solid $color-primary-50;
  background-color: $color-white;
  box-shadow: 0 $base*3 $base*13 $color-primary-50;

  &__item {
    display: flex;
    justify-content: space-between;
    padding: $base*16 $base*8;

    &-gallery,
    &-content {
      flex-basis: 48%;
    }

    &-gallery {
      display: grid;
      grid-template-rows: repeat(2, $base*30);
      grid-template-columns: repeat(3, $base*30);
      grid-gap: $base*4;

      .image-link {
        position: relative;
        display: block;
        border-radius: $base + 1;
        overflow: hidden;
        box-shadow: 0px $base*4 $base*25 $color-primary-50;

        .lens {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: block;
          width: $base * 16;
          height: $base * 16;
          background: no-repeat 50% 50% url("../assets/icon-blog-search.svg");
          border-radius: 100%;
          opacity: 0;
          transition: $transition;
        }

        &:hover {
          .lens {
            opacity: 1;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          opacity: .4;
        }

        &--b {
          grid-row: 1 / 3;
          grid-column: 1 / 3;

          &::before {
            background: linear-gradient(200deg, transparent, $color-warning-500);
          }
        }

        &--s-1 {
          grid-row: 1 / 2;
          grid-column: 3 / 4;

          &::before {
            background: linear-gradient(230deg, transparent, $color-danger-500);
          }
        }

        &--s-2 {
          grid-row: 2 / 3;
          grid-column: 3 / 4;

          &::before {
            background: linear-gradient(200deg, transparent, $color-cyan-500);
          }
        }
      }
    }

    &-content {

      .btn-group {
        .btn--primary {
          margin-right: $base * 6;
        }

        .btn--transparent {
          font-weight: $fw-bold;
          border-color: transparent;
        }
      }

      .title {
        margin-bottom: $base * 8;
      }

      .text {
        @include roboto;
        color: $color-primary-500;
        font-size: 14px;
        margin-bottom: $base * 8;
        line-height: 1.9;

      }
    }
  }
}

.btn-blog {
  position: absolute;
  top: 50%;
  display: block;
  width: $base * 10;
  height: $base * 10;
  background: no-repeat 50% 50% url("../assets/icon-arrow-left.svg");
    right: 100%;

  &--prev {
    margin-right: $base * 16;
    transform: translateY(-50%);
  }

  &--next {
    left: 100%;
    margin-left: $base * 16;
    transform: translateY(-50%) rotate(180deg);
  }
}
</style>
