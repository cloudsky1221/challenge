const here = document.querySelector("p");

// const ghh = there.innerText;

class PasswordGenerator{
    constructor(len){
        this.len = len;
        this.caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.low = "abcdefghijklmnopqrstuvwxyz";
        this.num = "1234567890";
        this.syms = `"!@#$%^&*()_+{}|:"<>?[]-=;',./`;
        this.newPass = ""
    };
    capital(){
        return this.caps[Math.floor(Math.random()*26)];
    };
    lower(){
        return this.low[Math.floor(Math.random()*26)];
    };
    numbers(){
        return this.num[Math.floor(Math.random()*10)];
    };
    symbols(){
        return this.syms[Math.floor(Math.random()*this.syms.length)];
    };
    ran(){
        const arr = [this.capital(),this.lower(),this.numbers(),this.symbols()]
        return arr[Math.floor(Math.random()*arr.length)]
    }
    generate(){
        for (let i=0;i<this.len;i++){
            // console.log(i)
            this.newPass += this.ran()
        }
        return here.innerText = `${this.newPass}`;
    }
}

function strt(){
    const there = document.querySelector("select").selectedIndex;
    const thr = document.querySelectorAll("option")[parseInt(there)].innerText;
    const one = new PasswordGenerator(thr).generate();
};