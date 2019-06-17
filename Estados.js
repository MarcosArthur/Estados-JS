class Estados {

  constructor() {
    this.uf = [];
    this.templeite = " ";
    this.select = document.querySelector('.estados');
    this.getUfArray();
   
  }

  mountTempleite() {
    this.uf.forEach(e => {
      this.templeite += `<option value="${e.sigla}">${e.sigla}</option>`;
    })

    this.select.innerHTML = this.templeite;

  }

  getUfArray() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(response => {
      this.uf = response;
      this.mountTempleite();
    })
    .catch(() => {
      new Error('Erro ao solicitar Dados Ao Servidor');
    })
  }

}