document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем действие по умолчанию

    // Функция для проверки валидности поля и отображения сообщения об ошибке
    function validateField(fieldId, errorId) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(errorId);

        if (!field.checkValidity()) {
            field.classList.add('error');
            error.textContent = field.validationMessage;
            return false;
        } else {
            field.classList.remove('error');
            error.textContent = '';
            return true;
        }
    }

    // Очищаем сообщения об ошибках и удаляем классы ошибок
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        const inputElements = document.querySelectorAll('.form-input');

        errorElements.forEach(function (error) {
            error.textContent = '';
        });

        inputElements.forEach(function (input) {
            input.classList.remove('error');
        });
    }

    // Проверка валидности полей
    const isNameValid = validateField('name', 'name-error');
    const isEmailValid = validateField('email', 'email-error');
    const isAgeValid = validateField('age', 'age-error');
    const isProfessionValid = validateField('profession', 'profession-error');
    const isPasswordValid = validateField('password', 'password-error');
    const isConfirmPasswordValid = validateField('confirmPassword', 'confirmPassword-error');

    // Проверка согласия с обработкой данных
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const agreeCheckboxError = document.getElementById('agreeCheckbox-error');

    if (!agreeCheckbox.checked) {
        agreeCheckboxError.textContent = 'Пожалуйста, подтвердите согласие на обработку данных.';
        agreeCheckbox.classList.add('error');
    } else {
        agreeCheckboxError.textContent = '';
        agreeCheckbox.classList.remove('error');
    }

    // Если все поля прошли валидацию, выводим значения в консоль и очищаем форму
    if (isNameValid && isEmailValid && isAgeValid && isProfessionValid && isPasswordValid && isConfirmPasswordValid && agreeCheckbox.checked) {
        console.log('Имя:', document.getElementById('name').value);
        console.log('Email:', document.getElementById('email').value);
        console.log('Возраст:', document.getElementById('age').value);
        console.log('Пол:', document.querySelector('input[name="gender"]:checked').value);
        console.log('Профессия:', document.getElementById('profession').value);
        console.log('Пароль:', document.getElementById('password').value);
        console.log('Согласие на обработку данных: Да');

        // Очищаем форму
        document.getElementById('registrationForm').reset();
        clearErrors();
    }
});