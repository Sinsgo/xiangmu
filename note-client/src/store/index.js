import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        userInfo:{
            avatar:'',
            email:'',
            username:''
        }
    },
    mutations:{
        'CHANGE_userInfo'(state,payload){
            state.userInfo = payload
        }
    },
    axtions:{

    },
    plugins:[createPersistedState({
        storage:{
            getItem:key => sessionStorage.get(key),
            setItem:(key,value)=>
            sessionStorage.setItem(key,value),
            removeItem:key => sessionStorage.removeItem(key),
        }
    })]
})
export default store