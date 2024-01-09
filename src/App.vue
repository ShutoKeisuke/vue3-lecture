<template>
  <div id="main">
    <header>
      <nav>
        <RouterLink to="/">Top</RouterLink>
        <RouterLink to="/reserveUserInfo">reserveUserInfo</RouterLink>
        <RouterLink to="/clientInfo?mode=1">clientInfoRead</RouterLink>
        <RouterLink to="/test">testPage</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style lang="less" scoped>
#main {
  width: 100vw;
  header {
    background-color: rgb(173, 84, 228);
    nav {
      width: 100%;
      padding: 30px 0;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
