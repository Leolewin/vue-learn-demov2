<template>
  <!-- eslint-disable  -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr/>
    <BaseExample />
    <ReactiveExample />
    <hr/>
    <DIrectives :list="list"/>
    <hr/>
    <h3>V-model example</h3>
    <label>value bind to v-model: {{ modelName }}</label>
    <VModelExample
      v-model="modelName"
    ></VModelExample>
    <MixinExample/>
    <SlotExample1>this is the slot demo 1</SlotExample1>
    <SlotExample2></SlotExample2>
    <SlotExample2>this is the slot demo 2</SlotExample2>
    <SlotExample2>
      <template slot="header">
        this is the <em><b>header outer</b></em> slot content of slot demo 2
      </template>
      <template #footer>
        this is the <em><b>footer outer</b></em> slot content of slot demo 2
      </template>
    </SlotExample2>
    <SlotExample2>
      <template v-slot="slotProps" >
        this is the <em><b>default outer</b></em> slot content of slot demo 2, author: <em><b>{{slotProps.user.firstName}}</b></em>
      </template>
    </SlotExample2>
  </div>
</template>

<script>
/* eslint-disable */
import ReactiveExample from './ReactiveExample.vue';
import DIrectives from './DIrectives.vue';
import BaseExample from './BaseExample.vue';
import MixinExample from './MixinExample.vue';
import SlotExample1 from './SlotExample1.vue';
import SlotExample2 from './SlotExample2.vue';
import * as Vue from 'vue';
import VModel from './VModel.vue';

export default {
  name: 'HelloWorld',
  components: {
    ReactiveExample: ReactiveExample,
    VModelExample: VModel,
    DIrectives,
    BaseExample,
    MixinExample,
    SlotExample1,
    SlotExample2
  },
  props: {
    msg: String
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
  }
}
</script>

<style >
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

.hello{
  text-align: left;
  padding-left: 20px;
}
</style>
