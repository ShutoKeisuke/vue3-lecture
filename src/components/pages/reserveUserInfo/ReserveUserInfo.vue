<template>
  <div class="reserve-user-info">
    <div class="title">
      <h2>ユーザー情報登録</h2>
    </div>
    <div class="form-container">
      <div class="form-content">
        <label for="lastName" class="form-label">名字</label>
        <InputText
          class="form-input"
          :value="form.lastName"
          @input="onInputLastName"
        />
      </div>
      <div class="form-content">
        <label for="firstName" class="form-label">名前</label>
        <InputText
          class="form-input"
          :value="form.firstName"
          @input="onInputFirstName"
        />
      </div>
      <div class="form-content radio">
        <RadioGroup
          title="性別"
          name="sex"
          :radio-value="form.sex"
          :radio-list="radioList"
          @change="onChangeRadioGroup"
        />
      </div>
      <div class="form-content checkbox">
        <label class="form-label">利用目的(複数選択可)</label>
        <CheckboxGroup
          class="checkbox-group"
          :checkbox-list="form.purpose"
          @change="onChangeCheckboxGroup"
        />
      </div>
      <div class="form-content text-area">
        <label for="profile" class="form-label">プロフィール</label>
        <InputTextarea
          class="input-textarea"
          :value="form.profile"
          :cols="20"
          :rows="3"
          @input="onInputTextarea"
        />
      </div>
    </div>
    <div class="test">{{ $data }}</div>
    <div>フルネーム: {{ fullName }}</div>
    <div>
      <label>watchText</label>
      <input type="text" v-model="watchText">
    </div>
    <div>
      <div>
        <p>v-ifテスト</p>
      </div>
      <div>
        <input type="checkbox" v-model="vIfFlg">
      </div>
      <div v-if="vIfFlg">
        v-ifで制御しています
      </div>
    </div>
    <div v-for="item in vForList" :key="item">{{ item }}</div>
    <div class="footer-from-btn">
      <div class="button-container clear">
        <button class="btn clear" v-on:click="onClear">クリア</button>
      </div>
      <div class="button-container submit">
        <button class="btn submit" @click="onSubmit">登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'

import InputText from '@/components/atoms/inputText';
import RadioGroup from '@/components/atoms/radioGroup';
import CheckboxGroup from '@/components/molecules/checkboxGroup';
import InputTextarea from '@/components/atoms/inputTextarea';

export default {
  name: 'ReserveUserInfo',
  components: {InputText, RadioGroup, CheckboxGroup, InputTextarea},
  data: () => {
    return {
      form: {
        lastName: '',
        firstName: '',
        sex: 0,
        purpose: [
          {
            value: true,
            label: '起業する予定がある',
            name: 'purpose1'
          },
          {
            value: false,
            label: '起業に興味がある',
            name: 'purpose2'
          },
          {
            value: true,
            label: 'なんとなく',
            name: 'purpose3'
          }
        ],
        profilvBindRowse: ''
      },
      radioList: [
        {
          name: 'sexMan',
          label: '男',
          value: 1
        },
        {
          name: 'sexWoman',
          label: '女',
          value: 2
        },
        {
          name: 'sexPrivate',
          label: '設定しない',
          value: 0
        }
      ],
      vBindRows: 5,
      vBindCols: 30,
      watchText: '',
      vIfFlg: true,
      vForList: []
    }
  },
  mounted() {
    this.vForList = ['item1', 'item2', 'item3']
    console.log('store', this.$store);
  },
  computed: {
    fullName: function () {
      return this.form.lastName + this.form.firstName
    },
    CheckboxGroupList() {
      if (isEmpty(this.form.purpose)) return [];
      return map(this.form.purpose, (value, key) => {
        return {
          value,
          label: key,
          name: key
        }
      });
    }
  },
  watch: {
    watchText: function(newVal, oldVal) {
      console.log(`newVal: ${newVal}`);
      console.log(`oldVal: ${oldVal}`);
    },
    form: {
      handler: (newVal, oldVal) => {
        console.log('formの値が変更されました');
      },
      deep: true
    }
  },
  methods: {
    /**
     * 名字入力時
     *
     * @param {String} lastName 名字
     */
    onInputLastName(lastName) {
      this.form.lastName = lastName;
    },
    /**
     * 名字入力時
     *
     * @param {String} firstName 名字
     */
    onInputFirstName(firstName) {
      this.form.firstName = firstName;
    },
    /**
     * チェックボックス変更イベントハンドラ
     *
     * @param {Array} checkboxList 変更後のチェックボックスリスト
     */
    onChangeCheckboxGroup({ checkboxList }) {
      this.form.purpose = checkboxList;
    },
    /**
     * ラジオボタン変更イベントハンドラ
     *
     * @param {String|Number} radioValue 変更後のラジオボタンの値
     */
    onChangeRadioGroup(radioValue) {
      this.form.sex = radioValue
    },
    /**
     * テキストエリア変更イベントハンドラ
     *
     * @param {String} testareaStr 変更後のテキストエリアの文字列
     */
    onInputTextarea(testareaStr) {
      this.form.profile = testareaStr;
    },
    /**
     * クリアボタン押下
     */
    onClear() {
      this.form.lastName = ''
      this.form.firstName = ''
      this.form.sex = 0
      this.form.purpose[0].value = false
      this.form.purpose[1].value = false
      this.form.purpose[2].value = false
      this.form.profile = ''
    },
    /**
     * 登録ボタン押下
     */
    onSubmit() {
      console.log('登録ボタンが押下されました')
      console.log(this.form)
    }
  }
}
</script>

<style lang="less" scoped>
.reserve-user-info {
  width: 100vw;
  padding-bottom: 64px;

  .title {
    width: 90vw;
    margin: 0 auto;
  }

  .form-container {
    width: 90vw;
    margin: 0 auto;

    .form-content {
      padding: 12px 0;
      border-bottom: 1px solid rgb(201, 201, 201);

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }

      .form-label {
        margin-right: 8px;
      }

      &.radio {
        display: flex;
        .form-radio-group {
          margin-right: 8px;

          &:last-child {
            margin-right: 0;
          }

          .form-radio-label {
            margin-right: 4px;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }

      &.checkbox {
        .checkbox-group {
          margin-top: 8px;
        }
      }

      &.text-area {
        .input-textarea {
          margin-top: 8px;
        }
      }
    }
  }

  .footer-from-btn {
    width: 100vw;
    height: 64px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: white;
    box-shadow: 0px -2px 2px 0px rgba(173, 173, 173, 0.45);

    .button-container {
      margin-right: 32px;

      &:last-child {
        margin-right: 16px;
      }

      .btn {
        padding: 8px 16px;
        width: 104px;
        border-radius: 52px;
        border: none;
        transition: 0.4s;

        &.clear {
          background-color: rgb(230, 230, 230);

          &:hover {
            background-color: rgb(71, 71, 71);
            color: white;
          }
        }

        &.submit {
          background-color: rgb(151, 193, 255);

          &:hover {
            background-color: rgb(45, 95, 246);
            color: white;
          }
        }
      }
    }
  }
}
</style>