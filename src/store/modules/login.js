import jwtService from '@/common/jwt_service'
import config from '@/common/config'
import axios from 'axios'


const state = {
    error: {},
    users: {name:'daniel'},
    isAuth: !! jwtService.getToken()
}

const getters = {
    isAuthenticated(state) {
        return state.isAuth
    }
}

const actions = {
    logincheck(context, data) {
        return new Promise((resolve, reject) => {      
        axios.post(config.login_api, {
           'email': data.email,
           'password': data.password
          })
          .then(response => {
            if (typeof response.data.token !== 'undefined') {  
                context.commit('setlogin',{'email':data.email,'token':response.data.token})           
              resolve(true)
            } else {
                resolve(false)
            }
          })
          .catch(e => {
            console.log(e)
          })
    })
        
    }
}

const mutations = {
    setlogin(state, payload) {
     state.isAuth = true
    state.user = payload
    state.errors = {}
    jwtService.setToken(state.user.token)
    jwtService.setuser(state.user)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}