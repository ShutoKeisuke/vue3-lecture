<template>
  <div>
    <InputText
      :value="valueTest"
      @input="onInput"
    />
    {{ valueTest }}
  </div>
</template>

<script>
// vite.config.jsのresolve.aliasに定義されている
import InputText from '@/components/atoms/inputText';

export default {
  name: 'TestPage',
  components: { InputText },
  data() {
    return {
      valueTest: 'test'
    }
  },
  methods: {
    onInput(inputValue) {
      console.log(`emit発火確認: ${inputValue}`);
      console.log(inputValue);
      this.valueTest = inputValue;
    }
  }
}
</script>