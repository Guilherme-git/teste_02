# teste 02

Este teste realiza uma consulta na api do github, trazendo as informações do usuário informado no **_input_**.


No teste consta uma tabela para armazenar as pesquisas feitas pelo cep e também um input html para o usuário digitar o cep.

No momento que o usuário terminar de digitar o nome de usuário que deseja, e clicar no botão de cor verde chamado **PESQUISAR**, é feita uma validação se o valor do input não está vazio. Caso tudo ocorrer bem, é então realizada a consulta na api utilizando o fetch, caso o usuário não seja encontrado, é mostrada a mensagem para o usuário, caso o usuário for encontrado, é mostrado o nome do usuário, um botão para acessar o perfil do usuário no github e por último, uma listagem de todos os repositórios do usuário.

---

## Descrição dos métodos criados no arquivo javascript

### Método *search(cep)* - Esse método é responsável por realizar a consulta na api utilizando o fetch. Caso o perfil no github não seja encontrado, é mostrada uma mensagem para o usuário. Se tudo ocorrer como o previsto, é mostrado algumas informações que retorna da api

---

## Descrição das funcionalidades dos botões

### Botão *Pesquisar* - Esse botão é reponsável por chamar o método search() que realizara a consulta na api do github, e também validar se o valor digitado no input esta preenchido
