const n = 12
const a = []

let i = n
while(i !== 0){
    if(n % 2 == 0){
        a.push(2)
        i -= 2
    }
    else if(n % 3 == 0){
        a.push(3)
        i -= 3
    }
    else if(n % 5 == 0){
        a.push(5)
        i -= 5
    }
    else if(n % 7 == 0){
        a.push(7)
        i -= 7
    }

}

console.log(a)    