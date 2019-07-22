class Queue {
    constructor() {
        this.size = 0
        this.storage = []
    }

    queue(data) {
        this.storage.push(data)
        this.size++
    }

    dequeue() {
        if (this.size == 0) return
        this.storage.splice(0, 1)
        this.size--
    }

    printQueueData() {
        console.log(this.storage)
    }
}