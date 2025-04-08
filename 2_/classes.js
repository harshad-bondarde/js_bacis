// const cat={
    //     name:"meowi",
    //     legcount:2,
    //     speaks:"meow"
    // }
    

class animal{
    constructor(name,legcount,speaks){
        this.name=name;
        this.legcount=legcount;
        this.speaks=speaks;
    }

    static mytype(){ //can be called using class name only
        console.log("animal")
    }
    speak(){
        console.log("hi there "+ this.speaks)
    }
}
// const dog={
//     name:"doggie",
//     legcount:2,
//     speaks:"meow bhow"
// }
let dog=new animal("dog",4,"bhow bhow")
let cat=new animal("cat",4,"meow meow")
dog.speak()
cat.speak()
animal.mytype() //called using animal name



