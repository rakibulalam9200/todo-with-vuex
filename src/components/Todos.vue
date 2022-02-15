<template>
    <div>
        <h1 class="todo-header">Welcome Todos</h1>
        <router-link to="/addTodo/">
          <p><button class="todo-btn">ADD A ToDo</button></p>
        </router-link>

        <table id="todo-table">
          <caption>Your All ToDos List</caption>
          <tr>
            <th>Title</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr v-for="(todo , index) in allTodos" :key="index">
            <td>{{todo.title}}</td>
            <td>{{todo.date}}</td>
            <td>

                      <span :class="changeStatus(2)" @click="changeStatus(index)" class="pointer">
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

    data() {
        return {
            
        };
    },
    computed:mapGetters(['allTodos']),

    methods: {
      ...mapActions(['deleteTodo','changeStatus']),

    },
    mounted() {
      if(this.changeStatus(2)){

      }
    }

};
</script>

<style  scoped>
.todo-header{
  background-color: aquamarine;
  padding: 10px;
}
.todo-btn{
  border-radius: 10px;
  background-color: greenyellow;
  padding: 10px 20px;
  border: 2px solid red;
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
</style>