<template>
  <header>
    <div class="header__buttons">
      <div class="buttons__logo"> <img src="../assets/blog.png" height="55" width="155" alt="">
        </div>
      <div class="buttons__navigation">
        <img src="../assets/img.png" height="75" width="75" alt="">
      </div>
    </div>
    <div>
      <div  class="header__user-profile"></div>
    </div>
  </header>
  <div class="body__content">
    <div class="content__user-info">
      <div>
        <img :src="user.avatar" width="770" height="351" alt="userChanelImage"  class="userImage">
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
              {{user.platform}}
            </div>
        </div>
        <div>
          <button class="user-info__check-button">
            Отчёт
          </button>
          <button class="user-info__upload-button">
            Загрузить
          </button>
        </div>
      </div>
    </div>
    <div class="body__checkout-space">
      <UserCheckout :user="user">
      </UserCheckout>
    </div>



  </div>
</template>

<script>
import UserCheckout from '../components/UserPage/userCheckout'
import users from '../users.json'
export default {
  name: "UserPage",
  components: {UserCheckout},
  props: {

  },
  data(){
    return{
      user: users[this.$route.params.id]
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

.header__buttons {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  text-align: center;
  align-items: center;
}
.header__user-profile {
  gap: 5px;
  display: flex;
  align-content: baseline;
}
.header__user-profile p {
  text-overflow: clip;
}

.body__content {
  margin: 16px 32px 0 32px;

}

.content__user-info {
  max-height: 351px;
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

.userImage {
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