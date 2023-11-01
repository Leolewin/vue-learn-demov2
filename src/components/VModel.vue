<script>
export default {
  name: "VModelExample",
  model: {
    event: 'update:placeholderName',
    prop: 'placeholderName'
  },
  props: {
    placeholderName: String,
  },
  emits: ['update:placeholderName']
}
</script>

<template>
  <div>
    <label>Type to change: </label>
    <input
    type="text"
    :placeholder="placeholderName"
    :value="placeholderName"
    @input="$emit('update:placeholderName', $event.target.value)"
  />

  </div>
</template>