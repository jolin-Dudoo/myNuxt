<template>
<div class="wrap-inside">
  <div id="wrap-button">
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
  </div>
   <hr>
   <div class="codeBlock">
     <div 
     v-for="scriptItem,index of script" :key="index">
     {{scriptItem.item}}<br>
     </div>
   </div>
</div>
  <!-- <Tutorial/> -->
</template>

<script>

export default {
  data(){
    return{
      txt:'Hello\n Test',
      script:[
        {item:`<b-button>Button</b-button>`},
        {item:`<b-button variant="danger">Button</b-button>`},
        {item:`<b-button variant="success">Button</b-button>`},
        {item:`<b-button variant="outline-primary">Button</b-button>`}
      ]
    }
  },
  // component('codeBzlock',{})

  // }
  // methods:{
  //   getSource(){
  //     this.all
  //   }
  // }
}
</script>
