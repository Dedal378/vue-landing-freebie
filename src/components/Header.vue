<template>
  <header
      class="section-outer section-header"
      :class="{ 'section-header--active-nav': showMobMenu }"
  >
    <!--TODO: исключить использование классов, сделать только на js-->
    <div class="section-inner section-inner--wide vertical-indent vertical-indent--xs">
      <div class="main-navigation">
        <h1 class="logo">
          <a class="logo__link" href="#" aria-label="Logo in header">
            <span class="visually-hidden">Logo Header</span>
          </a>
        </h1>

        <button
            class="btn btn--transparent btn-burger"
            aria-label="Toggle navigation"
            @click="btnMenuOpenToggle()"
        >
          <span class="btn-burger__line"></span>
          <span class="btn-burger__line"></span>
          <span class="btn-burger__line"></span>
        </button>

        <div
            class="main-navigation__inner-wrapper"
        >
          <!--v-show="showMobMenu"-->
          <div class="nav">
            <ul class="nav-wrapper">
              <li class="nav-wrapper__item">
                <a class="nav-wrapper__item-link nav-wrapper__item-link--active" href="#">Home</a>
              </li>
              <li class="nav-wrapper__item">
                <a class="nav-wrapper__item-link" href="#">Blog</a>
              </li>
              <li class="nav-wrapper__item">
                <a class="nav-wrapper__item-link" href="#">Features</a>
              </li>
              <li class="nav-wrapper__item">
                <a class="nav-wrapper__item-link" href="#">Pricing</a>
              </li>
              <li class="nav-wrapper__item">
                <a class="nav-wrapper__item-link" href="#">Documentation</a>
              </li>
            </ul>
          </div>

          <div class="socials">
            <ul class="socials-wrapper">
              <li class="socials-wrapper__item">
                <a class="socials-wrapper__item-link" href="#" aria-label="Facebook">
                  <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="f" d="M5.65597 17V9.24548H8.22501L8.60969 6.2234H5.65597V4.294C5.65597 3.41904 5.89578 2.82278 7.13417 2.82278L8.71368 2.82208V0.119112C8.44051 0.0822826 7.5029 -1.65981e-08 6.41206 -1.65981e-08C4.13475 -1.65981e-08 2.57564 1.40836 2.57564 3.9947V6.2234H-2.3404e-08V9.24548H2.57564V17H5.65597Z" />
                  </svg>
                </a>
              </li>

              <li class="socials-wrapper__item">
                <a class="socials-wrapper__item-link" href="#" aria-label="Telegram">
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Telegram_logo">
                      <path id="Vector" d="M5.81972 12.0232C5.38191 12.0232 5.4563 11.8651 5.3053 11.4664L4.01782 7.41344L13.9283 1.78983" fill="#9399AB" />
                      <path id="Vector_2" d="M5.81982 12.0232C6.15768 12.0232 6.30696 11.8754 6.49554 11.7L8.29744 10.0241L6.04979 8.72772" fill="#70788E" />
                      <path id="Vector_3" d="M6.04945 8.72806L11.4957 12.5768C12.1172 12.9048 12.5657 12.735 12.7205 12.0249L14.9374 2.03246C15.1644 1.16206 14.5906 0.76729 13.996 1.02547L0.978404 5.82666C0.0898302 6.16756 0.0950105 6.64173 0.816436 6.85301L4.15705 7.85032L11.8909 3.18335C12.256 2.97158 12.5911 3.08543 12.3161 3.31891" />
                    </g>
                  </svg>
                </a>
              </li>

              <li class="socials-wrapper__item">
                <a class="socials-wrapper__item-link" href="#" aria-label="Twitter">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="twitter">
                      <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M17.0328 1.84041C16.4253 2.11761 15.7726 2.30417 15.0877 2.38898C15.7868 1.95807 16.3239 1.27594 16.5767 0.46342C15.9222 0.862259 15.1973 1.15191 14.4257 1.308C13.8081 0.631966 12.9276 0.210602 11.9535 0.210602C10.0832 0.210602 8.56631 1.76886 8.56631 3.69017C8.56631 3.96313 8.59598 4.22867 8.65402 4.48334C5.83853 4.33759 3.3424 2.95159 1.67204 0.847419C1.38053 1.36154 1.2135 1.95887 1.2135 2.59648C1.2135 3.80359 1.81147 4.86853 2.72005 5.49303C2.16541 5.47448 1.64276 5.31812 1.18615 5.05709V5.10081C1.18615 6.7876 2.35476 8.19347 3.90258 8.51347C3.61882 8.59297 3.31957 8.63537 3.01181 8.63537C2.79357 8.63537 2.581 8.61417 2.37462 8.5731C2.80543 9.95591 4.05659 10.9619 5.53864 10.99C4.37931 11.9228 2.91868 12.4793 1.33113 12.4793C1.05768 12.4793 0.788618 12.4634 0.523682 12.4308C2.02249 13.4183 3.80327 13.9944 5.71599 13.9944C11.946 13.9944 15.3531 8.69155 15.3531 4.09365C15.3531 3.94259 15.3498 3.79286 15.3433 3.64313C16.0053 3.15286 16.5798 2.53937 17.0338 1.84107" />
                    </g>
                  </svg>
                </a>
              </li>

              <li class="socials-wrapper__item">
                <a class="socials-wrapper__item-link" href="#" aria-label="Medium">
                  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Medium_icon">
                      <path id="path14" d="M17.0001 2.10651H16.3472C16.1047 2.10651 15.7619 2.45072 15.7619 2.67109V10.6583C15.7619 10.8789 16.1047 11.1796 16.3472 11.1796H17.0001V13.0755H11.084V11.1796H12.3223V2.78361H12.2616L9.36999 13.0755H7.13129L4.277 2.78361H4.20477V11.1796H5.44303V13.0755H0.48999V11.1796H1.12422C1.38542 11.1796 1.72825 10.8789 1.72825 10.6583V2.67109C1.72825 2.45072 1.38542 2.10651 1.12422 2.10651H0.48999V0.210635H6.68355L8.717 7.65872H8.77295L10.8252 0.210635H17.0001V2.10651Z" />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div class="btn-wrapper">
            <a href="#" class="btn btn--primary">Get started</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMobMenu: false
    }
  },
  methods: {
    hideScroll() {
      const scrollWidth = `${ this.getScrollbarWidth}px`

      document.body.style.paddingRight = scrollWidth
      document.body.style.overflow = 'hidden'

      document.querySelector('.main-navigation').style.paddingRight = scrollWidth
    },
    showScroll() {
      document.body.style.paddingRight = ''
      document.body.style.overflow = 'visible'

      document.querySelector('.main-navigation').style.paddingRight = ''
    },
    btnMenuOpenToggle() {
      this.showMobMenu = !this.showMobMenu
      this.showMobMenu ? this.hideScroll() : this.showScroll()
    },
    resetNav() {
      this.showMobMenu = false
      this.showScroll()
    },
  },
  computed: {
    getScrollbarWidth() {
      const outer = document.createElement('div')

      outer.style.position = 'absolute'
      outer.style.top = '-9999px'
      outer.style.width = '50px'
      outer.style.height = '50px'
      outer.style.overflow = 'scroll'
      outer.style.visibility = 'hidden'

      document.body.appendChild(outer)

      const scrollBarWidth = outer.offsetWidth - outer.clientWidth

      document.body.removeChild(outer)

      return scrollBarWidth
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.resetNav)
      this.resetNav() // надо ли оставлять?
    })
  },
  destroyed() {
    console.log('destroyed')
    window.removeEventListener('resize', this.resetNav)
  }
}
</script>

<style scoped lang="scss">
.section-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $color-white;
  z-index: 60;

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
  }

  &--active-nav {
    &::before {
      display: block;
    }

    .main-navigation__inner-wrapper {
      display: flex;
    }
  }
}
</style>
