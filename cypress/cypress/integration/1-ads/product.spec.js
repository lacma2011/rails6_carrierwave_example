/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {

    // reset rails db, clean uploads folder and restart server
    cy.exec('docker exec $(docker ps -q -f "name=rails") bundle exec rake db:reset db:seed');

    cy.exec('docker exec $(docker ps -q -f "name=rails") bundle exec rake cleaning:clear_uploads_folder');

    cy.exec('docker exec $(docker ps -q -f "name=rails") bundle exec pumactl restart');

  })

  it('displays default product name and uploaded file', () => {
    cy.visit('/ads/edit/1');

    cy.get('input[name="title"]').should('have.value', 'product 1');

    // upload image
    cy.get('input[type=file]').selectFile('cypress/fixtures/350x150.png', 
      { action: 'select' });

    cy.get('form').submit();

    // revisit page to check if image is there
    cy.visit('/ads/edit/1');

    var imgUploaded;

    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      imgUploaded = $img;
      // "naturalWidth" and "naturalHeight" are set when the image loads
      expect($img[0].naturalWidth).to.be.eql(350);
      expect($img[0].naturalHeight).to.be.eql(150);
    });

    // doesnt work at the moment to compare base64
    // const image = '350x150.png';
    // cy.fixture(image).then(originalLogoImage => {
    //   cy.get('img')
    //     .then(img=>{
    //       const imgUploadedBase64 = getBase64Image(img[0]);
    //       expect(imgUploadedBase64).to.eql(originalLogoImage);
    //     });
    // });

  })
})

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

