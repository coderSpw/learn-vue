<template>
  <div class="tab-bar-item" @click="tabBarClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active-icon"></slot>
    </div>
    <div :style="getActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String
      },
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
      }
    },
    computed: {
      isActive() {
        return this.path.indexOf(this.$route.path) > -1
      },
      getActiveColor() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      tabBarClick() {
        this.$router.push({
          path: this.path,
          query: {timestamp: Date.now()}
        })
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
