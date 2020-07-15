<template>
  <footer>
    <small>&copy; <span>Copyright</span> {{ new Date().getFullYear() }} Oli Heslington</small>
    <a href="mailto:oliheslington@gmail.com">Drop me a line</a>
  </footer>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  footer {
      align-items: center;
      display: flex;
      padding: 0 2rem 2rem;

      &.inverted {
          background: $color-pale;

          small,
          span {
              color: $color-medium;
          }
      }

      small {
          margin-right: auto;
      }

      a {
          color: $color-medium;
          font-size: .7rem;

          &:hover {
              color: $color-dark;
          }

          .inverted & {
              color: $color-light;
          }
      }

      span {
          @include small {
              display: none;
          }
      }
  }
</style>
