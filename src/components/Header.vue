<template>
  <header>
    <router-link exact tag="svg" to="/projects" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1000px" height="1000px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
      <g>
        <path class="outer" d="M500,0c276.143,0,500,223.857,500,500s-223.857,500-500,500S0,776.143,0,500S223.857,0,500,0z"/>
        <path class="inner" d="M330.871,336.785C233.415,336.785,158.2,403.015,158.2,500s75.214,163.214,172.671,163.214 S503.543,596.972,503.543,500S428.328,336.785,330.871,336.785z"/>
        <path class="inner" d="M841.8,657.528h-95.57V536.9H633.172v120.628H537.6V341.986h95.572v111.655h113.058V341.986h95.57V657.528z"/>
        <path class="outer" d="M336.349,421.116c-1.824-0.105-3.651-0.146-5.478-0.116c-41.243-0.637-75.193,32.28-75.83,73.523 c-0.029,1.825,0.01,3.652,0.116,5.477c-2.388,41.179,29.058,76.496,70.237,78.884c1.824,0.105,3.651,0.146,5.477,0.116 c41.243,0.638,75.192-32.28,75.831-73.523c0.029-1.825-0.011-3.652-0.116-5.477C408.974,458.821,377.527,423.504,336.349,421.116z"/>
      </g>
    </router-link>
    <nav>
      <router-link tag="a" to="/projects">Projects</router-link>
      <router-link tag="a" to="/about">About</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  header {
      align-items: center;
      display: flex;
      padding: 2rem 2rem 0;

      svg {
          cursor: pointer;
          height: 3.5rem;
          transform: translateX(-.1rem);
          transition: transform 1s cubic-bezier(.19, 1, .22, 1);
          width: 3.5rem;

          &:hover {
              transform: translateX(-.1rem) scale(1.075);

              &.router-link-exact-active {
                  transform: translateX(-.1rem);
              }
          }

          .outer {
              fill: $color-dark;

              .inverted & {
                  fill: $color-light;
              }
          }

          .inner {
              fill: $color-light;

              .inverted & {
                  fill: $color-dark;
              }
          }
      }

      &.inverted {
          svg {
              .outer {
                  fill: $color-light;
              }
              .inner {
                  fill: $color-dark;
              }
          }
      }

      nav {
          margin-left: auto;
          margin-top: -4px;

          a {
              &:first-of-type {
                  margin-right: 1.5rem;

                  @include small {
                      margin-right: 1rem;
                  }
              }

              &::before {
                  display: none;
              }

              &::after {
                  width: 30px;
              }
          }
      }

      &.inverted nav a::after {
          background: $color-light;
      }
  }
</style>
