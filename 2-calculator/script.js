/*
1. pobranie wszystkich potrzebnych klas/elementów
    a. buttony z number
    b. buttony z operatorami
    c. input
(pytanie czy może jako array z róznymi nazwami np. 1 2 3.. 7 żeby nie spamować z 100 przyciskami)

2. w momencie kiedy kliknie się jakąkolwiek liczbę zostaje ona wpisana w input value, ale nie dodaje się do aktualnej liczby tylko idzie na koniec (jak string, może niech będą tutaj narazie liczby jako string)

3. w momencie kiedy da się +  
    a. znika aktualna value w input i pojawia się nic (nie zero) (wartość która znikneła musi być przechowywana w jakims const)
    b. teraz możemy wpisać nową wartość (również musi się zapisywać w const)
    c. klikając = dodają się i wyświetlają w inpucie dane wartości 
    d. możemy znów kliknąć + i znowu coś dodać (po kliknieciu wartość sum z ostatniej akcji musi być zapisana jako 'przed dodaniem drugiej')

4. wszelkie inne operatory na podstawie tego wyżej i można wykonywać różne działania, najpierw dodać potem odjąć itd

5. AC resetujące wszystkie zapisane wartości input value znowu równe 0

6. wartości po 0,1 przecinku 

7. wyświetlanie ostatnich wyników zboku kalkulatora
*/

function display(val){
    document.getElementById('result').value += val
    return val
}

function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}

function clearScreen(){
    document.getElementById('result').value = ''
}