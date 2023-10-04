<template>
  <my-header></my-header>
  <div class="body__content">
    <div class="content__user-info">
      <div>
        <img :src="user.avatar" width="770" height="351" alt="userChanelImage" class="user-info__user-image">
      </div>
      <div class="user-info__user-name-desk">
        <div class="user-name-desk__name">
          {{ user.name }}
        </div>
        <div class="user-name-desk__desk">
          {{ user.description }}
        </div>
      </div>
      <div>
        <div>
          <div class="user-info__user-stats">
            {{ user.platform }}
          </div>
        </div>
        <div>
          <button v-ripple class="user-info__check-button">
            Отчёт
            <v-dialog
                v-model="dialog1"
                activator="parent"
                width="auto"
            >
              <v-card>
                <v-card-text>
                  По концепции проекта эта кнопка отвечает за выгрузку пользователем различных данных

                </v-card-text>
                <v-card-actions>
                  <v-btn color="#4FF07C" block @click="dialog1 = false">Закрыть</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </button>

          <button v-ripple class="user-info__upload-button">
            Загрузить
            <v-dialog
                v-model="dialog"
                activator="parent"
                width="auto"
            >
              <v-card>
                <v-card-text>
                  Эта кнопка отвечает за загрузку пользователем своей статистики в различных форматах
                </v-card-text>
                <v-card-actions>
                  <v-btn color="#4FF07C" block @click="dialog = false">Закрыть</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </button>


        </div>
      </div>
    </div>
    <div class="body__checkout-space">
      <!--      <UserCheckout :user="user">
            </UserCheckout>-->
    </div>


  </div>
</template>

<script>
/* eslint-disable */
import UserCheckout from '../components/UserPage/userCheckout'
import dialogMenu from "@/components/userReview/dialogMenu";
import users from '../users.json'
import MyHeader from "@/components/Header";

export default {
  name: "UserPage",
  components: {MyHeader, UserCheckout, dialogMenu},
  props: {},
  data() {
    return {
      user: users[this.$route.params.id],
      dialog1: false,
      dialog: false
    }
  },
  computed: {
    getUser() {
      return users[this.$route.params.id]
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.body__content {
  margin: 16px 32px 0 32px;

}

.content__user-info {
  min-height: 351px;
  padding: 31px 72px;
  display: flex;
  background: #EBE8FF;
  border-radius: 30px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  justify-content: space-evenly;
}

.user-info__user-stats {
  background: white;
  width: 330px;
  margin-left: 24px;
  height: 271px;
  border-radius: 18px;
}

.user-info__check-button {
  border-radius: 20px;
  margin-left: 20px;
  width: 149px;
  height: 60px;
  margin-top: 20px;
  border: none;
  background: #4FF07C;
}

.user-info__upload-button {
  border-radius: 20px;
  margin-left: 10px;
  width: 149px;
  height: 60px;
  margin-top: 20px;
  border: none;
  background: #82D9FF;
}

.user-name-desk__name {
  background: white;
  height: 97px;
  width: 543px;
  border-radius: 10px;
  margin-left: 42px;
  font-size: 42px;
  text-align: left;
}

.user-info__user-image {
  border-radius: 20px;
}

.user-name-desk__desk {
  background: white;
  height: 237px;
  width: 543px;
  border-radius: 10px;
  margin-left: 42px;
  margin-top: 17px;
  font-size: 32px;
  text-align: left;
}

.body__checkout-space {
  margin-top: 10px;
}
</style>