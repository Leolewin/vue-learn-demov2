<template>
  <!-- eslint-disable  -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>


    <hr/>
    <h3>Reactive Data Example</h3>
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
    <h2>V-model example</h2>
    <label>value bind to v-model: {{ modelName }}</label>
    <VModelExample
      v-model="modelName"
    ></VModelExample>
  </div>
</template>

<script>
/* eslint-disable */
import ReactiveExample from './ReactiveExample.vue';
import * as Vue from 'vue';
import VModel from './VModel.vue';

export default {
  name: 'HelloWorld',
  components: {
    ReactiveExample: ReactiveExample,
    VModelExample: VModel 
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
      modelName: 'v-model example',
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
