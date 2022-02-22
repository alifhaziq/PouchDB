    new Vue({
        data(){
            return{
                input:{
                    _id: null,
                    name: null,
                    email:null
                },
                items:[

                ]
            }
        },
        mounted(){
            var vm = this 
            vm.created()
        },
        methods:{
            created(){
                let vm = this 
                debug.alldocs({
                    include_docs: true
                }).then(function(response){
                    for(var i = 0; i < response.rows.length; i++){
                    vm.items.push(response.rows[i].doc)
                }
            }).catch(function(error){
                console.log(error)
            })
            },
        save(){
            var vm =this
            var _id = vm.input._id,
                name = vm.input.name,
                email= vm.input.email
            db.put({
                _id,
                name,
                email
            }).then(function(){
                vm.items.push({_id,name,email})
                vm.clear()
            }).catch(function(){

            })
        },
        edit(item){
            var vm = this 
            vm.input._id = item._id
            vm.input.name = item.name
            vm.input.email = item.email
        },
            update(id){
                var _id = id - 1, vm = this
                Object.assign(this.item[_id], vm.input)
                var name = vm.input.name,
                    email= vm.input.email;
                db.get(id).then(function(doc){
                    return db.put({
                        _id: id,
                        _rev: doc._rev,
                        name: name,
                        email: email
                    })
                }).then(function(){
                    vm.clear()
                }).catch (function(error){
                    console.log(error)
                })
            },
            clear(){
                var vm = this
                vm.input._id = ''
                vm.input.name = ''
                vm.input.email = ''
            },
        delete_(item){
            var vm = this 
            db.get(item._id).then(function(doc){
                return db.remove(doc)
            }).then(function(){
                vm.items.splice(vm.items.indexOf(item), 1)
            }).catch(function(error){
                console.log(error)
            })
        }
    }
      
}).$mount('#app')
