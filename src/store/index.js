/*
 * @Description: store配置
 * @Author: 丶
 * @Date: 2020-03-11 17:00:00
 * @LastEditors  : 丶
 * @LastEditTime : 2020-03-11 17:00:00
 */

import Vue from "vue"
import Vuex from "vuex"

/**
	Vuex持久化存储之vuex-persist
	Vuex 解决了多视图之间的数据共享问题。但是运用过程中又带来了一个新的问题是，
	Vuex 的状态存储并不能持久化。也就是说当你存储在 Vuex 中的 store 里的数据，
	只要一刷新页面，数据就丢失了。
	引入vuex-persist 插件，它就是为 Vuex 持久化存储而生的一个插件。
	不需要你手动存取 storage ，而是直接将状态保存至 cookie 或者 localStorage 中
 */
import VuexPersistence from "vuex-persist"

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
	storage: window.localStorage
})

/**
 * State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。
 * 
 * 只能通过 mutations 变更 Store 数据，不可以直接操作 Store 中的数据。
 * 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。
 * 
 * actions 用于处理异步任务。
 * 如果通过异步操作变更数据，必须通过 actions，而不能使用 mutations，但是在 actions 中还是要通过触发
 * mutations 的方式间接变更数据。
 * 
 * getters 用于对 Store 中的数据进行加工处理形成新的数据。
 */

export default new Vuex.Store({
	state: {
		user_id: "",
		token: "",
	},
	mutations: {
		setToken(state, param) {
			state.token = param
		},
		setUserId(state, param) {
			state.user_id = param
		},
		removeToken(state) {
			state.token = ''
		},
		removeUserId(state) {
			state.user_id = ''
		},
	},
	actions: {
		setToken(context, param) {
			context.commit('setToken', param)
		},
		setUserId(context, param) {
			context.commit('setUserId', param)
		},
		removeToken(context) {
			context.commit('removeToken')
		},
		removeUserId(context) {
			context.commit('removeUserId')
		}
	},
	getters: {
		getToken(state) {
			return state.token
		},
		getUserId(state) {
			return state.user_id
		}
	},
	plugins: [vuexLocal.plugin]
})
