<template>
  <div v-if="isInit" class="client-info">
    <div class="title-container">
      <h3>クライアント情報</h3>
    </div>
    <div class="client-info-container">
      <div class="client-info-row">
        <label class="client-info-label">名前</label>
        <p v-text="getClientName" />
      </div>
      <div class="client-info-row">
        <label class="client-info-label">Email</label>
        <p v-text="getClientEmail" />
      </div>
    </div>
    <div class="test-container">
      <p>{{ $route.query.mode }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'clientInfo',
  async mounted() {
    await this.loadClientInfoRead();
  },
  computed: {
    ...mapGetters('clientInfo', ['isInit', 'getClientName', 'getClientEmail'])
  },
  methods: {
    ...mapActions('clientInfo', ['loadClientInfoRead'])
  }
}
</script>