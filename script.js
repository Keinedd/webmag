function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
       console.log(data);

       function displayjournaltitle(){
        let title = data.journal.nomJournal;
        console.log(title);
        let titleID = document.getElementById("title");
        console.log(titleID);
        titleID.insertAdjacentHTML("beforeend", title);
       }
       displayjournaltitle();

       function displaycatchphrase(){
        let phrased = data.journal.catchPhrase;
        console.log(Phrased);
        let titleID = document.getElementById("Phrased");
        console.log(titleID);
        titleID.insertAdjacentHTML("beforeend",phrased);
       }
       
       

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici