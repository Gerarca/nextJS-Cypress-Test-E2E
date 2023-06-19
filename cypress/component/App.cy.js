import App from "../../src/app/page"

describe('App.cy.js', () => {
  it('Click link Docs', () => {
     cy.mount(<App />);
     cy.get("#idDoc").click();
  })
})