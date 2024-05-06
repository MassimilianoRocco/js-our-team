const teamList = [];

let membro1 = {};
membro1.nome = "Wayne Barnett";
membro1.ruolo = "Founder & CEO"
membro1.immagine = "wayne-barnett-founder-ceo.jpg"
teamList.push(membro1);

let membro2 = {};
membro2.nome = "Angela Caroll";
membro2.ruolo = "Chief Editor"
membro2.immagine = "angela-caroll-chief-editor.jpg"
teamList.push(membro2)

let membro3 = {};
membro3.nome = "Walter Gordon";
membro3.ruolo = "Office Manager"
membro3.immagine = "walter-gordon-office-manager.jpg"
teamList.push(membro3);

let membro4 = {};
membro4.nome = "Angela Lopez";
membro4.ruolo = "Social Media Manager"
membro4.immagine = "angela-lopez-social-media-manager.jpg"
teamList.push(membro4);

let membro5 = {};
membro5.nome = "Scott Estrada";
membro5.ruolo = "Developer"
membro5.immagine = "scott-estrada-developer.jpg"
teamList.push(membro5);

let membro6 = {};
membro6.nome = "Barbara Ramos";
membro6.ruolo = "Graphic Designer"
membro6.immagine = "barbara-ramos-graphic-designer.jpg"
teamList.push(membro6);

let membersList = document.getElementById("list");
let card;
let infoContainer;
let imgContainer;
let nomeMembro;
let ruoloMembro;
let immagineAllegata;

function stampaInPagina(){
    for(i=0; i<teamList.length; i++){
        console.log(teamList[i].nome, teamList[i].ruolo);

        card = document.createElement("div");
        card.className = "flex box p-2";
        membersList.append(card);

        imgContainer= document.createElement("div");
        card.append(imgContainer);

        immagineAllegata= document.createElement("img");
        immagineAllegata.src="img/" + teamList[i].immagine;
        immagineAllegata.className ="imageTeam"; 
        imgContainer.append(immagineAllegata);

        infoContainer = document.createElement("div");
        infoContainer.className= "flex column justify-center align-center w-100";
        card.append(infoContainer);

        nomeMembro = document.createElement("p");
        nomeMembro.innerHTML = "Nome: " + teamList[i].nome;
        infoContainer.append(nomeMembro);

        ruoloMembro = document.createElement("p");
        ruoloMembro.innerHTML = "Ruolo: " + teamList[i].ruolo;
        infoContainer.append(ruoloMembro);

    }
}