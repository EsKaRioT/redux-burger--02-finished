### Материал взят из курса https://www.udemy.com/react-the-complete-guide-incl-redux/

### Курс проходит на примере Burger приложения. 
Для достоверности: логин valerylukin@yahoo.com пароль INUsb1k%@ii7

### Собрано на : 
#### Create React App 
Используются:
* PropTypes 
* Axios ajax
* Radium css
* Redux
* используется free серверБД firebase.google.com

### Описание. 
Показывает пример как на реакте собрать полноценное адаптивное приложение для дестопа и мобильных устройств. 
Оформление. 
>Имеется адаптивный схематичный показа непосредственно бургера. Наглядность заключается в непосредственно наглядном изменении ингридиентов по клику. Имеется тулбар, меню , кнопка заказа. Всплывающее меню, наглядно показывается цена заказа. В всплывающем меню показаны все ингридиенты их количество и цена. Далее имеется страница проверки заказа checkout, далее идет страница оформления заказа, с заполнением формы и конечной кнопкой "заказать"

### Построение приложения и описание
#### CSS: 
К каждому элементу подключен отдельный css. import classes from './Burger.css'; через обьект
#### JS

Немец все сделал по феншую. Все по полочкам.
Каждый отдельный элемент выполняющий отдельную роль вынесен в отдельную папку в отдельный фаил.
сначала он сделал схему приложения ( начертил на листе)
Разработал ui/ux схему
Сделаны на многие компоненты Handling Errors, разные Wrap up и withErrorHandler - свой вывод ошибок.
Сделаны hoc элементы, разные обертки, layout
#### Redux 
Феншуй.
Венесены только те состояния , которые точно необходимо выносить. 
Все actions сделаны через переменные - для повышения отказоустойчивости. 

### Вывод:
Материал был сложный, который мне еще повторять и повторять.
Отличный пример как делать приложения. 
