export class User {
    private age: number
    public firstname: string = ""
    public lastname: string = ""

    public static BIRTH_YEAR = 2000

    constructor(firstname: string = "", lastname: string = "", age: number = 0) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    setFirstname(firstname: string) {
        this.firstname = firstname
    }

    setLastname(lastname: string) {
        this.lastname = lastname
    }

    setAge(age: number){
        this.age = age
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`.trim()
    }

    getAge() {
        return this.age
    }

}
