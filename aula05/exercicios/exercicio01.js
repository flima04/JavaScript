const tarefas = ["Arrumar cama", "lavar pratos", "varrer casa"];

function gerenciarTarefas ( shores, action, name) {
    switch (action) {
        case "adicionarInicio":
            tarefas.unshift(name);
            break;
        case "adicionarFim":
            tarefas.push(name);
            break;
        case "removerInicio":
            tarefas.shift();
            break;
        case "removerFim":
            tarefas.pop();
            break;
    }
}


gerenciarTarefas(tarefas, "removerInicio");

console.log(tarefas);

gerenciarTarefas(tarefas, "adicionarFim", "regar plantas");

console.log(tarefas);

gerenciarTarefas(tarefas, "adicionarInicio", "Passear com cachorro")

console.log(tarefas);

gerenciarTarefas(tarefas, "removerFim");

console.log(tarefas);
