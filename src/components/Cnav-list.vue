<template>
  <div>
    <ul class="sm:flex justify-between">
      <li class="list_item-style">HOME</li>
      <li class="list_item-style">HEADPHONES</li>
      <li class="list_item-style">SPEAKERS</li>
      <li class="list_item-style">EARPHONES</li>
    </ul>
  </div>
</template>

<style scoped>
.list_item-style {
  color: white;
  font-size: 13px;
  font-family: Manrope;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 25px;
  letter-spacing: 2px;
  word-wrap: break-word;
  cursor: pointer;
  transition: 0.2s ease-in;
}

.list_item-style:hover {
  color: #d87d4a;
}
</style>
