/*
* @Author: xieliping
* @Date:   2018-01-03 21:03:03
* @Last Modified by:   xieliping
* @Last Modified time: 2018-01-03 23:19:32
*/
import Vue from 'vue'
const state = {
	orderList: [],
	params: {}
}
const getters = {
	getOrderList : state => state.orderList
}
const actions = {
    fetchOrderList ({commit, state}) {
        Vue.http.post('/api/getOrderList',state.params)
        .then((res) => {
        	commit('updateOrderList',res.data.list)
        },(err) => {

        })
    }
}
const mutations = {
    updateOrderList (state,payLoad) {
    	state.orderList = payLoad
    },
    updateParams (state,{key,val}) {
    	state.params[key] = val
    	console.log(state.params)
    }
}

export default {
  actions,
  getters,
  actions,
  mutations
}