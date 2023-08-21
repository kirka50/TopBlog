<template>
    <div class="body">
        <div class="logoImg">
            <img src="../assets/logo.png" alt="" width="179" height="179" />
        </div>
        <div class="languageSetup">
            <languageSetup>
            </languageSetup>
        </div>
        <div class="textField">
            <div class="entryText">
                Вход
            </div>
            <div class="emailForm">
                <input>
            </div>
            <div class="passwordForm">
                <input>
            </div>
        </div>
        <div>
            <button class="loginButton">
                Войти
            </button>
        </div>

    </div>
</template>

<script>
import LanguageSetup from '../components/loginView/LanguageSetup.vue'
export default {
    name: 'LoginForm',
    components: {
        LanguageSetup
    }
}

</script>

<style scoped>
.body {

    flex-direction: column;
    display: flex;
    text-align: center;
    flex-basis: 0;

}

.languageSetup {
    display: flex;
    justify-content: center;
    margin-left: 17em;

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
}</style>