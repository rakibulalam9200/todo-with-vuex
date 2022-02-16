<template>
  <div>
    <h1 class="todo-header">Welcome Todos</h1>
<!--    <router-link to="/addTodo/">-->
<!--      <button class="btn todo-btn"> <i class="fa-solid fa-square-plus"></i> TODO</button>-->
<!--    </router-link>-->

<!--    <router-link to="/addUser/">-->
<!--      <button class="btn user-btn"><i class="fa-solid fa-user-plus"></i> USER</button>-->
<!--    </router-link>-->

<!--    <router-link to="/userList/">-->
<!--      <button class="btn user-list-btn"><i class="fa-solid fa-list"></i> USER LIST</button>-->
<!--    </router-link>-->

<!--    <router-link to="/">-->
<!--      <button class="btn user-list-btn"> <i class="fa-solid fa-list"></i> TODO LIST</button>-->
<!--    </router-link>-->

  </div>
</template>

<script>

export default {
  name: 'Header',

  data() {
    return {

    };
  },

};
</script>

<style  scoped>
.todo-header{
  background-color: aquamarine;
  padding: 10px;
}
.btn{
  float: right;
  border-radius: 10px;
  padding: 10px 20px;
  border: 2px solid red;
  margin-right: 20px;
  font-size: 1.2rem;
  font-width: bold;
}

.todo-btn{
  background-color: aquamarine ;
}
.todo-btn:hover{
  background-color: #04AA6D;
}


.user-btn{
  background-color: aquamarine;
}

.user-btn:hover{
  background-color: #04AA6D;
}

.user-list-btn{
  background-color: cadetblue;
}

.user-list-btn:hover{
  background-color: lightskyblue;
}

</style>