class Apple{
    miengtao;
    constructor(miengtao){
        this.miengtao = miengtao;
    }
    checkTao(){
        return this.miengtao;
    }
    taoBiAn(){
        if(this.miengtao > 0){
            this.miengtao-=1;
            return true
        }else {
            return false;
        }
    }
}