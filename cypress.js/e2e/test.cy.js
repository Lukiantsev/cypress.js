
describe('Тестирование авторизации', function () {
	it('Захожу на сайт и проверяю позитивный тест кейс на вход и отображение текста об успешной авторизации', function () {
	cy.visit('https://login.qa.studio/');
	cy.get('#mail').type('german@dolnikov.ru')
	cy.get('#pass').type('iLoveqastudio1')
	cy.get('#loginButton').click();
	cy.get('#message').contains('Авторизация прошла успешно')
})

	it('Проверка логики восстановления пароля', function () {
		cy.visit('https://login.qa.studio/');
		cy.get('#forgotEmailButton').click();
		cy.get('#mailForgot').type('12345@mail.ru');
		cy.get('#restoreEmailButton').click();
		cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible')
})

it('Захожу на сайт и проверяю негативный тест кейс на вход с неверным паролем и отображение текста о неверном пароле', function () {
	cy.visit('https://login.qa.studio/');
	cy.get('#mail').type('german@dolnikov.ru');
	cy.get('#pass').type('iL2oveqastudio1');
	cy.get('#loginButton').click();
	cy.get('#message').contains('Такого логина или пароля нет');
	cy.get('#exitMessageButton > .exitIcon').should('be.visible')
	
	})

it('Захожу на сайт и проверяю негативный тест кейс на вход с неверным логином и отображение текста о неверном пароле', function () {
	cy.visit('https://login.qa.studio/');
	cy.get('#mail').type('german3@dolnikov.ru');
	cy.get('#pass').type('iLoveqastudio1');
	cy.get('#loginButton').click();
	cy.get('#message').contains('Такого логина или пароля нет');
	cy.get('#exitMessageButton > .exitIcon').should('be.visible')

})

it('Захожу на сайт и проверяю негативный тест кейс валидации', function () {
	cy.visit('https://login.qa.studio/');
	cy.get('#mail').type('germandolnikov.ru');
	cy.get('#pass').type('iLoveqastudio1');
	cy.get('#loginButton').click();
	cy.get('#message').contains('Нужно исправить проблему валидации')

})

it('Захожу на сайт и проверяю приведение к строчным буквам', function () {
	cy.visit('https://login.qa.studio/');
	cy.get('#mail').type('GerMan@dolnikov.ru');
	cy.get('#pass').type('iLoveqastudio1');
	cy.get('#loginButton').click();
	cy.get('#message').contains('Авторизация прошла успешно')

})

it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('Best-Friend.ru@yandex.ru');
        cy.get('#password').type('74123Zxc');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })
})
