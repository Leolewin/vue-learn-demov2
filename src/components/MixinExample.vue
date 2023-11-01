<template>
  <div>
    <hr/>
    <h3> mixin examples</h3>
    <div>{{minxData}}</div>
    <div>{{testData}}</div>
  </div>
</template>

<script>
import MixinExamples from '../mixins/MixinExamples.vue';
export default {
  mixins: [MixinExamples],
  data() {
    return {
      testData: 'this is mixin example test data'
    }
  },
  created() {
    console.log(`===========> this is the mixin example output`);
  }
}
</script>