const pacientes = []

function executarMenu(){
    return prompt(`
Lista de Pacientes:

${pacientes.map((paciente,key)=> `${Number(key)+1}º ${paciente}\n`).join('\n')}

1 - Cadastrar usuário
2 - Editar usuário
3 - Excluir usuário
4 - Sair
    `)
}

function cadastrar(){
    pacientes.push(prompt('Digite o nome do paciente:'));
    main();
}

function editar(){
    const index = Number(prompt('Digite o número do paciente que deseja editar:'))-1
    pacientes[index] = prompt('Digite o novo nome do paciente:')
    main();
}

function excluir(){
    const index = Number(prompt('Digite o número do paciente que deseja excluir:'))-1
    pacientes.splice(index, 1)
    main();
}

function main(){
    const controller = {
        1: cadastrar,
        2: editar,
        3: excluir,
        4: alert('Até logo!')
    }

    controller[executarMenu()]();
}

main();