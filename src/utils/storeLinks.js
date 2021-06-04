import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os Links Salvos
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

//Salvar um link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //Se tiver algum link salvo com ess mesmo ID
    const hasLink = linksStored.some( link => link.id === newLink.id );

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA LISTA.');
        return; //Parar execução aqui...
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    console.log('LINK SALVO COM SUCESSO.');
}

//Deletar algum link especifico
export async function deleteLink(Links, id){
    s
}