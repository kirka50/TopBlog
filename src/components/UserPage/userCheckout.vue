

<script>
import tg from '@/tg.json'

let userMetrics = []

export default {
  name: "userCheckout.vue",
  data() {
    return {
      userMetrics: userMetrics,
      userMetricsValue: []
    }
  },
  props: {
    user: {
      id: Number,
      name: String,
      avatar: String,
      platform: String,
    }
  },
  mounted() {
    for (const item in tg) {
      console.log(tg[item].id)
      if (tg[item].metrics == null) {
        continue
      }
      this.userMetrics.push(tg[item].metrics[0].name)
    }
    for (const item in tg) {
      console.log(tg[item].id)
      if (tg[item].metrics == null) {
        continue
      }
      this.userMetricsValue.push(tg[item].metrics[0].value)
    }
  },
  computed: {
  }
}

</script>

<style scoped>
.checkout {
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  background: #EBE8FF;
  padding: 20px 10px 20px 10px;
}

.buttons {
  display: flex;
  gap: 30px;

}

.data {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  min-width: 1200px;
}
</style>
<template>
  <div class="checkout">
    <div class="data">
      <div>
        {{userMetrics[0]}}:
      </div>
      <div>
        {{ userMetricsValue[0] }}
      </div>
      <div>
        {{ userMetrics[1] }}:
      </div>
      <div>
        {{ userMetricsValue[1] }}
      </div>
      <div>
      </div>
    </div>
    <div class="buttons">
    </div>
  </div>
</template>