<template>
  <div>
    <v-container class="mt-12">
      <h2 class="text-center mt-12">Register</h2>
      <v-col cols="4"></v-col>
      <v-col cols="4" class="mx-auto">
        <v-text-field label="Email" outlined dense></v-text-field>
        <v-text-field label="Username" outlined dense></v-text-field>
        <v-text-field label="Password" outlined dense></v-text-field>
        <v-btn class="primary mb-3" width="100%" depressed>register</v-btn>
        <span class="me-5">Belum Mempunyai Akun?</span>
        <span
          class="primary--text font-weight-bold rgs"
          @click="() => $router.push('/login')"
        >
          Login
        </span>
      </v-col>
      <v-col cols="4"></v-col>
    </v-container>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "RegisterView",
  setup() {},
  data() {
    return {
      user: {
        email: "",
        password: "",
        username: "",
      },
    };
  },
  methods: {
    register() {
      Axios.post("http://94.74.86.174:8080/api/register", this.user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
