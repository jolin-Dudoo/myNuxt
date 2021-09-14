<template>
    <div class="wrap_Main">
        <h2>商品詳細內容</h2>
        <div v-if="this.$route.params.name">
            產品型號: {{this.$route.params.tag}} <p></p>
            遊戲名稱: {{this.$route.params.name}}
        </div>
    </div>
   
</template>
<script>
export default {
layout:'header'

}
</script>
</script>


