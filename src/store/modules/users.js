
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
    getAllusers: state => state.users,
    getUsersId: state=> state.users[state.users.length-1].id,
};
const actions = {
    addUser({commit},user){
        commit("add_user",user);
    },
    deleteUser({commit},id){
        commit("delete_user",id);
    },
    updateUser({commit}, editUser){
        console.log('update user commit',editUser)
        commit('update_user',editUser)
    },
};
const mutations = {
    add_user(state,user){
        state.users.unshift(user);
    },
    delete_user(state,id){
        state.users.splice(id,1)
    },
    update_todo(state,editUser){
        console.log(editUser)
        const id = editUser.id;
        console.log(id);

    },
};

export default{
    state,
    getters,
    actions,
    mutations,
}
