<template>
  <div class="checkbox-group">
    <Checkbox
      v-for="(checkbox, index) in checkboxList" :key="index"
      :value="checkbox.value"
      :label="checkbox.label"
      :name="checkbox.name"
      @change="onChange($event, index)"
    />
  </div>
</template>

<script>
import Checkbox from '@/components/atoms/checkbox';

export default {
  name: 'CheckboxGroup',
  components: { Checkbox },
  props: {
    checkboxList: {
      type: Array,
      required: true
    }
  },
  emits: ['change'],
  data() {
    return {
      checkboxInfoList: []
    }
  },
  mounted() {
    this.checkboxInfoList = this.checkboxList;
  },
  methods: {
    onChange(e, index) {
      this.checkboxInfoList[index].value = e;
      this.$emit('change', { checkboxList: this.checkboxInfoList, isChecked: e, index });
    }
  }
}
</script>

<style lang="less" scoped>
.checkbox-group {
  display: flex;
  gap: 16px;
}
</style>