window.onload = tratar_eventos;

function tratar_eventos() {

    document.getElementById("mostrar-formulario-cadastro").onclick = function() {
        this.style.display = 'none';
        document.getElementById("formulario-cadastro-aluno").style.display = 'block';

        return false;
    }

    document.getElementById("esconde-form-cadastro").onclick = function() {
        document.getElementById("formulario-cadastro-aluno").style.display = 'none';
        document.getElementById("mostrar-formulario-cadastro").style.display = 'block';
    }

    document.getElementById("form-cadastro-livro").onsubmit = function() {
        var name = document.getElementById("txt_name").value;
        var email = document.getElementById("txt_email").value;
        var telefone = document.getElementById("txt_telefone").value;
        var cpf = document.getElementById("txt_cpf").value;
        var cidade = document.getElementById("txt_cidade").value;

        var td_name = document.createElement("td");
            td_name.appendChild(document.createTextNode(nome));
        var td_email = document.createElement("td");
            td_email.appendChild(document.createTextNode(email));
        var td_telefone = document.createElement("td");
            td_telefone.appendChild(document.createTextNode(telefone));
        var td_cpf = document.createElement("td");
            td_cpf.appendChild(document.createTextNode(cpf));
        var td_cidade = document.createElement("td");
            td_cidade.appendChild(document.createTextNode(cidade));

        var tr =document.createElement("tr");
            tr.appendChild(td_name);
            tr.appendChild(td_email);
            tr.appendChild(td_telefone);
            tr.appendChild(td_cpf);
            tr.appendChild(td_cidade);

        document.getElementById("tabela-alunos").getElementsByTagName("tbody")[0].appendChild(tr);

        document.getElementById("formulario-cadastro-aluno").style.display = 'none';
        document.getElementById("mostrar-formulario-cadastro").style.display = 'block';

        ativar_botoes_exclusao();

        return false;
    }
}

