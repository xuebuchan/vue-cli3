<template>
	<div id="header1">
		<div class="header-left">
			ele
		</div>
		<div class="header-right">
			<router-link :to="'login'">登录</router-link><router-link :to="'signIn'">注册</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:"header1",
		
	}
</script>

<style>
	#header1{
		/*width: 200px;*/
		height: 46px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #3190e8;
	}
</style>