<template>
  <div id="example">
    <h3>Reactive examples -- Computed</h3>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <label>Type to display: </label>
    <input
      :value="message"
      @input="handleInput"
    >
    <br>
    <label>Type to change the reversed message to this value: </label>
    <input
      :value="reversedMessage"
      @input="handleInput2"
    >
    <hr/>
    <div id="watch-example">
      <h3>Reactive examples -- Watch</h3>
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>

  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'ReactiveExample',
  data() {
    return {
      message: 'Hello',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'

    }
  },
  watch: {
    // 如果 `message` 发生改变，这个函数就会运行
    message(cur, prev) {
      console.log(cur, prev)
    },
    // 如果 `question` 发生改变，这个函数就会运行
    // eslint-disable-nextline
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: {
      get() {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('');
      },
      set(val) {
        return this.message = val;
      }
    }
  },
  created () {
    this.debouncedGetAnswer = this.$_.debounce(this.getAnswer, 500)
  },
  methods: {
    handleInput(e) {
      this.message = e.target.value;
    },
    handleInput2(e) {
      this.reversedMessage = e.target.value;
    },
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      let vm = this
      this.$axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = vm.$_.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
}


</script>