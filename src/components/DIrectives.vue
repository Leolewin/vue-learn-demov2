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
  </div>

</template>

<script>
export default {
  data: () => {
    return {
      show: false,
      show2: false
    };
  }
}
</script>