<template >
  <div >
    <header class="page-header row">
      <h2>Init-project [Auth]</h2>
    </header>
    <Login/>
  </div>

</template>

<script>
import Login from './Forms/login'
import { mapGetters } from 'vuex'

export default {
  name: 'auth',
  components: { Login },
  computed: {
    ...mapGetters(['isLoged'])
  }
}
</script>
