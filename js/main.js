const teamList = [];

let studente1 = {};
studente1.nome = "Wayne Barnett";
studente1.ruolo = "Founder & CEO"
studente1.immagine = "wayne-barnett-founder-ceo.jpg"
teamList.push(studente1);

let studente2 = {};
studente2.nome = "Angela Caroll";
studente2.ruolo = "Chief Editor"
studente2.immagine = "angela-caroll-chief-editor.jpg"
teamList.push(studente2)

let studente3 = {};
studente3.nome = "Walter Gordon";
studente3.ruolo = "Office Manager"
studente3.immagine = "walter-gordon-office-manager.jpg"
teamList.push(studente3);

let studente4 = {};
studente4.nome = "Angela Lopez";
studente4.ruolo = "Social Media Manager"
studente4.immagine = "angela-lopez-social-media-manager.jpg"
teamList.push(studente4);

let studente5 = {};
studente5.nome = "Scott Estrada";
studente5.ruolo = "Developer"
studente5.immagine = "scott-estrada-developer.jpg"
teamList.push(studente5);

let studente6 = {};
studente6.nome = "Barbara Ramos";
studente6.ruolo = "Graphic Designer"
studente6.immagine = "barbara-ramos-graphic-designer.jpg"
teamList.push(studente6);

for(i=0; i<teamList.length; i++){
    console.log(teamList[i].nome, teamList[i].ruolo);
}