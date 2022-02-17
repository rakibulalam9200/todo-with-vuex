<template>
  <div>
    <h1>
      ADD A User
      <span>
        <router-link to="/userList/">
          <button class="btn user-list-btn"><i class="fa-solid fa-users"></i></button>
        </router-link>

        <router-link to="/">
          <button class="btn user-list-btn"> <i class="fa-solid fa-list"></i></button>
        </router-link>
      </span>
    </h1>


    <div>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="user.name" placeholder="Enter your name">
        <br>
        <p v-if="isNameError">Please, Enter Your Name</p>
        <input type="email" v-model="user.email" placeholder="Enter your Email">
        <br>
        <p v-if="isEmailError">Please, Enter Your Email</p>

        <multiselect style="width: 50%; margin: 0 auto;" v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag"
                     label="title" track-by="title" :options="options" :multiple="true"  :taggable="true"  @select="addTag">
        </multiselect>


        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Multiselect from 'vue-multiselect'
// import {v1} from 'uuid'
export default {
  name: 'Add',
  components: {
    Multiselect
  },
  data() {
    return {
      user: {
        id: null,
        name: '',
        email: '',
        tags: []

      },
      isNameError: false,
      isEmailError: false,
      options:  [],
      value: [],

    }
  },
  computed: {
    ...mapGetters(['getAllUsers', 'getUsersId','allTodos'])
  },
  methods: {
    ...mapActions(['addUser']),
    onSubmit() {
      if (this.user.name.length === 0) {
        this.isNameError = true
        return
      } else {
        this.isNameError = false
      }
      if (this.user.email.length === 0) {
        this.isEmailError = true
        return
      } else {
        this.isEmailError = false
      }

      this.addUser({
        id: this.getUsersId + 1,
        name: this.user.name,
        email: this.user.email,
        tags: this.value,
      })

      this.$router.push('/userList/');
    },

    addTag (newTag) {
      console.log(newTag)

    },
  },

  mounted() {
    this.options = this.allTodos;
    console.log(this.allTodos);
    console.log('options',this.options);
    console.log(this.user.tags)

    // let titles =[];
    // for(let i = 0;i<this.allTodos.length;i++) {
    //   let title = this.allTodos[i].title;
    //   let code = this.allTodos[i].title;
    //   titles[i] = {title,code};
    // }
    // console.log(titles)
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>

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

.btn:hover, .btn2.hover {
  background-color: aquamarine;
}


input[type=text], input[type=email], select, multiselect {
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