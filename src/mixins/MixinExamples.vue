<script>
export default {
  data() {
    return {
      minxData: 'this is mixin data',
      testData: 'this is mixin test data'
    }
  },
  created() {
    console.log(`===========> this is the mixin output`)
  }
}

</script>