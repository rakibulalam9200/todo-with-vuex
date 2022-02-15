<template>
  <div>
    <h1>ADD A New TODO</h1>
    <div>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="initialTodo.title"  placeholder="Input your To Do">
        <br>
        <p v-if="isTitleError">Please, Enter Your Todo Title</p>
        <input type="date" v-model="initialTodo.date">
        <br>
        <p v-if="isDateError">Please, Enter Your Todo Date</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'Add',
  data(){
    return{
      initialTodo:{
        title: "",
        date: null,
        status:'Pending'

      },
      isTitleError: false,
      isDateError: false,
    }
  },
  methods:{
    ...mapActions(['addTodo']),
    onSubmit(){
      if(this.initialTodo.title.length === 0){
        this.isTitleError = true
        return
      }else{
        this.isTitleError = false
      }
      if(this.initialTodo.date === null) {
        this.isDateError = true
        return
      }else{
        this.isDateError = false
      }

      this.addTodo({
        title: this.initialTodo.title,
        date: this.initialTodo.date,
        status: this.initialTodo.status
      })

      this.$router.push('/');
    }


  }
}
</script>

<style scoped>
input[type=text],input[type=date], select {
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