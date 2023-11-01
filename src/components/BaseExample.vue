<template>
  <div>
    <h3> base examples -- classNames</h3>
    <div >content 1</div>
    <div >content 2</div>
    <button @click="show = !show">click to switch</button>
    <hr/>
    <h3> base examples -- styles</h3>
    <div >content 3</div>
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

<style scoped>

</style>