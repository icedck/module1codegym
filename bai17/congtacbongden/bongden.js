class Bongden{
    status;
    constructor(status){
        this.status = false;
    }
    trangThaiBongden(state){
        this.status = state;
        console.log(`Bong den hien dang: ${this.status?"on":"off"}`);
    }
}