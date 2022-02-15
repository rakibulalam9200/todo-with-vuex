<template>
  <div>
    <h1>ADD A User</h1>
    <div>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="user.name"  placeholder="Enter your name">
        <br>
        <p v-if="isNameError">Please, Enter Your Name</p>
        <input type="email" v-model="user.email" placeholder="Enter your Email">
        <br>
        <p v-if="isEmailError">Please, Enter Your Email</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
// import {v1} from 'uuid'
export default {
  name: 'Add',
  data(){
    return{
      user:{
        id: null,
        name: '',
        email: '',

      },
      isNameError: false,
      isEmailError: false,
    }
  },
  computed:{
    ...mapGetters(['getAllusers','getUsersId'])
  },
  methods:{
    ...mapActions(['addUser']),
    onSubmit(){
      if(this.user.name.length === 0){
        this.isNameError = true
        return
      }else{
        this.isNameError = false
      }
      if(this.user.email.length === 0) {
        this.isEmailError = true
        return
      }else{
        this.isEmailError = false
      }

      this.addUser({
        id: this.getUsersId + 1,
        name: this.user.name,
        email: this.user.email,
      })

      this.$router.push('/userList/');
    }

  },

  mounted() {
    console.log(this.getUsersId)
  }
}
</script>

<style scoped>
input[type=text],input[type=email], select {
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type=submit] {
  width: 50%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #45a049;
}
</style>