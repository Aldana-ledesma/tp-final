
        function generarNumeros() {
          const cantidad = document.getElementById('cantidad').value;
          const numerosGenerados = [];
    
          for (let i = 0; i < cantidad; i++) {
            const numero = Math.floor(Math.random() * 1000) + 1; // Números del 1 al 1000
            numerosGenerados.push(numero);
          }
           
          

          const resultDiv = document.getElementById('result');
          resultDiv.textContent = `Números Generados: ${numerosGenerados.join(', ')}`;
        }
    