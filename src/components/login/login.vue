<template>
  <div>
      <div class="container">
        <form class="form-horizontal" role="form" method="POST" action="/login">
            <div class="row">
               
                <div class="col-md-6">
                    <h2>Please Login</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
              
                <div class="col-md-6">
                    <div class="form-group" v-bind:class="{ 'has-error': $v.login.email.$error }">
                        <label class="sr-only" for="email">E-Mail Address</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                            <input type="text" name="email" v-model.trim="login.email" @input="$v.login.email.$touch()" class="form-control" id="email"
                                   placeholder="you@example.com" required autofocus>
                                   
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                       <div class="errormsg" >
                            <span class="text-danger" v-if="$v.login.email.$dirty && !$v.login.email.required">
                                    <i class="fa fa-close"></i>Please enter email id
                            </span>
                            <span class="text-danger" v-if="$v.login.email.$dirty && !$v.login.email.email">
                                    <i class="fa fa-close"></i>Please enter valid email id
                            </span>
                            
                        </div>
                    </div>
                </div> 
            </div>
            
            <div class="row">
                
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="sr-only" for="password">Password</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                            <input type="password" name="password" class="form-control" id="password"
                                 v-model.trim="login.password" @input="$v.login.password.$touch()"  placeholder="Password" required>
                        </div>
                    </div>
                </div> 
                 <div class="col-md-3">
                    <div class="form-control-feedback">
                       <div class="errormsg" >
                            <span class="text-danger" v-if="$v.login.password.$dirty && !$v.login.password.required">
                                    <i class="fa fa-close"></i>Please enter password
                            </span>
                           
                        </div>
                    </div>
                </div>               
            </div>
            
            <div class="row" style="padding-top: 1rem">
               
                <div class="col-md-6">
                  <div class="form-group text-center" >
                        
                            <button type="button" @click="submitLogin" :disabled="$v.login.$invalid" class="btn btn-success"><i class="fa fa-sign-in"></i> Sign In</button>
                        <!-- <a class="btn btn-link" href="/password/reset">Forgot Your Password?</a>-->
                        </div>
                </div>
                {{isAuth}}
            </div>
        </form>
    </div>
  </div>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'login',
    data () {
        return {
            isAuth: this.$store.getters.isAuthenticated,
            login: {
                email:'',
                password:''
            }
        }
    },
    validations: {
        login: {
            email: {
                required,
                email
            },
            password: {
                required
            }
        }
    },
    methods: {
       submitLogin() {
            this.$store.dispatch('logincheck', this.login)
            .then((data) => {
               if(data) {
                   this.$router.push({ name: 'dashboard' })
               }
            })
       }
    }
}
</script>
