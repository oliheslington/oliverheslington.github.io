<template>
  <main class="about">
    <div class="container">
      <div>
        <h1>OH, hello there&hellip;</h1>
      </div>
      <div>
        <p>I’m Oli Heslington a graphic designer and creative thinker with a passion for all things creative. I never miss a deadline I love a design challenge. My strengths lie in branding, corporate stationery, editorial design, website design, print and digital collateral and iconography and I enjoy exploring design solutions in order to develop new, contemporary, original and unique ideas to exceed clients’&nbsp;expectations.</p>
        <p><a href="mailto:oliheslington@gmail.com">Email me</a> to discuss your next project, or simply just say&nbsp;hello! 👋</p>
      </div>
      <div>
        <ul>
          <li><h3>Branding</h3></li>
          <li><h3>Corporate Stationery</h3></li>
          <li><h3>Editorial Design</h3></li>
          <li><h3>Website Design</h3></li>
          <li><h3>Print &amp; Digital</h3></li>
          <li><h3>Iconography</h3></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  main {
      display: flex;
      padding: 6rem 0;
  }

  .container {
      max-width: 900px;

      div {

          &:last-of-type {
              margin-top: 2rem;
          }

          h1,
          h2,
          h3 {
              transform: translateX(-.05rem);
          }

          a {
              &::before {
                  background: $color-dark;
                  bottom: -.2rem;
                  content: '';
                  height: 2px;
                  position: absolute;
                  right: 0;
                  width: 100%;

                  .inverted & {
                      background: $color-light;
                  }
              }

              @include medium {
                  &::before,
                  &::after {
                      bottom: 0;
                      height: 1px;
                  }
              }
          }
      }
  }
</style>

<script>
  export default {
    mounted() {
      document.title = "Oli Heslington — About"
      document.getElementsByTagName("body")[0].classList.add("inverted")
      function adjustMainHeight() {
        var minHeight = window.innerHeight - (document.getElementsByTagName("header")[0].offsetHeight + document.getElementsByTagName("footer")[0].offsetHeight)
        document.getElementsByTagName("main")[0].style.minHeight = minHeight + "px"
      }
      adjustMainHeight()
      window.onresize = adjustMainHeight
    },
    beforeDestroy() {
      document.getElementsByTagName("body")[0].classList.remove("inverted")
      document.getElementsByTagName("main")[0].style.minHeight = null
    }
  }
</script>
