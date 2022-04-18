h = document.querySelector('#altura');
peso = document.querySelector('#peso');
gender = document.querySelectorAll('input[name="gender"]')

man = document.querySelector('#homem')
woman = document.querySelector('#muher')

function calculaPeso() {
    h_num = parseFloat(h.value)

    if(gender[0].checked || gender[1].checked){
        
        if(gender[0].checked) {
            pesoIdeal = (72.7 *h_num) - 58
            return peso.innerHTML = `Seu peso ideal para um homem de ${h_num}m é ${pesoIdeal.toFixed(2)}Kg.`
        }
        if(gender[1].checked) {
            pesoIdeal = (62.1 *h_num) - 44.7
            return peso.innerHTML = `Seu peso ideal para uma mulher de ${h_num}m é ${pesoIdeal.toFixed(2)}Kg.` 
        } 
            
    
    } else {
        alert("A escolha do gênero é obrigatória.")
    }
}

