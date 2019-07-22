class Stack{
    constructor(){
        this.size = 0
        this.storage = []
    }

    // Remove latest element in stack
    pop(){
        if(this.size == 0){
            return
        }

        this.storage.pop()
    }

    // Push data onto stack
    push(data){
        this.storage.push(data)
        this.size++
    }

    // Print the data in the stack
    printStackData(){
        console.log(this.storage)
    }
}

