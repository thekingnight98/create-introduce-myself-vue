<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h1>User From API.</h1>
          <div class="container-flex">
            <v-container fluid>
              <v-row dense>
                <v-col v-for="card in dataUser" :key="card.id" :cols="6">
                  <v-card>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-card-text>
                        <div class="text-normal">id : {{ card.id }}</div>
                        <p class="display-1 text-title">
                          Name : {{ card.name }}
                        </p>
                        <div class="text--primary">
                          website {{ card.website }}.<br />
                          phone :{{ card.phone }}
                        </div>
                      </v-card-text>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { GetUsers } from "../api/index";
export default {
  data() {
    return {
      dataUser: [],
    };
  },
  mounted() {
    this.GetuserAPI();
  },
  methods: {
    async GetuserAPI() {
      const res = await GetUsers();
      const result = res.data;
      console.log("result = ", result);

      this.dataUser = result;
    },
  },
};
</script>

<style></style>
