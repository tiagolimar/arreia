async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

async function main(){
    const dados = await getData();
    imprimir(dados.map(user=>criarCard(user)).join(''));
    imprimir(`<p class="w-full">${Object.keys(dados[0])}</p>`)
}

function criarCard(user){
    return `
        <div class="container flex-1 relative border border-black rounded bg-white hover:shadow-lg hover:bg-stone-200 pointer-cursor duration-200 flex flex-col items-center p-4 w-auto mx-auto">
            <div class="absolute top-2 right-2 border border-pink-300 rounded-full w-8 h-8 flex items-center justify-center bg-pink-100">
                ${user.id}
            </div>
            <a href="${user.website}" class="hover:text-pink-800 duration-200">
                <h2 class="text-2xl">${user.name}</h2>
            </a>
            <h3 class="text-stone-500">${user.username}</h3>
            <div class="flex gap-1">
                <span>${user.email}</span>
                <span>|</span>
                <span class="text-nowrap">${user.phone}</span>
            </div>
        </div>
    `;
}

main();