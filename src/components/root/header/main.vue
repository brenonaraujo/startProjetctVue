<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <brand @toggle="onToggleMenu" />
            <div class="collapse navbar-collapse" :class="{ in: isOpen }">
              <left/>
              <rigth/>
            </div>
        </div>
    </nav>
</template>
<script>
import left from './left'
import brand from './brand'
import rigth from './right'

export default {
  name: 'init-header',
  components: { left, brand, rigth },
  data () {
    return { isOpen: false }
  },
  methods: {
    onToggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}

</script>
