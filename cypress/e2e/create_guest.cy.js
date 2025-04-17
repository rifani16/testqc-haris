import createGuestPage from "../support/page-object/createGuestPage"

describe('Verify Create Guest Profile Functionality', () => {
    beforeEach(() => {
        cy.loginUser()
        cy.stepToCreateGuest()
    })

    it('Create Guest Profile with Required Field Only', () => {
        cy.fixture('guests.json').then((guests) => {
            const guestData = guests[0]
            createGuestPage.fillCreateGuestFormRequired(guestData.lastName, guestData.title, guestData.gender, guestData.country, guestData.nation)
        })
        createGuestPage.clickSaveButton()
        createGuestPage.clickConfirmButton()
        createGuestPage.verifyCreateGuest()
    })

    it('Create Guest Profile with Required Field and Valid Mobile Number', () => {
        cy.fixture('guests.json').then((guests) => {
            const guestData = guests[1]
            createGuestPage.fillCreateGuestFormRequired(guestData.lastName, guestData.title, guestData.gender, guestData.country, guestData.nation)
            cy.get('[data-cy="account-information-tab"]').click()
            createGuestPage.inputMobileNumber(guestData.mobileNumber)
        })
        createGuestPage.clickSaveButton()
        createGuestPage.clickConfirmButton()
        createGuestPage.verifyCreateGuest()
    })

    it('Empty Form', () => {
        createGuestPage.clickSaveButton()
        cy.contains('Field is required').should('be.visible')
    })

    it('Create Guest Profile with Required Field and Invalid Mobile Number', () => {
        cy.fixture('guests.json').then((guests) => {
            const guestData = guests[1]
            createGuestPage.fillCreateGuestFormRequired(guestData.lastName, guestData.title, guestData.gender, guestData.country, guestData.nation)
        })
        cy.get('[data-cy="account-information-tab"]').click()
        createGuestPage.inputMobileNumber('08abc')
        cy.contains('Only numbers, +, and - are allowed').should('be.visible')
    })
})