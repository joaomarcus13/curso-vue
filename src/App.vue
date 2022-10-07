<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <modal-factory></modal-factory>
  <router-view></router-view>
</template>

<script>
import { useRoute } from 'vue-router';
import ModalFactory from './components/ModalFactory';
export default {
  components: { ModalFactory },
  setup() {
    const router = useRouter();
    const route = useRoute();

    watch(
      () => route.path,
      async () => {
        if (route.meta.hasAuth) {
          const token = window.localStorage.getItem('token');
          if (!token) {
            router.push({ name: 'Home' });
            return;
          }

          const { data } = await services.users.getMe();
        }
      }
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
