
<template>
    <div>
        <table id="todo-table">
          <caption>Your All ToDos List
          <span>

            <router-link to="/userList/">
                <button class="btn2 user-list-btn"><i class="fa-solid fa-users"></i></button>
            </router-link>

            <router-link to="/addTodo/">
                <button class="btn todo-btn"> <i class="fa-solid fa-square-plus"></i></button>
            </router-link>
          </span>
          </caption>
          <tr>
            <th>Title</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr v-for="(todo , index) in allTodos" :key="index">
            <td>{{todo.title}}</td>
            <td>{{todo.date}}</td>
            <td v-bind:style= "[todo.status === 'Done' ? {'background-color': 'red','color':'white'} : {}]">

                      <span
                          @click="changeStatus(index)" class="pointer">
                          {{todo.status}}
                      </span>
            </td>
            <td>
<!--              @click="editTodo(index)"-->
              <router-link :to ="`/editTodo/${index}`">
                <button class="btn-action"><i class="fa-solid fa-pen-to-square"></i></button>
              </router-link>

              <button @click="deleteTodo(index)" class="btn-action"><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
        </table>
    </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';
export default {
    name: 'Todos',
    component: {

    },
    data() {
        return {
            
        };
    },
    computed:{
      ...mapGetters(['allTodos'])
    },

    methods: {
      ...mapActions(['deleteTodo','changeStatus']),

    },
  mounted() {
    console.log("available status",this.$store.state.availableStatus)
  }

};
</script>

<style  scoped>
.todo-header{
  background-color: aquamarine;
  padding: 10px;
}
.btn {
  float: right;
  border-radius: 10px;
  border: none;
  margin-right: 20px;
  font-size: 1.5rem;
  font-width: bold;
}

.btn2 {
  float: right;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
  font-size: 1.3rem;
  font-width: bold;
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


.user-list-btn:hover{
  background-color: lightskyblue;
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