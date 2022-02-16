
const state = {
    users:[
        {
            id: 1,
            name: 'Tafiq Khan',
            email: 'Tafiq@gmail.com'
        },
        {
            id: 2,
            name: 'Sajal Khan',
            email: 'sajal@gmail.com'
        }
    ]

};
const getters = {
    getAllUsers: state => state.users.length !== 0 && state.users,
    getUsersId: state=> state.users.length !== 0 && state.users[state.users.length - 1].id,
};
const actions = {
    addUser({commit},user){
        commit("add_user",user);
    },
    deleteUser({commit},id){
        commit("delete_user",id);
        console.log("commit","user id",id)
    },
    updateUser({commit}, editUser){
        console.log('update user commit',editUser)
        commit('update_user',editUser)
    },
};
const mutations = {
    add_user(state,user){
        state.users.push(user);
    },

    delete_user(state,id){
        console.log("Mutation user id",id-1)
        const users = state.users.filter(user=> user.id !== id )
        state.users = users;
    },
    update_user(state,editUser){
        console.log(editUser);
        const index = state.users.findIndex(user=> user.id == editUser.id);
        state.users[index].name = editUser.name;
        state.users[index].email = editUser.email;
    }

};

export default{
    state,
    getters,
    actions,
    mutations,
}
