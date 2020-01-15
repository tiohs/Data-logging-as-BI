  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
(function (DOM){
  'use strict';
  function app(){
    var $valorCEP = new DOM('[data-js="input-cep"]');
    var $formCEP = new DOM('[data-js="form-cep"]');
    var $status = new DOM('[data-js="status"]');
    $formCEP.on('submit', handleSubitformCEP);
    var ajax = new XMLHttpRequest();
  
    function handleSubitformCEP(e){
      e.preventDefault();
      ajax.open('get', `http://localhost:3000/bi/${$valorCEP.get()[0].value}`);
      ajax.send();
      $status.get()[0].textContent = 'Carregando...';
      ajax.addEventListener('readystatechange', handReady);
    }
  
   function handReady (){
      if(isRequestOk()){
          return fillCEPfields(); 
      }  
      $status.get()[0].textContent = 'CPF Não encontrado !';
   }
  
    function isRequestOk (){
      return ajax.readyState === 4 && ajax.status === 200;
    }
   function fillCEPfields (){
  
      var dados = JSON.parse(ajax.responseText);;
   
      var $nome = new DOM('[data-js="nome"]');
      $nome.get()[0].textContent = dados.name;
      var $bairro = new DOM('[data-js="Bairro"]');
      $bairro.get()[0].textContent = dados.bairro;
      var $provincia = new DOM('[data-js="provincia"]');
      $provincia.get()[0].textContent = dados.provincia;
      var $municipio = new DOM('[data-js="municipio"]');
      $municipio.get()[0].textContent = dados.municipio;
      var $bi = new DOM('[data-js="bi"]');
      $bi.get()[0].textContent = dados.bi;
      var $idade = new DOM('[data-js="idade"]');
      $idade.get()[0].textContent = dados.idade;
      $status.get()[0].textContent = `CPF - ${dados.bi}`;
      
      document.all[`cod-img`].innerHTML = `
      <img class="img1" src="http://localhost:3000/${dados.fileimg}" alt="" srcset="" >
              `;
   }
   
  }
  /*  Aqui semana 18 */
 app();
})(window.DOM);