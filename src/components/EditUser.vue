<template>
  <div>
    <h1>Edit A User</h1>
    <div>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="user.name"  placeholder="Enter your name">
        <br>
        <p v-if="isNameError">Please, Enter Your Name</p>
        <input type="email" v-model="user.email" placeholder="Enter your Email">
        <br>
        <p v-if="isEmailError">Please, Enter Your Email</p>
        <multiselect style="width: 50%; margin: 0 auto;" v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag"
                     label="title" track-by="title" :options="options" :multiple="true" @select="addTag">
        </multiselect>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Multiselect from 'vue-multiselect';
// import {v1} from 'uuid'
export default {
  name: 'EditUser',
  components: {
    Multiselect
  },
  data(){
    return{
      user:{
        id: null,
        name: '',
        email: '',
        tags:[]

      },
      value: [],
      options: [],
      isNameError: false,
      isEmailError: false,
    }
  },
  computed:{
    ...mapGetters(['getAllUsers','getUsersId','allTodos'])
  },
  mounted() {
    this.options = this.allTodos;
    this.user.name = this.getAllUsers[this.$route.params.id-1].name;
    this.user.email = this.getAllUsers[this.$route.params.id-1].email;
    this.user.tags = this.getAllUsers[this.$route.params.id-1].tags;
    console.log(this.user.tags);
    this.value = [...this.user.tags];
  },
  methods:{
    ...mapActions(['updateUser']),
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

      this.updateUser({
        id: this.$route.params.id,
        name: this.user.name,
        email: this.user.email,
        tags: this.user.tags,
      })

      this.$router.push('/userList/');
    },
    addTag (newTag) {
      console.log(newTag.title)
      this.users.tags.push(newTag.title)
      console.log(this.users.tags)
    },


  },

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