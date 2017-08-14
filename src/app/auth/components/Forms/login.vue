<template >
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label>E-mail</label>
        <input type="email" v-model="user.email" class="form-control">
      </div>
      <div class="form-group">
        <label>Paswword</label>
        <input type="password" v-model="user.password" class="form-control">
      </div>
      <button type="submit" @click="doLogin" name="btn btn-default" :disabled="!isValid">Submit</button>
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['attemptLogin']),
    doLogin () {
      this.$loader.show()
      //  this.$router.push('/')
      const user = this.user
      this.attemptLogin({...user})
      .then(() => {
        this.$router.push('/') // push para ir para a rota
      })
      this.$loader.hide()
    }
  },
  computed: {
    isValid () {
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.password)
    }
  }
}
</script>
