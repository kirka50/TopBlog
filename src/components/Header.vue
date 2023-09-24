<template>
  <header>
    <div class="header__icons">
      <div class="logo">
        <img src="../assets/blog.png" height="55" width="155" alt="1">
      </div>
      <div class="navigation">
        <img src="../assets/img.png" height="75" width="75" alt="2">
      </div>
    </div>
    <div class="header__user-profile">
      <div class="user-profile">
        Кирилл Резников
        <v-icon icon="mdi-account"></v-icon>
        <v-icon icon="mdi-logout"></v-icon>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader"
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
</style>