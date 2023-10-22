<template>
  <div class="radio-group">
    <label v-if="title" class="label" v-text="title" />
    <div v-for="(radioInfo, index) in radioInfoList" :key="index" class="radio-group-item">
      <label :for="radioInfo.name" class="radio-label" v-text="radioInfo.label" />
      <input
        :id="radioInfo.name"
        type="radio"
        name="sex"
        class="radio-input"
        :value="radioInfo.value"
        v-model="radioValueInfo"
        @change="onChange(radioValueInfo)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioGroup',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    radioList: {
      type: Array,
      required: true
    },
    radioValue: {
      type: [String, Number],
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
      radioInfoList: [],
      radioValueInfo: null
    };
  },
  watch: {
    radioValue(newVal) {
      this.radioValueInfo = newVal;
    }
  },
  mounted() {
    this.radioInfoList = this.radioList;
    this.radioValueInfo = this.radioValue;
  },
  methods: {
    onChange(radioValue) {
      this.$emit('change', radioValue);
    }
  }
}
</script>

<style lang="less" scoped>
.radio-group {
  display: flex;
  gap: 8px;

  .radio-group-item {
    .radio-label {
      margin-right: 4px;
    }
  }
}
</style>