<template>
    <div class="body">
        {{ lang }}
        <img src="@/assets/russian.jpeg" alt="flag" width="20" height="20">
    </div>
</template>

<script>
export default {
    name: 'languageSetup',
    data() {
        return {
            lang: "Ru"
        }
    },
}
</script>

<style scoped>
    img {
        border-radius: 5px;
    }
    .body{ 
        border-radius: 10px;
        background-color: #F1F1F1;
        padding: 5px;
    }

</style>