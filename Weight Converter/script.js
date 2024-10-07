const  input = document.querySelector('#input')
const  output = document.querySelector('#output')


input.addEventListener('input', function() {
    let val = input.value;
    let ans = val * 2.2;
    output.innerHTML = ans.toFixed(2);
})