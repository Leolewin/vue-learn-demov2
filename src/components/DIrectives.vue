<template>
  <div>
    <h3> directives examples -- v-if</h3>
    <div v-if="show">content 1</div>
    <div v-else>content 2</div>
    <button @click="show = !show">click to switch</button>
    <hr/>
    <h3> directives examples -- v-show</h3>
    <div v-show="show2">content 3</div>
    <button @click="show2 = !show2">click to {{show2 ? 'hidde' : 'show'}}</button>

    <hr/>
    <h2>render list with v-for directive</h2>
    <ul>
      <li v-for=" (item, idx) in list" :key="idx">
        <a :href="item.url" target="_blank" rel="noopener">{{item.text}}</a>
      </li>
    </ul>
    <label>add new item with link and text splited by <em>';'</em> : </label>
    <input @change="changeInput" /> 
  </div>

  

</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {return [];}
    }
  },
  data () {
    return {
      show: false,
      show2: false,
      currentList: this.list
    };
  },
  methods: {
    changeInput: function (e) {
      const {value} = e.target;
      const [url, text] = value.split(';');
      this.currentList.push({
        url,
        text
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  
</style>