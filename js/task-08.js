// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, 
// а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


const refs = {
    formRef: document.querySelector('.login-form'),
    emailInp: document.querySelector('input[name="email"]'),
    passwordInp: document.querySelector('input[name="password"]'),
    submitBtn: document.querySelector('button[type="submit"]'),
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email && password) {
        const data = {
            email,
            password,
        }
        console.log(data);
        refs.formRef.reset();
        return
    }
    alert('Все поля должны быть заполнены');
}

refs.formRef.addEventListener('submit', onFormSubmit);