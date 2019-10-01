let itens = [];

function add()
{
    let pessoa = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,        
        grau: document.getElementById("grau").value,
        curso: document.getElementById("curso").value,
        orient: document.getElementById("orient").value,
        tipo: document.getElementById("tipo").value,
        year: document.getElementById("year").value,
        ilustracao: document.getElementById("ilustracao").value,
        fonte: document.getElementById("fonte").value,
        key: document.getElementById("key").value,
    }
    itens.push(pessoa); 
}


function lista()
{
    //let i;
    let textohtml='<table>';

    for(let i=0;i<itens.length;i++)
    {
        textohtml += '<tr>';
        textohtml += '<td>' + 'Autores: ' + itens[i].nome + '</td>';
        textohtml += '<td>' + 'Email: ' + itens[i].email + '</td>';
        textohtml += '<td>' + 'Grau: ' + itens[i].grau + '</td>';
        textohtml += '<td>' + 'Curso: ' + itens[i].curso + '</td>';
        textohtml += '<td>' + 'Orientadores: ' + itens[i].orient + '</td>';
        textohtml += '<td>' + 'Tipo do Trabalho: ' + itens[i].tipo + '</td>';
        textohtml += '<td>' + 'Ano: ' + itens[i].year + '</td>';
        textohtml += '<td>' + 'Ilustração: ' + itens[i].ilustracao + '</td>';
        textohtml += '<td>' + 'Fonte: ' + itens[i].fonte + '</td>';
        textohtml += '<td>' + 'Palavra-Chave: ' + itens[i].key + '</td>';
        textohtml += '</tr>'; 
    }

    textohtml +='</table>';

    document.getElementById("container").innerHTML = textohtml;
}

function limpar(){
    if(document.getElementById('nome').value!="") {
        document.getElementById('nome').value="";
        document.getElementById('email').value="";
        document.getElementById('grau').value="";
        document.getElementById('curso').value="";
        document.getElementById('orient').value="";
        document.getElementById('tipo').value="";
        document.getElementById('year').value="";

        document.getElementById('ilustracao').value="";
        document.getElementById('fonte').value="";
        document.getElementById('key').value="";


        }
        }
