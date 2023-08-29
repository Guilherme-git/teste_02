const ul = document.querySelector('ul')
const name = document.getElementById('name')
const img = document.getElementsByClassName('img')[0]
const nameCard = document.getElementsByClassName('name_card')[0]
const btnProfile = document.getElementsByClassName('btnProfile')[0]
const card = document.getElementsByClassName('card')[0]

function search() {
    if(!name.value) {
        return alert("Informe o nome do usuário")
    }
    fetch(`https://api.github.com/users/${name.value}/repos`,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3.raw',
            'Authorization': 'token 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'
        }
    }).then(async res => {
        if(!res.ok) {
            return alert("Usuário não encontrado")
        }

        var data = await res.json()

        img.src=data[0].owner.avatar_url
        nameCard.innerHTML = data[0].owner.login
        card.style.display='block'

        btnProfile.addEventListener("click", function () {
            window.open(data[0].owner.html_url,'_blank')

        });

        data.map(item => {
            let li = document.createElement('li')

            li.innerHTML = `
                    <a href=${item.svn_url} target="_blank">${item.name.toUpperCase()}</a>
                    <span>URL: ${item.url}</span>
                    <span>Data Criação: ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
                `
            ul.appendChild(li)

        })

    }).catch(e => alert("Usuário não encontrado"))
}


