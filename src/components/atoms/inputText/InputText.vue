<template>
  <input
    type="text"
    v-model="inputValue"
  />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  // ここでイベントを定義しないとネイティブイベントも発火してしまう
  emits: ['input'],
  data() {
    return {
      inputValue: ''
    }
  },
  watch: {
    inputValue(newVal) {
      console.log('変更を検知');
      this.$emit('input', newVal);
    }
  },
  mounted() {
    // inputValueを初期化
    this.inputValue = this.value;
  }
}
</script>

<style lang="less" scoped>
input {
  padding: 0.5em 0.5em;
  font-size: 16px;
  caret-color: rgb(183, 29, 255);

  &:focus {
    outline-color: rgb(183, 29, 255);
  }
}
</style>