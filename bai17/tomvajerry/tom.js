class Cat{
    name;weight;speed;

    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    soundCat(mess){
        console.log(`Con meo ${this.name} keu ${mess}`);
    }

    catchMouse(mouse){
        if(this.speed>mouse.speed){
            console.log(`tao da bat dc may`)
            mouse.soundMouse("bi bat")
        }else {
            mouse.soundMouse("tuoi lol")
        }
    }
    eatMouse(mouse){
        if (mouse.status){
            this.soundCat("An chuot " + mouse.name)
            mouse.status = false;
            this.weight += mouse.weight;
        }
    }
}
