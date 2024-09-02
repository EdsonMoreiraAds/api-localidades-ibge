function pegarRegioes() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
        .then((response) => response.json())
        .then((regioes) => {
            for (let i = 0; i <= regioes.length - 1; i++) {
                regiao.innerHTML += `<option value="${regioes[i].id}">${regioes[i].nome}</option>`
            }                
        })
}

function pegarEstados(idRegiao) {
    estado.innerHTML = ' <option selected disabled>Selecione a Estado</option>'
     cidades.innerHTML = ""  
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idRegiao}/estados`)
        .then((response) => response.json())
        .then((regioes) => {
            for (let i = 0; i <= regioes.length - 1; i++) {
                estado.innerHTML += `<option value="${regioes[i].id}">${regioes[i].nome}</option>`
            }                
        })
}

regiao.onchange = (event) => {
    estado.innerHTML = '<option>Carregando...</option>';
    pegarEstados(event.target.value)
}

function pegarCidades(idEstado) {
    cidade.innerHTML = '<option selected disabled>Selecione a Cidade</option>'
       fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`)
        .then((response) => response.json())
        .then((regioes) => {
            for (let i = 0; i <= regioes.length - 1; i++) {
                cidades.innerHTML += `<option>${regioes[i].nome}</option>`
            }          
        })
}

estado.onchange = (event) => {
    pegarCidades(event.target.value)
}


pegarRegioes()


 
