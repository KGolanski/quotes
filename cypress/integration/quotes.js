describe('Userlane Training task', () => {

  beforeEach(function(){
  cy.visit('https://agoldoffish.wordpress.com/criminal-minds-opening-and-closing-quotes');
  })
    

    it('lists quotes and save it as json file', () => {

      cy.url().should('include', '/criminal-minds-opening-and-closing-quotes');
     
      cy.get('[class="entry-content"] p').then((quotes)=>{
 
      const rr = new RegExp(/\u201C[\s\S]+?\u201D/, 'g');
      var results = (quotes.text().match(rr));
      var temp_Arr = new Array(results);
        
      cy.writeFile('cypress/fixtures/data.json', {temp_Arr});
      cy.readFile('cypress/fixtures/data.json').should('exist');
      })

      }) 
    })
