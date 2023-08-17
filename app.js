let string = "";
const btn = document.querySelectorAll('button');
arr = Array.from(btn);
arr.forEach((element) => {
    element.addEventListener('click', function(e){
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = string.substring(0,string.length-1);
            string = str;
            document.querySelector('input').value = string;
        }
        
        else{
            string = string+e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});