class Congtac{
    status;ketnoi;

    constructor(status, ketnoi) {
        this.status = false;
        this.ketnoi = null;
    }
    ketNoiBongDen(device){
        this.ketnoi = device;
    }
    turnOn(){
        this.status = true;
        if(this.ketnoi){
            this.ketnoi.trangThaiBongden(true);
        }
    }
    turnOff(){
        this.status = false;
        if(this.ketnoi){
            this.ketnoi.trangThaiBongden(false);
        }
    }
    chuyendoi(){
        if (this.status){
            this.turnOff();
        }else{
            this.turnOn();
        }
    }
}