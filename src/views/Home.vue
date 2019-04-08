<template>
  <div class="home">
  	<Header></Header>
   热门城市
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/header.vue"
export default {
  name: 'home',
  components: {
    HelloWorld,
    Header
  },
  created(){
  	console.log(this)
  	debugger
  	this.$http({
  		url:"/api/v1/cities",
  		method:"get"
  	},{type:"guess"}).then((res)=>{
  		console.log(res)
  	})
  }
}
</script>
