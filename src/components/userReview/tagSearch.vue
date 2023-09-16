<template>
  <v-select
      v-model="items"
      :items="selected"
      label="Select Item"
      multiple
  >
    <template v-slot:selection="{ item, index }">
      <v-chip v-if="index < 2">
        <span>{{ item.title }}</span>
      </v-chip>
      <span
          v-if="index === 2"
          class="text-grey text-caption align-self-center"
      >
        (+{{ value.length - 2 }} others)
      </span>
    </template>
  </v-select>
</template>

<script>
export default {
  name: "tagSearch",
  data() {
    return {
      items: this.value,
      selected: this.selected
    }
  },
  props: {
    value: [],

  },

}
</script>

<style scoped>

</style>