<template>
  <div>
    <v-btn
        color="#3461FF"
        width="155"
        height="49"
        class="btn--text"

    >
      {{dialogButtonName}}

      <v-dialog
          v-model="dialog"
          activator="parent"
          width="auto"
      >
        <v-card>
          <v-card-text>
            {{
              content
            }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block="" @click="dialog = false">Закрыть</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "dialogMenu",
  data() {
    return {
      dialog: false,
    }
  },
  props: {
    content: String,
    dialogButtonName: String
  }
}
</script>

<style scoped>
 .btn--text {
  color: white;
}
</style>