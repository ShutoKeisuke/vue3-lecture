<template>
  <div class="textarea">
    <textarea
      type="text"
      v-model="inputValue"
      :cols="cols"
      :rows="rows"
    />
  </div>
</template>

<script>
export default {
  name: 'InputTextarea',
  props: {
    value: {
      type: String,
      default: ''
    },
    cols: {
      type: Number,
      default: 30
    },
    rows: {
      type: Number,
      default: 5
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
    value(newVal) {
      this.inputValue = newVal;
    },
    inputValue(newVal) {
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