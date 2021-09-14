

<template>

     <div class="wrap_Main">
        <h2>商品內容(從URL接收一個參數)</h2>
        <hr>
        <div v-if="this.$route.params.id">
            商品ID {{this.$route.params.id}}
        </div>
    </div>
    <!-- <Nuxt /> -->
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default{
    layout:'header',
    // ===== 判斷只能輸入數字 =====
    validate({params}){
        // return /^\d+$/.test(params.id)
        return  /^[0-9]*$/.test(params.id)
    }
}

// more validation method :https://nuxtjs.org/docs/2.x/features/rendering-modes
// export default ({
//     validate({params}) {
//         return /*\d+$/.test(params.id)
        
//     },
// })
</script>
