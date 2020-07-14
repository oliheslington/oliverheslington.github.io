<template>
  <main class="project">
    <div class="title" v-for="project in currentProject">
      <div class="container">
        <h1 v-html="project.title"></h1>
      </div>
    </div>
    <div class="details" v-for="project in currentProject">
      <div class="container">
        <div>
          <h4>Scope</h4>
          <ul>
            <li v-for="scope in project.scope.length" v-html="project.scope[scope - 1]"></li>
          </ul>
        </div>
        <div>
          <h4>Overview</h4>
          <p v-html="project.overview"></p>
        </div>
      </div>
    </div>
    <div class="bg" v-for="project in currentProject">
      <div class="container">
        <img :src="'/static/img/' + project.id + '-1.png'" :alt="project.title">
        <div class="details">
          <p v-html="project.commentary"></p>
        </div>
        <img v-for="item in 3" :src="'/static/img/' + project.id + '-' + (item + 1) + '.png'" :alt="project.title">
      </div>
      <router-link tag="div" class="next" :to="'/projects/' + project.next.id" v-for="project in currentProject" :data="project" :key="project.next.id">
        <p>Next</p>
        <h2>{{ project.next.title }}</h2>
      </router-link>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  main {
      padding-bottom: 0;

      .title {
          .container {
              margin-bottom: 9.5rem;
              max-width: 900px;

              @include medium {
                  max-width: 600px;
                  width: calc(100% - 4rem);
              }

              @include small {
                  margin-bottom: 6rem;
              }
          }

          h1 {
              color: $color-light;
              text-align: center;
          }
      }

      &>.details {
          background: $color-light;

          .container {
              box-sizing: border-box;
              display: flex;
              justify-content: space-between;
              padding: 3.75rem 2rem 7.75rem;

              @include medium {
                  flex-direction: column;
              }

              div {
                  &:nth-child(1) {
                      width: 30%;

                      @include medium {
                          margin-bottom: 2rem;
                          width: 100%;
                      }
                  }

                  &:nth-child(2) {
                      width: calc(70% - 2rem);

                      @include medium {
                          width: 100%;
                      }
                  }
              }
          }
      }

      .container {
          max-width: 900px;

          @include medium {
              width: 100%;
          }
      }

      .bg {
          background: $color-pale;
          padding-bottom: 2rem;

          img {
              margin-bottom: 2rem;

              &:first-of-type {
                  transform: translateY(-3.75rem);
              }

              &:first-of-type,
              &:last-of-type {
                  margin-bottom: 0;
              }
          }

          .details {
              margin: 0 2rem 4rem 2rem;
          }
      }

      .next {
          cursor: pointer;
          margin: 4rem auto 0;
          max-width: 900px;
          text-align: center;
          transition: transform 1s cubic-bezier(.19, 1, .22, 1);
          width: 100%;

          @include medium {
              max-width: 600px;
          }

          @include image-width {
              margin-top: 2rem;
          }

          &:hover {
              transform: scale(.9);
          }

          h2 {
              margin-bottom: 0;
          }

          p {
              margin-bottom: 0;
          }
      }
  }
</style>

<script>
  import json from '../projects.json'
  import App from '@/App'

  export default {
    name: 'ProjectDetail',
    data() {
      return {
        projects: json
      }
    },
    props: ['id'],
    computed: {
      currentProject() {
        const projects = this.projects
        for (var i = 0; i < projects.length; i++) {
          if (i + 1 > projects.length - 1) {
            var prevAcc = i - 1
            var nextAcc = 0
          } else if (i - 1 < 0) {
            var prevAcc = projects.length - 1
            var nextAcc = i + 1
          } else {
            var prevAcc = i - 1
            var nextAcc = i + 1
          }
          projects[i].prev = {
            id: projects[prevAcc].id,
            title: projects[prevAcc].title
          }
          projects[i].next = {
            id: projects[nextAcc].id,
            title: projects[nextAcc].title
          }
        }
        const currentProject = this.id
        return projects.filter(function(e) {
          return e.id === currentProject
        })
      }
    },
    mounted() {
      const projects = this.projects
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === this.id) {
          document.title = "Oli Heslington — " + projects[i].title
          document.getElementsByTagName("header")[0].classList.add("inverted")
          document.getElementsByTagName("footer")[0].classList.add("inverted")
          document.getElementsByTagName("body")[0].style.backgroundColor = projects[i].color
        }
      }
    },
    beforeDestroy() {
      document.getElementsByTagName("header")[0].classList.remove("inverted")
      document.getElementsByTagName("footer")[0].classList.remove("inverted")
      document.getElementsByTagName("body")[0].style.backgroundColor = null
    }
  }
</script>
