<template>
  <div class="checkbox">
    <div class="checkbox-label-container">
      <label
        :for="name"
        class="checkbox-label"
        v-text="label"
      />
    </div>
    <div class="checkbox-input-container">
      <input
        :id="name"
        type="checkbox"
        class="checkbox-input"
        v-model="isChecked"
        @change="onChange(isChecked)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  emits: ['change'],
  data() {
    return {
      isChecked: false
    };
  },
  watch: {
    value(newVal) {
      this.isChecked = newVal;
    }
  },
  mounted() {
    // isCheckedを初期化
    this.isChecked = this.value;
  },
  methods: {
    onChange(isChecked) {
      this.$emit('change', isChecked);
    }
  }
}
</script>

<style lang="less" scoped>
.checkbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .checkbox-label-container {
    margin-bottom: 4px;
  }
}
</style>