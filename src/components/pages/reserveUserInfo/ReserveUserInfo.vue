<template>
  <div class="reserve-user-info">
    <div class="title">
      <h2>ユーザー情報登録</h2>
    </div>
    <div class="form-container">
      <div class="form-content">
        <label for="lastName" class="form-label">名字</label>
        <input id="lastName" type="input" class="form-input" v-model="form.lastName">
      </div>
      <div class="form-content">
        <label for="firstName" class="form-label">名前</label>
        <input id="firstName" type="input" class="form-input" v-model="form.firstName">
      </div>
      <div class="form-content radio">
        <label class="form-label">性別</label>
        <div class="form-radio-group">
          <label for="sexMan" class="form-radio-label">男</label>
          <input id="sexMan" type="radio" name="sex" class="form-radio-input" value="1" v-model="form.sex">
        </div>
        <div class="form-radio-group">
          <label for="sexWoman" class="form-radio-label">女</label>
          <input id="sexWoman" type="radio" name="sex" class="form-radio-input" value="2" v-model="form.sex">
        </div>
        <div class="form-radio-group">
          <label for="sexPrivate" class="form-radio-label">設定しない</label>
          <input id="sexPrivate" type="radio" name="sex" class="form-radio-input" value="0" v-model="form.sex">
        </div>
      </div>
      <div class="form-content checkbox">
        <label class="form-label">利用目的(複数選択可)</label>
        <div class="form-checkbox-group">
          <div class="form-checkbox-item">
            <div class="form-checkbox-label-container">
              <label for="purpose1" class="form-checkbox-label">起業する予定がある</label>
            </div>
            <div class="form-checkbox-input-container">
              <input id="purpose1" type="checkbox" class="form-checkbox-input" v-model="form.purpose.purpose1">
            </div>
          </div>
          <div class="form-checkbox-item">
            <div class="form-checkbox-label-container">
              <label for="purpose2" class="form-checkbox-label">起業に興味がある</label>
            </div>
            <div class="form-checkbox-input-container">
              <input id="purpose2" type="checkbox" class="form-checkbox-input" v-model="form.purpose.purpose2">
            </div>
          </div>
          <div class="form-checkbox-item">
            <div class="form-checkbox-label-container">
              <label for="purpose3" class="form-checkbox-label">なんとなく</label>
            </div>
            <div class="form-checkbox-input-container">
              <input id="purpose3" type="checkbox" class="form-checkbox-input" v-model="form.purpose.purpose3">
            </div>
          </div>
        </div>
      </div>
      <div class="form-content text-area">
        <label for="profile" class="form-label">プロフィール</label>
        <div class="form-text-area-container">
          <textarea id="profile" v-bind:cols="vBindCols" :rows="vBindRows" class="form-text-area" v-model="form.profile"></textarea>
        </div>
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
export default {
  name: 'ReserveUserInfo',
  data: () => {
    return {
      form: {
        lastName: '',
        firstName: '',
        sex: 0,
        purpose: {
          purpose1: false,
          purpose2: false,
          purpose3: false
        },
        profilvBindRowse: ''
      },
      vBindRows: 5,
      vBindCols: 30,
      watchText: '',
      vIfFlg: true,
      vForList: []
    }
  },
  mounted() {
    this.vForList = ['item1', 'item2', 'item3']
  },
  computed: {
    fullName: function () {
      return this.form.lastName + this.form.firstName
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
     * クリアボタン押下
     */
    onClear() {
      this.form.lastName = ''
      this.form.firstName = ''
      this.form.sex = 0
      this.form.purpose.purpose1 = false
      this.form.purpose.purpose2 = false
      this.form.purpose.purpose3 = false
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
        .form-checkbox-group {
          margin-top: 8px;
          display: flex;

          .form-checkbox-item {
            margin-right: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;

            &:last-child {
              margin-right: 0;
            }

            .form-checkbox-label-container {
              margin-bottom: 4px;
            }
          }
        }
      }

      &.text-area {
        .form-text-area-container {
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