<template>
  <!-- eslint-disable  -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr/>
    <ReactiveExample />
    <hr/>
    <h2>render list with v-for directive</h2>
    <ul>
      <li v-for=" (item, idx) in list" :key="idx">
        <a :href="item.url" target="_blank" rel="noopener">{{item.text}}</a>
      </li>
    </ul>
    <input @change="changeInput" /> 

    <hr/>
    <DIrectives/>
    <hr/>
    <h3>V-model example</h3>
    <label>value bind to v-model: {{ modelName }}</label>
    <VModelExample
      v-model="modelName"
    ></VModelExample>
  </div>
</template>

<script>
/* eslint-disable */
import ReactiveExample from './ReactiveExample.vue';
import DIrectives from './DIrectives.vue';
import * as Vue from 'vue';
import VModel from './VModel.vue';

export default {
  name: 'HelloWorld',
  components: {
    ReactiveExample: ReactiveExample,
    VModelExample: VModel,
    DIrectives
  },
  props: {
    msg: String
  },
  watch: {
    // list: function (newVal, oldVal) {
      
    // }
  },
  data: () => {
    return {
      list: [{
        url: "https://vuejs.org",
        text: 'Core Docs'
      }, {
        url: "https://router.vuejs.org",
        text: 'Forum'
      }, {
        url: "https://chat.vuejs.org",
        text: 'Community Chat'
      }, {
        url: "https://twitter.com/vuejs",
        text: 'Twitter'
      },{
        url: "https://news.vuejs.org",
        text: 'News'
      }],
      modelName: 'placeholder',
    }
  },
  methods: {
    changeInput: function (e) {
      Vue.set(this.list, 0, {...this.list[0], ...{text: e.target.value}});
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
