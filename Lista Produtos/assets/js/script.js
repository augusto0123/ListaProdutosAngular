const listaProdutos = [
    { nome: "Mouse USB", preco: "50.99" },
    { nome: "Teclado Gamer", preco: "120.00" },
    { nome: "Monitor HD", preco: "900.25" },
    { nome: "Webcam", preco: "150.76" },
    { nome: "Headset Bluetooth", preco: "250.99" }
  ];
  
  //let produtosAtuais = listaProdutos;
  
  function exibirProdutos(produtos) {
    document.getElementById("corpo-tabela").innerHTML = produtos
      .map(produto => 
        `<tr>
            <td>${produto.nome}</td>
            <td>${parseFloat(produto.preco).toFixed(2)}
            </td>
        </tr>`)
        
      .join('');
  }
  
  document.getElementById("filtro").addEventListener("input", e => {
    exibirProdutos(listaProdutos.filter(p => p.nome.toLowerCase().includes(e.target.value.toLowerCase())));
  });
  
  document.getElementById("ordenar-menor-preco").addEventListener("click", () => {
    exibirProdutos([...listaProdutos].sort((a, b) => a.preco - b.preco));
  });
  
  document.getElementById("ordenar-maior-preco").addEventListener("click", () => {
    exibirProdutos([...listaProdutos].sort((a, b) => b.preco - a.preco));
  });
  
  exibirProdutos(listaProdutos);
  