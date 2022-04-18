let h = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let gender = document.querySelectorAll('input[name="gender"]')

let man = document.querySelector('#homem')
let woman = document.querySelector('#muher')

function calculaPeso() {
    
    let h_num = h.value.replace(',', '.')
    h_num = parseFloat(h_num)

    if(gender[0].checked || gender[1].checked){
        
        if(gender[0].checked) {
            let pesoIdeal = (72.7 *h_num) - 58
            h.value = ''
            return peso.innerHTML = `O peso ideal para um homem de ${h_num}m é ${pesoIdeal.toFixed(2)}Kg.`
        }
        if(gender[1].checked) {
            let pesoIdeal = (62.1 *h_num) - 44.7
            h.value = ''
            return peso.innerHTML = `O peso ideal para uma mulher de ${h_num}m é ${pesoIdeal.toFixed(2)}Kg.` 
        }         
    } else {
        alert("A escolha do gênero é obrigatória.")
    }
}

