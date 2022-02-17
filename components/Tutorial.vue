<!-- Please remove this file from your project -->
<template>
<div id="app">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <table class="table table-bordered table-striped">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Action</th>
                    <tbody>
                        <tr v-for="item in items" :key="item._id">
                            <td>{{item._id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.position}}</td>
                            <td class="text-center">
                                <button @click="edit(item)" class="btn btn-warning btn sm">Edit</button>
                                <button @click="delete_(item)" class="btn btn-warning btn sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="id">ID</label>
                        <input v-model="input_id" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input v-model="input_name" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="input_email" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Position</label>
                        <input v-model="input_position" type="text" class="form-control">
                    </div>
                    <button @click.prevent="save" class="btn btn-primary">SAVE</button>
                    <button @click.prevent="update(input_id)" class="btn btn-success">UPDATE</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>
