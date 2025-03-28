class Mouse{
    name;weight;speed;status;

    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }
    soundMouse(mess){
        console.log(`Con chuot ${this.name} keu ${mess}`);
    }
}