<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset("css/index.css")}}">
    <title>Teste 02</title>
</head>
<body>
<main>
    <h1>GitHub API</h1>

    <div style="display: flex; flex-direction: row; width: 350px; justify-content: space-between; align-self: center">
        <input type="text" id="name" placeholder="Informe o nome de usuário">
        <button class="btnSearch" onclick="search()"><b>Pesquisar</b></button>
    </div>

    <ul>
        <div class="card">
            <img class="img">
            <h1 class="name_card"></h1>
            <p><button class="btnProfile">Abrir perfil</button></p>
        </div>
    </ul>
</main>

<script src="{{asset("js/index.js")}}"></script>

</body>
</html>
