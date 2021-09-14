

<template>

      <div class="wrap_Main" >
        <h2>商品內容(從URL接收多個參數)</h2>
        <!-- <h3>目前的 router {{this.$route}}</h3> -->
        <hr>
        <!-- <h3>商品一覽 ({{ this.$route.params.tag}})</h3> -->
        <ol>
            <li><a :href="this.$route.params.tag + '/Zelda'">Zelda</a>   </li>
            <li><a :href="this.$route.params.tag + '/Mario'">Mario</a>   </li>
        </ol>
    </div>
    <!-- <Nuxt /> -->
</template>
<script>


export default{
    layout:'header',
    created(){
        // loadPage(){
            console.log("========" + this.$router.path)}
        // }
    
    
    // ===== 判斷只能輸入數字 =====
    // validate({params}){
    //     // return /^\d+$/.test(params.id)
    //     return  /^[0-9]*$/.test(params.id)
    // }
}


</script>
