abstract class Publisher {
    title: string
    author: string
    pubYear: number
    copies: number
    static count: number = 0
    constructor(){
        Publisher.count++
    }
    get getTitle(){
        return this.title
    }
    set setTitle(value: string){
         this.title = value
    }
     
    get getAuthor(){
        return this.author
    }
    set getAuthor(value: string){
         this.author = value
    }
    get getPubyear(){
        return this.pubYear
    }
    set getPubyear(value: number){
         this.pubYear = value
    }
     get getCopies(){
        return this.copies
    }
    set getCopies(value: number){
         this.copies = value
    }
}

class bBook extends Publisher implements Reception{
pages: number
delivery(item: Publisher){
}
recieve(item:Publisher){
}
}
class magazin extends Publisher implements Reception{
issue: number
delivery(item: Publisher){
}

recieve(item:Publisher){
}
}

interface Reception{
    delivery(item: Publisher): void
    recieve(item: Publisher): void
}

class Reader extends Publisher implements Reception{
    firstName: string
    lastName: string
    items: Publisher[]
    
    get getFirstName(){
        return this.firstName
    }
    set setFirstName(value: string){
         this.firstName = value
    }
    get getlastName(){
        return this.lastName
    }
    set setlastName(value: string){
         this.lastName = value
    }

// get + set
    delivery(item: Publisher){
        if (this.copies == 0) return
        if (Publisher.count == this.items.length || this.copies == 0) return
        this.copies = this.copies -1
    }
    recieve(item: Publisher){
        this.copies = this.copies -1

    }
}
class Library{
    items:Publisher[]
    add(iten: Publisher){
        this.items.push(iten)

    }
    remuve(){
        this.items.pop()
    }
}
