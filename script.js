function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      
      console.log('Data retrieved from JSON file:', data);

      function displayJournalTitle() {
       let title = data.journal.nomJournal;
       console.log(title);
       let titleElement = document.getElementById("title");
       console.log(titleElement);
       if (titleElement) {
         titleElement.insertAdjacentHTML("beforeend", title);
       } else {
         console.error("Element with id 'title' not found.");
       }
      }
      
      displayJournalTitle();

      function displayCatchPhrase() {
       let phrase = data.journal.phraseAccroche;
       console.log(phrase);
       let phraseElement = document.getElementById("phraseAccroche");
       console.log(phraseElement);
       if (phraseElement) {
         phraseElement.insertAdjacentHTML("beforeend", phrase);
       } else {
         console.error("Element with id 'catchPhrase' not found.");
       }
      }
      
      displayCatchPhrase();

      function displaytexteAppelAction() {
        let phrase = data.journal.texteAppelAction;
        console.log(phrase);
        let phraseElement = document.getElementById("texteAppelAction");
        console.log(phraseElement);
        if (phraseElement) {
          phraseElement.insertAdjacentHTML("beforeend", phrase);
        } else {
          console.error("Element with id 'texteAppelAction' not found.");
        }
      }

      displaytexteAppelAction();

      function displayMainArticle() {
        let phrase = data.journal.articlePrincipal;
        console.log(phrase);
        let phraseElement = document.getElementById("articlePrincipal");
        console.log(phraseElement);
        if (phraseElement) {
          phraseElement.insertAdjacentHTML("beforeend", phrase);
        } else {
          console.error("Element with id 'texteAppelAction' not found.");
        }
      }

      displayMainArticle();

      function displayArticleTitle() {
        let phrase = data.journal.titre;
        console.log(phrase);
        let phraseElement = document.getElementById("titre");
        console.log(phraseElement);
        if (phraseElement) {
          phraseElement.insertAdjacentHTML("beforeend", phrase);
        } else {
          console.error("Element with id 'titre' not found.");
        }
      }

      displayArticleTitle();
      
    })
    .catch((error) => console.error('Error reading data:', error));
}

getData();
