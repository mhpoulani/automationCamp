describe('first', () => {
  // it('6 - keyboard actions > types', () => {
  //   cy.visit('https://play1.automationcamp.ir/forms.html');
  //   cy.wait(500)
  //   cy.get("input[type=checkbox]").check(['JAVA','PYTHON','JAVASCRIPT'])

  // });
  it('2 - dialog', () => {
    cy.visit('https://material.angular.dev/components/dialog/examples');
    cy.get('.mat-primary > .mat-mdc-button-touch-target').click({
      force: true,
    });
    cy.get(
      '.docs-navbar-header-item-selected > .mat-mdc-button-touch-target'
    ).then((cdk) => {
      cy.get('dialog-data-example > .mdc-button > .mdc-button__label').click();
      cy.wait(1000);
      let rect = cdk[0].getBoundingClientRect();
      cy.document().then((doc) => {
        console.log(doc);

        doc.elementFromPoint(rect.x, rect.y).click();
      });
    });
  });
  it('wrap', () => {
    cy.visit('https://play2.automationcamp.ir/index.html');
    cy.scrollTo('bottom');
    cy.get('tr').each(($row, index, $list) => {
      if (index !== 0) {
        cy.wrap($row).within(() => {
          cy.get('td').each(function ($cellData, cellIndex, $cellList) {
            cy.log($cellData.text());
          });
        });
      }
    });
  });
  it.only('using array', () => {
    cy.visit('https://play2.automationcamp.ir/index.html');
    cy.scrollTo('bottom');
    let list=[]
    cy.get('tbody th').each(($row, index, $list) => {
      if($row.text()==='Firstname'){
        cy.get(`tr>td:nth-child(${index+1})`).each(($cellData, cellIndex, $cellList) => {
          list.push($cellData.text())
        })}
    }).then(()=>{      
      cy.log(JSON.stringify(list))
      expect(list).to.contain('Richard')
    })
  });
});
