<template>
  <div>
    <Checkbox
      :value="valueTest"
      :label="'ラベル'"
      :name="'test-checkbox'"
      @change="onChange"
    />
    <CheckboxGroup
      :checkbox-list="checkboxGroupTest"
      @change="onChangeGroup"
    />
    {{ valueTest }}
    {{ checkboxGroupTest }}
  </div>
</template>

<script>
import axios from "axios";
// vite.config.jsのresolve.aliasに定義されている
import Checkbox from '@/components/atoms/checkbox';
import CheckboxGroup from '@/components/molecules/checkboxGroup';

export default {
  name: 'TestPage',
  components: { Checkbox, CheckboxGroup },
  data() {
    return {
      valueTest: true,
      checkboxGroupTest: [
        {
          value: true,
          label: 'ラベル1',
          name: 'name1'
        },
        {
          value: false,
          label: 'ラベル2',
          name: 'name2'
        },
        {
          value: true,
          label: 'ラベル3',
          name: 'name3'
        }
      ]
    }
  },
  async mounted() {
    const result = await axios.get('http://localhost:5173/todoInfo/read');
    console.log(result);
  },
  methods: {
    onChange(value) {
      this.valueTest = value;
    },
    onChangeGroup({ checkboxList }) {
      this.checkboxGroupTest = checkboxList;
    }
  }
}
</script>