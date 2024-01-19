var btn = document.getElementById('btn');
function calc(){
    var right='';
    var _table = parseInt(document.getElementById('table').value);
    if(_table > 0){
        for(let i = 1; i<=10; i++){
            right += (_table + " x " + i + " = " + _table*i +' <br> ')
        }
    }else {
      right =  ("Please enter a number greater than 0..");
    }
        document.getElementById('right-box').innerHTML = right;
    }
