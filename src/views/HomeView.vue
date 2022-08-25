<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="teal" dark>
      <v-toolbar-title>Daftar Checklist</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="dialog = true"> <v-icon>mdi-plus</v-icon></v-btn>
    </v-toolbar>
    <ol>
      <li v-for="(data, index) in listcheck" :key="index">
        {{ data.name }}
        <v-btn icon @click="deleteChecklist(data.id)"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
        <ol v-for="(items, index) in data" :key="index">
          <!-- <li>{{ items.items ? items.items : " " }}</li> -->
        </ol>
      </li>
    </ol>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Tambah Checklist </v-card-title>

        <v-text-field
          outlined
          dense
          label="Nama Checklist"
          v-model="checklist"
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="saveChecklist">
            Simpan
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import Axios from "axios";
const cookie = require("tiny-cookie");
export default {
  name: "HomeView",
  setup() {},
  data() {
    return {
      checklist: "",
      listcheck: "",
      dialog: false,
    };
  },
  methods: {
    saveChecklist() {
      Axios.post(
        "http://94.74.86.174:8080/api/checklist",
        { name: this.checklist },
        {
          headers: {
            Authorization: `Bearer ${cookie.get("token")}`,
          },
        }
      )
        .then((response) => {
          console.log(response);
          this.$router.go("/");
        })
        .catch((error) => console.log(error));
    },
    getChecklist() {
      Axios.get("http://94.74.86.174:8080/api/checklist", {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      })
        .then((response) => {
          console.log(response);
          this.listcheck = response.data.data;
        })
        .catch((error) => console.log(error));
    },
    deleteChecklist(index) {
      Axios.delete(`http://94.74.86.174:8080/api/checklist/${index}`, {
        headers: {
          Authorization: `Bearer ${cookie.get("token")}`,
        },
      }).then((response) => {
        console.log(response);
        this.$router.go("/");
      });
    },
  },
  mounted() {
    this.getChecklist();
    console.log(cookie.get("token"));
  },
};
</script>
