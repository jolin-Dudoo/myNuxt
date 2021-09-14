<template>
    <div class="wrap_Main">
        <h2>請輸入要查詢的資料</h2>
        <div>
            <label for="pName"> 產品名稱(PS4 / PS5)</label>
            <input id="pName" type="text" v-model="Tag">
            <label for="pName"> 產品名稱</label>
            <input id="pQuenty" type="text" v-model="Name">  
            <b-button variant="success">送出</b-button>
</div>
<hr>
您輸入的名稱是 : {{Tag}} 
遊戲名稱 ：{{Name}} 
<hr>

        <ol>
             <li><a :href="this.$route.params+ '/{{Tag}}'" >Zelda</a>   </li>
              <!-- <li><a :href="this.$route.params.tag + '/PS4/Zelda'">PS4/Zelda</a>   </li> -->
            <!-- <li><a :href="this.$route.params.tag + '/Zelda'">Zelda</a>   </li> -->
        </ol>

    </div>
</template>
<script>
export default{
    layout:'header',
    data(){
        return{
            Tag:"PS4",
            Name:"Mario" 
        }
        
    },
    // methods:{
    //     updateQuenty(){
    //         this.Quenty
    //     }

    // }
}

</script>
