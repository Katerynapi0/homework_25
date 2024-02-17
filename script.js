'use strict'
/*Створити клас SuperMath.

Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. 
Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. 
Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath. 

Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> рахує*/

class SuperMath{
    check(obj){
        const result = this.calculate(obj.X, obj.Y, obj.znak);
        if(isNaN(result) || result === undefined){
            alert(`Помилка. Ви ввели некоректні дані.`)
            this.input();
        }else{
            const confirmOperation = confirm(`Ви впевнені, що хочете виконати дію ${obj.X} ${obj.znak} ${obj.Y}? Якщо так - натисніть OK, якщо ні - скасуйте вашу дію.`)
            if(confirmOperation === true){
                alert(`Ваш результат: ${result}`);
            }else{
                this.input();
            }
        }
    }

    calculate(X, Y, znak){
        switch(znak){
            case '+':
            return X + Y;

            case '-':
            return X - Y;

            case '/':
            return X / Y;

            case '*':
            return X * Y;

            case '%':
            return X % Y;

            default:
            return `Некоректно введена математична дія.`;
        }
    }

    input(){
        const newX = parseFloat(prompt(`Введіть перше числове значення:`));
        const newY = parseFloat(prompt(`Введіть друге числове значення:`));
        const newZnak = prompt(`Введіть одну з математичних дії, яку хочете виконати. 
        Можливі варіанти:
        1. +
        2. -
        3. /
        4. *
        5. %`);

        if(isNaN(newX) || isNaN(newY)){
            alert(`Введіть число, будь ласка!`);
            this.input();
            return;
        }

        const obj = {X: newX, Y: newY, znak: newZnak};
        this.check(obj);
    }
}

const p = new SuperMath;
p.input();