<template>
  <div>
    <hr/>
    <h3> Slot example2 -- slot</h3>
    <div>
      <header>
        <slot name="header">
          <p>this is the header inner slot content</p>
        </slot>
      </header>
      <main>
        <slot :user="user">
          <p>this is the default inner slot content. author: {{user.lastName}}</p>
        </slot>
      </main>
      <footer>
        <slot name="footer">
          <p>this is the footer inner slot content</p>
        </slot>
      </footer>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotExample2',
  data() {
    return {
      user: {
        firstName: 'liming',
        lastName: 'liu'
      }
    };
  }
}
</script>