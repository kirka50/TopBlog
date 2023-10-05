<template>
    <div class="loginBody">
        <div class="logoImg">
            <img src="../assets/logo.png" alt="" width="179" height="179" />
        </div>
        <div>
            <div class="languageSetup">
                <languageSetup>
                </languageSetup>
            </div>
        </div>

        <div class="textField">
            <div class="entryText">
                Вход
            </div>
            <div class="emailForm">
                <input placeholder="Логин" v-model="login"  @keydown.enter="loginCheck(this.login)">
            </div>

            <div class="passwordForm" >
              <input placeholder="Пароль">
              <v-tooltip activator="parent" location="bottom">
                Пароль вводить не обязательно, для простоты можете ввести только логин :)
              </v-tooltip>
            </div>

        </div>
        <div>
            <button class="loginButton" v-ripple @click="loginCheck(this.login)">
                Войти
            </button>
        </div>
        <div class="reg">
            Нет учётной записи ?
            <p1 @click="$router.push('/reg')">
                Зарегестрируйтесь
            </p1>
        </div>
    </div>
</template>

<script>
import LanguageSetup from '../components/loginView/LanguageSetup.vue'
export default {
    name: 'LoginForm',
    components: {
        LanguageSetup
    },
  methods: {
      loginCheck(login) {
        if (this.isUserInUsersList(login)) {
          this.$store.commit('loginUser', {name: login})
          console.log(login)
          this.$router.push('/')
        }
      },
      isUserInUsersList(user) {
        if(user) {
          let userList = this.$store.getters.getUserList
          for (let i in userList) {
            if (user == userList[i]){
              console.log('saa')
              return true
            }
          }
          return false
        }
      }
  },
  data() {
      return {
        login: '',
      }
  }
}

</script>

<style scoped>
.loginBody {
    flex-direction: column;
    display: flex;
    text-align: center;
    flex-basis: 0;
}

.languageSetup {
    display: flex;
    justify-content: center;
    margin-left: 16em;
}

.entryText {
    font-size: 40px;
    font-weight: bold;
}

.emailForm {
    display: flex;
    justify-content: center;
    gap: 100px;
}

.emailForm input {
    border: none;
    border-bottom: solid #3F3F3F 1px;
    width: 300px;
    outline: none;
}

.passwordForm {
    display: flex;
    justify-content: center;
    gap: 100px;


}

.passwordForm input {
    border: none;
    border-bottom: solid #3F3F3F 1px;
    width: 300px;
    outline: none;
}

.textField {
    display: flex;
    flex-direction: column;
    gap: 50px;

}

.loginButton {
    margin-top: 50px;
    height: 50px;
    width: 250px;
    border: solid #589DDD 1px;
    border-radius: 10px;
    color: #589DDD;
    font-size: 20px;
    font-family: bold;
    cursor: pointer;
}

.reg{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 10vh;
}

.reg p1 {
    color: #589DDD;
    text-decoration: underline;
    cursor: pointer;
}
</style>