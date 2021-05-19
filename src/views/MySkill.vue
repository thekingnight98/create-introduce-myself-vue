<template>
  <div>
    <v-container class="padding-content">
      <v-row>
        <v-col class="align-content">
          <h1>My Skill</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <h1>CSS</h1>
            <v-progress-linear v-model="css" color="amber" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>

            <br />
            <h1>HTML</h1>
            <v-progress-linear v-model="html" color="blue-grey" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>

            <br />
            <h1>JS</h1>
            <v-progress-linear v-model="js" color="#A3E4D7" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
            <br/>
            <h1>React</h1>
            <v-progress-linear v-model="react" color="#2773A8" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>

            <br />
            <h1>Vue</h1>
            <v-progress-linear v-model="vue" color="#A0CA5D" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>

            <br />
            <h1>MongoDB</h1>
            <v-progress-linear v-model="mongodb" color="#FF5733" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
            <br/>
            <h1>Docker</h1>
            <v-progress-linear v-model="docker" color="#DB15DB" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>

            <br />
            <h1>Nodejs</h1>
            <v-progress-linear v-model="nodejs" color="#15D5DB" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>

            <br />
            <h1>Lineliff</h1>
            <v-progress-linear v-model="lineliff" color="#B7DB15" height="25">
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      css: 60,
      html: 70,
      js: 65,
      react: 55,
      vue: 80,
      mongodb: 65,
      docker: 55,
      nodejs: 55,
      lineliff: 65,
    };
  },
};
</script>

<style></style>
