<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Mingeso</span>
        <span class="font-weight-light"> Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
      </v-btn>
    </v-app-bar>

    <v-content>
      <Create/>
    </v-content>
  </v-app>
</template>

<script>
import Create from './components/Create';

export default {
  name: 'App',
  components: {
    Create,
  },
  data: () => ({
    //
  }),
};
</script>
