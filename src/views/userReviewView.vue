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
            <v-text-field v-model="userToFind" variant="outlined"></v-text-field>
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
        </div>
      </div>
      <div class="left-pillar__check-buttons">
        <v-btn class="text-none"
        rounded="60px"
        @click="initSort"
        >Отсортировать</v-btn>
        <v-btn class="text-none"
               rounded="60px"
               @click="unsortUsers"
        >Сбросить</v-btn>
      </div>
    </div>
    <div class="body__content">
      <user-preview v-for="item in sorted" :key="item" :user="item" :id="item.id"></user-preview>

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
      options: ['VK', 'Telegram', 'Zen', 'YouTube'],
      sorted: users,
      userToFind: ''

    }
  },
  methods: {
    sortByUser() {
      const users = this.users
      this.sorted = []
      for (const i in users) {
        if (users[i].name == this.userToFind) {
          this.sorted.push(users[i])
        }
      }
    },
    initSort() {
      console.log('a')
      if (this.userToFind){
        console.log('apopa')
        this.sortByUser()

      } else {
        console.log('aaaa' + this.userToFind)
        this.sortedUsers()
      }
    },
    sortedUsers() {

      const users = this.users
      this.sorted = []
      if (this.platform == '') {

        this.sorted = users
        return
      }
      for (const i in users) {
        console.log(users[i].platform + '  variable')
        if (this.platform.includes(users[i].platform)) {
          this.sorted.push(users[i])
        }
      }
    },
    unsortUsers() {
      this.sorted = this.users
      this.platform = []
      }
  },
  computed: {
    getUsersNames() {
      const userNames = []
      for (const i in users) {
        userNames.push(users[i].name)
      }
      return userNames
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

.left-pillar__check-buttons {
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.left-pillar__check-buttons button {
  border-radius: 20px;
  border: none;
  background: #3461FF;
  color: white;
  width: 155px;
  height: 49px;
  font-size: 16px;
  cursor: pointer;

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