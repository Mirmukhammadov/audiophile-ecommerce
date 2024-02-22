<!-- MyInput.vue -->
<template>
  <div class="flex flex-col">
    <label
      class="text-black text-lg font-bold font-['Manrope'] pb-1"
      :for="id"
      >{{ label }}</label
    >
    <input
      :type="type"
      :id="id"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      class="opacity-40 text-black text-lg font-bold font-['Manrope'] w-[309px] h-14 bg-white rounded-lg border border-stone-300 outline-none px-1"
    />
    <!-- Add validation error message if needed -->
    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: {
      type: String,
      default: "text",
    },
    id: String,
    name: String,
    value: [String, Number],
    placeholder: String,
    error: String, // Optional error message for validation
  },
};
</script>

<style scoped>
/* Add your styling here if needed */
</style>
