function display(val){
    document.getElementById('result').value += val
    return val
}

function clearScreen(){
    document.getElementById('result').value = ''
}

function clearLast() {
    document.getElementById('result').value = document.getElementById('result').value.slice(0, -1)
}

function solve() {
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}