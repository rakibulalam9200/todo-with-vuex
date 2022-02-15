
const state = {
    todos: [
        {

            title: 'FirstTodo',
            date: '2021-02-15',
            status: 'Pending'
        },
        {
            title: 'SecondTodo',
            date: '2021-12-31',
            status: 'Pending'
        },


    ],

    availableStatus: ['Pending','On-going','Done']
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    addTodo({commit},todo){
        commit("add_todo",todo);
    },
    deleteTodo({commit},index){
        commit("delete_todo",index);
    },
    updateTodo({commit}, editTodo){
        console.log('update to do commit',editTodo)
        commit('update_todo',editTodo)
    },
    // changeStatus(index){
    //     let newIndex = this.availableStatus.indexOf(this.todos[index].status)
    //     if(++newIndex > 2){
    //         newIndex = 0;
    //     }
    //     this.todos[index].status = this.availableStatus[newIndex];
    // }

    changeStatus({commit},index){
        commit('change_status',index)
    }

};

const mutations = {
    add_todo(state,todo){
        state.todos.unshift(todo);
    },
    delete_todo(state,index){
        state.todos.splice(index,1)
    },

    update_todo(state,editTodo){
        console.log(editTodo)
        const index = editTodo.index;
        state.todos[index].title = editTodo.title;
        state.todos[index].date = editTodo.date;
        state.todos[index].status = editTodo.status;
        // const todoIndex = state.todos.indexOf(editTodo);
        //console.log(editTodo)
        // if(index === todoIndex){
        //     console.log(this.state.allTodos())
        // }
        // const index = state.todos.indexOf(editTodo);
        // console.log(index);
        // state.todos.splice(index,1,editTodo);

    },
    change_status(state,index){
        console.log('change status')
        let newIndex = state.availableStatus.indexOf(state.todos[index].status);
        console.log(newIndex)
        if(newIndex < 2){
            newIndex++;
        }
        state.todos[index].status = state.availableStatus[newIndex];
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}
