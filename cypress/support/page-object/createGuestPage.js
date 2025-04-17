class CreateGuestPage {
    lastName = '[data-cy="lastname-input-individual"]'
    firstName = '[data-cy="firstname-input-individual"]'
    title = '[data-cy="title-input-individual"]'
    gender = '[data-cy="gender-input-individual"]'
    country = '[data-cy="country-input-individual"]'
    nation = '[data-cy="nation-input-individual"]'
    mobileNumber = '[data-cy="mobile-number-input-individual"]'
    saveButton = '[data-cy="btn-submit-dialogFooter"]'
    confirmButton = '[data-autofocus="true"] > .q-btn__wrapper > .q-btn__content'
    succesNotif = '.q-notifications__list'

    fillCreateGuestFormRequired(lastName, title, gender, country, nation) {
        this.inputLastName(lastName)
        this.selectTitle(title)
        this.selectGender(gender)
        this.selectCountry(country)
        this.selectNation(nation)
    }

    inputLastName(lastName) {
        cy.get(this.lastName).type(lastName)
    }

    selectTitle(title) {
        cy.get(this.title).click()
        cy.get(this.title).type(title)
        cy.contains('.q-item__label', title).click()
    }

    selectGender(gender) {
        cy.get(this.gender).click()
        cy.get(this.gender).type(gender)
        cy.contains('.q-item__label', gender).click()
    }

    selectCountry(country) {
        cy.get(this.country).click()
        cy.get(this.country).type(country)
        cy.contains('.q-item__label', country).click()
    }

    selectNation(nation) {
        cy.get(this.nation).click()
        cy.get(this.nation).type(nation)
        cy.contains('.q-item__label', nation).click()
    }

    inputMobileNumber(mobileNumber) {
        cy.get(this.mobileNumber).type(mobileNumber)
    }

    clickSaveButton() {
        cy.get(this.saveButton).click()
    }

    clickConfirmButton() {
        cy.get(this.confirmButton).click()
    }

    verifyCreateGuest() {
        cy.get(this.succesNotif).should('be.visible')
    }

}

export default new CreateGuestPage()