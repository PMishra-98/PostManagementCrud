<template>
  <div class="marginTop">
    <footer class="bg-light text-center text-lg-start">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright: Pallawi
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>
<script>
export default {
  setup() {
    const windowSize = window.innerHeight + 'px';
    console.log(windowSize);
    return {
      windowSize,
    };
  },
};
</script>
<style scoped></style>
