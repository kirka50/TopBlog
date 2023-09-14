<template>
  <header>
    <div class="header__icons">
      <div class="logo">
        <img src="../assets/blog.png" height="55" width="155" alt="">
      </div>
      <div class="navigation">
        <img src="../assets/img.png" height="75" width="75" alt="">
      </div>
    </div>
    <div class="header__user-profile">
      <div class="user-profile">
        <v-icon icon="mdi-account"></v-icon>
      </div>
    </div>
  </header>
  <div class="body">
    <div class="body__left-pillar">
      <div class="left-pillar__review-button">
        <dialogMenu :dialog-button-name="'отчётИк'"
        :content="'Эта кнопка отвечает за локальную выгрузку отчёта и сейчас она не активна'"></dialogMenu>
      </div>
      <div class="left-pillar__filter">
        <div class="filter__options">
          <div>
            Поиск:
            <v-select class="options__platform"
                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                      chips=""
                      multiple=""
            ></v-select>
          </div>
          <div>
            Выбор даты:
            <v-select class="options__platform"

                      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                      variant="outlined"
                      chips=""
                      multiple=""
            ></v-select>
          </div>
          <div>
            Платформа:
            <v-select
                class="options__platform"
                v-model="platform"
                :items="options"
                variant="outlined"
                chips=""
                multiple=""
            ></v-select>
          </div>
        </div>
        <div class="filter__buttons">
          <dialogMenu>Кнопка 1</dialogMenu>
          <button>кнопка 2</button>
        </div>
      </div>
      <div class="left-pillar__check-button">
        <button v-if="platform != ''" @click="this.$router.push({name:'checkData', params: {platform: this.platform}})">
          Проверить все скиншоты
        </button>
      </div>
    </div>
    <div class="body__content">
      <user-preview v-for="item in users" :key="item" :user="item" :id="item.id"></user-preview>
    </div>
  </div>
</template>

<script>
import UserPreview from "@/components/userReview/userPreview";
import users from "../users.json";
import dialogMenu from "@/components/userReview/dialogMenu";
export default {

  name: "userReviewView.vue",

  components: {UserPreview, dialogMenu},
  data() {
    return {
      users,
      platform: [],
      selected: null,
      options: ['VK', 'Telegram', 'Zen', 'YoTube'],

    }
  },
  methods: {
    toCheckData() {
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  padding: 0 20px 0 20px;
  min-width: 366px;
}

.header__icons {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  text-align: center;
  align-items: center;
}

.user-profile {
  gap: 5px;
  display: flex;
  align-content: baseline;
}

.user-profile p {
  text-overflow: clip;
}

.body {
  display: flex;

}

.body__content {
  display: flex;
  padding: 10px;
  gap: 10px;
  flex-wrap: wrap;
}

.body__left-pillar {
  display: flex;
  flex-direction: column;
  border-right: #545454 solid 1px;
  width: 195px;
  justify-content: space-between;
  height: calc(100vh - 75px);
  padding: 5px 5px 5px 5px;
}


.left-pillar__filter {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: left;
  flex-wrap: nowrap;
}

.left-pillar__filter input {
  border-radius: 24px;
  border: #3461FF solid 1px;
  height: 37px;
}

.left-pillar__filter button {
  border-radius: 20px;
  border: none;
  background: #3461FF;
  color: white;
  width: 155px;
  height: 49px;
  font-size: 16px;
}

.left-pillar__review-button {
  border-bottom: #545454 solid 1px;
  padding-bottom: 10px;
  padding-top: 10px;
}

.left-pillar__check-button {
  padding: 10px 0 10px 0;
  border-top: #545454 solid 1px;
  border-bottom: #545454 solid 1px;
}

.left-pillar__check-button button {
  border-radius: 20px;
  border: none;
  background: #3461FF;
  color: white;
  width: 155px;
  height: 49px;
  font-size: 16px;
  cursor: pointer;
}

.left-pillar__review-button button {

}

.filter--buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-end;
}
  .left-pillar__filter v-btn {
  border-radius: 20px;
  border: none;
  background: #3461FF;
  color: white;
  width: 155px;
  height: 49px;
  font-size: 16px;
}

.options__platform {
  width: 150px;
}
.options__platform v-select {

}

</style>