function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Process the data here
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
       let phrase = data.journal.catchPhrase;
       console.log(phrase);
       let phraseElement = document.getElementById("catchPhrase");
       console.log(phraseElement);
       if (phraseElement) {
         phraseElement.insertAdjacentHTML("beforeend", phrase);
       } else {
         console.error("Element with id 'catchPhrase' not found.");
       }
      }
      
      displayCatchPhrase();

      // Other functions can go here if needed
    })
    .catch((error) => console.error('Error reading data:', error));
}

getData();
