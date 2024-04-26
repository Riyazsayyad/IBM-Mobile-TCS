// Custom Application Logic

class AppCustomizations {
    applicationInitialized(app) {
      this.app = app;
    }
 
    firstFunction(){
      alert("Focus is removed from custom field.")
   }

   generateQuote(){
      fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        rand = Math.floor(Math.random() * 10)
        return data[ rand ]
      });
   }
  
  }

  export default AppCustomizations;
 