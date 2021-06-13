
var items = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);


function sonuc() {
    var item = items[Math.floor(Math.random() * items.length)];
    var inp = document.getElementById("inputsonuc");
    inp.value = item;
    var tahmin = document.getElementById("inputtahmin").value;
    if (tahmin == inp.value) {
        alert("gj");
    } else if (tahmin !== inp.value){
        alert("try again!");
    } else { document.getElementById("inputtahmin").value = '';}
}

