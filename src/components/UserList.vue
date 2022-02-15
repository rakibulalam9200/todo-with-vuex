<template>
  <div>
    <h1 class="todo-header">Users List</h1>


    <table id="todo-table">
      <caption>All User List</caption>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      <tr v-for="(user , index) in getAllusers" :key="index">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>

        <td>
          <button class="btn-action"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn-action"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  name: 'Todos',

  data() {
    return {

    };
  },
  computed:{
    ...mapGetters(['getAllusers']),

  },

  methods: {


  },
  mounted() {
    console.log(this.getUsersId)
  }


};
</script>

<style  scoped>
.todo-header{
  background-color: aquamarine;
  padding: 10px;
}
.btn{
  border-radius: 10px;
  padding: 10px 20px;
  border: 2px solid red;
  margin-right: 20px;
  font-size: 1.2rem;
  font-width: bold;
}

.todo-btn{
  background-color: #04AA6D;
}
.todo-btn:hover{
  background-color: aquamarine;
}


.user-btn{
  background-color: aquamarine;
}

.user-btn:hover{
  background-color: #04AA6D;
}
#todo-table caption{
  font-size: 30px;
  margin-top: 30px;
  padding: 10px;
  font-weight: bold;
}
.pointer{
  cursor: pointer;
}
#todo-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04AA6D;
  color: white;
}
#todo-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#todo-table td, #todo-table th {
  border: 1px solid #ddd;
  padding: 8px;
}
#todo-table tr:nth-child(even){background-color: #f2f2f2;}
#todo-table tr:hover {background-color: #ddd;}

.btn-action{
  color: #04AA6D;
  margin-right: 20px;
  font-size: 1.2rem;
}

.status-change{
  background-color: red;
  color: white;
}

</style>