<template>
	<div class="wm-login">
		<van-form @submit="onSubmit">
		  <van-field
		    v-model="username"
		    name="用户名"
		    label="用户名"
		    placeholder="用户名"
		    :rules="[{ required: true, message: '请填写用户名' }]"
		  />
		  <van-field
		    v-model="password"
		    type="password"
		    name="密码"
		    label="密码"
		    placeholder="密码"
		    :rules="[{ required: true, message: '请填写密码' }]"
		  />
		  <div style="margin: 16px;">
		    <van-button round block type="info" native-type="submit">
		      提交
		    </van-button>
		  </div>
		</van-form>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {request} from '@/network/request.js'
	import { mapActions } from 'vuex'
	import { Toast } from 'vant';
	Vue.use(Toast);
	
	//import axios from 'axios'

	export default {
		name:'Login',
		data() {
			return {
				username:'',
				password:''
			}
		},
		methods: {
			//将指定的 actions 函数，映射为当前组件的 methods 函数
			...mapActions(['setToken', 'setUserId']),
			
			onSubmit(values) {
				request({
					method:'POST',
					url:'/api/Index/index',
					data:{
						username:this.username,
						password:this.password
					}
				}).then(res=>{
					if(res.code == 100000){
						this.setToken(res.result.token)
						this.setUserId(res.result.user_id)
						Toast.success({
							message: '登录成功',
							duration: 1.5 * 1000
						})
						setTimeout(()=>{
							this.$router.replace('/')
						},3000)
						
					}
					console.log(res)
				})
			},
		},
	}
</script>

<style>
	.wm-login{
		position: fixed;
		top: 50%;
		margin-top: -25%;
	}
</style>
