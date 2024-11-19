const pacientes = [];
let continuar = true;

while(continuar){
    let index;
    let lista = ''
    for(let key in pacientes) {lista += `${Number(key)+1}º ${pacientes[key]}\n`}

    const op = prompt(`
        Lista de Pacientes:
\n${lista}
        1 - Cadastrar usuário
        2 - Editar usuário
        3 - Excluir usuário
        4 - Sair
    `)

    console.log(op);

    switch(op){
        case '1': 
            pacientes.push(prompt('Digite o nome do paciente:'));
            break;
        case '2': 
            index = Number(prompt('Digite o número do paciente que deseja editar:'))-1;
            if (index < 0 || index >= pacientes.length) {
                alert('Paciente não encontrado!');
                break;
            }
            pacientes[index] = prompt('Digite o novo nome do paciente:');
            break;
        case '3': 
            index = Number(prompt('Digite o número do paciente que deseja excluir:'))-1;
            if (index < 0 || index >= pacientes.length) {
                alert('Paciente não encontrado!');
                break;
            }
            pacientes.splice(index, 1);
            break;
        case false:
        case '4': 
            alert('Até logo!');
            continuar = false;
            break;
        default:
            undefined;
    }
}