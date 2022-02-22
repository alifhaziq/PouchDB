<!-- Please remove this file from your project -->
<template>
<div id="app">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <table class="table table-bordered table-striped">
                    <!-- <th>ID</th> -->
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Action</th>
                    <tbody>
                        <tr v-for="item in todos" :key="item._id">
                            <!-- <td>{{item._id}}</td> -->
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.position}}</td>
                            <td class="text-center">
                                <button @click="editClick(item)" class="btn btn-warning btn sm">Edit</button>
                                <button @click="deleteItem(item)" class="btn btn-warning btn sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input v-model="form.name" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="form.email" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Position</label>
                        <input v-model="form.position" type="text" class="form-control">
                    </div>
                    <button @click="save" type="button" class="btn btn-primary">SAVE</button>
                    <button @click="update" type="button" class="btn btn-success">UPDATE</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                _id:'',
                name: '',
                email: '',
                position: '',
            }
        }
    },
    pouch: {
        // The simplest usage. queries all documents from the "todos" pouch database and assigns them to the "todos" vue property.
        todos: {
            /*empty selector*/
        }
    },
    mounted() {
        this.$pouch.sync('todos', 'http://admin:cc123***@khscouchdb1.alpha.cloud-connect.asia/todos');
        //   this.$pouch.useAuth("admin", "cc123***")
        // this.$pouch.sync('todos', 'http://10.0.1.12:5984/todos');
    },
    methods: {
        authenticate() {
            this.$pouch.useAuth("admin", "cc123***")

        },
        deleteItem(todo) {
            this.$pouch.remove('todos', todo)
        },
        async save() {
            try {
                this.form._id = null;
                this.$pouch.post('todos', this.form)
               // this.clear()
            } catch (error) {
                console.log('error', error)
            }
        },
        clear(  ){
            
        },
        editClick(todo) {
            try{
            console.log('todos' , todo)
            this.form = todo
            // this.form._id = todo._id
            // this.form.name = todo.name,
            // this.form.email = todo.email,
            // this.form.position = todo.position
            } catch (err){
            console.log('error' , err)
            }
        },
        async update() {
            try{

                this.$pouch.put('todos' , this.form , {})
            }catch (err){
                console.log('error' , err)
            }
        }
    },
};
</script>
