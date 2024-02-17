import showDog from "./showDog.js"
class Dog {
    constructor(cute,name,color,age) {
        this.cute = cute
        this.name = name
        this.color = color
        this.age = age
    }
}
const dog1 = new Dog(true,"Barry","Brown",10)
const dog2 = new Dog(true,"Riley","White",2)
const dog3 = new Dog(true,"Kiri","Ombre",1)


showDog()