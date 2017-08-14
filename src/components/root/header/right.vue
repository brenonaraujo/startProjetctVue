<template >
  <ul class="nav navbar-nav navbar-right" >
    <router-link :to="{ name: 'auth.main'}" tag='li' v-if="!isLoged">
        <a>Entrar</a>
    </router-link>

    <li class="dropdown" :class="{ open: isOpenUserMenu }" v-if="isLoged">
      <a href="javascript:;"
       @click="toggleMenu"
       class="dropdown-toggle"> {{currentUser.name}} <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="javascript:;">Action</a></li>
        <li><a href="javascript:;">Action 1</a></li>
        <li><a href="javascript:;">Action 2</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="javascript:;">Separated link</a></li>
      </ul>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isOpenUserMenu: false
    }
  },
  computed: {
    ...mapGetters(['isLoged', 'currentUser'])
  },
  methods: {
    toggleMenu () {
      this.isOpenUserMenu = !this.isOpenUserMenu
    }
  }
}
</script>
