<template>
  <div>
    <h3> base examples -- classNames</h3>
    <div :class="{'content1-red': show, 'content1-blue': !show}">content 1</div>
    <button @click="show = !show">click to switch content1 color</button>

    <div :class="classNamesArray">content 2</div>
    <hr/>
    <h3> base examples -- styles</h3>
    <div :style="{border: 'solid 1px pink', marginBottom: '5px'}">content 3</div>
    <div :style="stylesObject">content 4 with style object</div>
    <hr/>
  </div>

</template>

<script>
export default {
  data: () => {
    return {
      show: false,
      classNamesArray: ['content2-fontColor', 'content2-fontSize'],
      stylesObject: {
        border: 'solid 1px pink',
        marginBottom: '5px'
      }
    };
  }
}
</script>

<style scoped lang="less">
.content1{
  &-red{
    color: red;
  }
  &-blue{
    color: blue;
  }
}
.content2{
  &-fontColor{
    color: gray;
  }
  &-fontSize{
    font-size: 20px;
  }
}

</style>