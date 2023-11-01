<template>
  <div>
    <hr/>
    <h3> Slot example1 -- no slot</h3>
    <div>
      <header>
        <p>this is the header inner slot content</p>
      </header>
      <main>
        <p>this is the default inner slot content</p>
      </main>
      <footer>
        <p>this is the footer inner slot content</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotExample1'
}
</script>