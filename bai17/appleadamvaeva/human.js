class Human{
    name;gender;weight;
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getName() {
        return this.name;
    }
    getGender() {
        return this.gender;
    }
    getWeight() {
        return this.weight;
    }
    soundHuman(mess) {
        console.log(`${this.name} noi ${mess}`);
    }
    eatApple(apple){
        if (apple.checkTao()){
            if (apple.taoBiAn()){
                this.weight += 1;
                console.log(`${this.name} da an 1 mieng`);
                console.log(`Can nang moi cua ${this.name} la ${this.weight}`);
                console.log(`Khoi luong con lai cua qua tao la ${apple.checkTao()}`);
                return true;
            }
        }else{
            console.log(`${this.name} ko the an vi da het tao`);
            return false;
        }
    }
    humanCheckTao(apple){
        console.log(`${this.name} kiem tra: Khoi luong con lai cua qua tao la ${apple.checkTao()}`);
    }
}