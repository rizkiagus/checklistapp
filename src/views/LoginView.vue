<template>
  <div>
    <v-container class="mt-12">
      <h2 class="text-center mt-12">Login</h2>
      <v-col cols="4"></v-col>
      <v-col cols="4" class="mx-auto">
        <v-text-field
          label="Username"
          outlined
          dense
          v-model="username"
        ></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          outlined
          dense
        ></v-text-field>
        <v-btn
          class="primary mb-3"
          width="100%"
          depressed
          v-model="password"
          @click="login"
        >
          Login
        </v-btn>
        <span class="me-5">Belum Mempunyai Akun?</span>
        <span
          class="primary--text font-weight-bold rgs"
          @click="() => $router.push('/register')"
        >
          Register
        </span>
      </v-col>
      <v-col cols="4"></v-col>
    </v-container>
  </div>
</template>
<script>
import Axios from "axios";
const cookie = require("tiny-cookie");
export default {
  name: "LoginView",
  setup() {},
  data() {
    return {
      cookie: "",
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      Axios.post("http://94.74.86.174:8080/api/login", this.user)
        .then((response) => {
          cookie.set("token", response.data.data.token);
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style>
.rgs {
  cursor: pointer;
}
</style>
