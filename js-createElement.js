<script defer>
        // pegando link da url
        var url = "http://localhost:3000/tb_login"
        var linha = document.querySelector("#dados");
        console.log(linha)

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then( data => {
                console.log(data);

                 data.forEach(item => {
                    var id = document.createElement("span");
                    var email = document.createElement("p");
                    var senha = document.createElement("strong");

                    id.textContent = item.id;
                    email.textContent = item.email;
                    senha.textContent = item.senha;

                    // linha.appendChild(id, email)
                    linha.append(id, email, senha)
                });
                
            })
    </script>
