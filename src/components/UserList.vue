<template>
  <div>

    <table id="todo-table">
      <caption>All User List <span>
        <router-link to="/addUser/">
          <button class="btn user-btn"><i class="fa-solid fa-user-plus"></i></button>
        </router-link>
      </span></caption>

      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Todos</th>
        <th>Action</th>
      </tr>
      <tr v-for="(user , index) in getAllUsers" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
         <td>
           <span v-for="(tag , tagIndex) in user.tags" :key="tagIndex">
             {{tag.title}},
           </span>

         </td>

        <td>
          <router-link :to="`/editUser/${user.id}`">
            <button class="btn-action"><i class="fa-solid fa-pen-to-square"></i></button>
          </router-link>

          <button @click="deleteUser(user.id)" class="btn-action"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Todos',

  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getAllUsers']),

  },

  methods: {
    ...mapActions(['deleteUser'])
  },
  mounted() {
      console.log(this.getAllUsers)
  }


};
</script>

<style scoped>
.todo-header {
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

.todo-btn {
  background-color: #04AA6D;
}

.todo-btn:hover {
  background-color: aquamarine;
}


.user-btn:hover {
  background-color: aquamarine;
}

#todo-table caption {
  font-size: 30px;
  margin-top: 30px;
  padding: 10px;
  font-weight: bold;
}

.pointer {
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

#todo-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#todo-table tr:hover {
  background-color: #ddd;
}

.btn-action {
  color: #04AA6D;
  margin-right: 20px;
  font-size: 1.2rem;
}

.status-change {
  background-color: red;
  color: white;
}

</style>