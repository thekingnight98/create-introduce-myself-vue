<template>
  <div>
    <v-container c>
      <v-row>
        <v-col class="align-content">
          <img src="../assets/img/profile.png" alt="" />
          <h1>Name : Jakkit Wangong</h1>
          <h2>nick name is : Arm</h2>
          <div class="mt-2">Contract Me</div>
          <p>Email : Jakkitw.work@gmail..com</p>
          <p>Tel : 0929050811</p>
          <div class="text--error">*เก็บข้อมูล info ลง localStorage แล้ว*</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData : {
        name : 'Jakkit Wangong',
        nickName : 'Arm',
        Email : 'Jakkitw.work@gmail.com',
        Tel : '0929050811'
      }
    }
  },
  methods: {
    setDataLocalStorage(){
       localStorage.setItem("userInfo", JSON.stringify(this.userData));
    }
  },
  mounted() {
    this.setDataLocalStorage()
  },
};
</script>

<style></style>
