
class Todo {
    static runningId = 1
    constructor(desc,id,done=false){
        this.id = id ?? Todo.runningId++
        this.description = desc
        this.done = done
    }
    getTodo(){
        return {id:this.id,description:this.description}
    }
    setDescription(newDescription){
        this.description = newDescription
    }
    setDone(newdone){
        this.done = newdone
    }
}
//commond js
// module.exports = Todo 
// esmodule
export{ Todo }