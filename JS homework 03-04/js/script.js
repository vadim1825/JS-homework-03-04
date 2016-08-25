var myTest = {

	createBackground: function() {

		var div = document.createElement('div');
        div.className = 'backwhite';

        document.body.insertBefore(div, document.body.firstChild);
	},

    createForm: function() {

    	var form = document.createElement('form');
        form.setAttribute('role', 'form');

        div = document.querySelector('div');

        div.appendChild(form);
    },

    setWrapper: function() {

    	var div3 = document.createElement('div');
        div3.className = 'form-group';

        form = document.querySelector('form');

        form.appendChild(div3);
    },

    createHader: function() {

    	var p = document.createElement('p');
        p.className = 'header';
        p.innerHTML = 'Тест по программированию';

        div3 = document.querySelectorAll('div');

        div3[1].appendChild(p);
    },

    createMarkedList: function() {

    	var ol = document.createElement('ol');
        ol.className = 'marked';

        div3[1].appendChild(ol);
    },

    createFirstMarkedLi: function() {

    	var li_1 = document.createElement('li');
        li_1.className = 'out';

        var p_1 = document.createElement('p');
        p_1.innerHTML = 'Вопрос №1';

        li_1.appendChild(p_1);

        ol = document.querySelector('ol');

        ol.appendChild(li_1);
    },

    createUnmarkedList: function() {

    	var ul = document.createElement('ul');
        ul.className = 'unmarked';

        li_1 = document.querySelector('li');

        li_1.appendChild(ul);
    },

    createUnmarkedLi: function() {

    	var li_1_1 = document.createElement('li');

    	ul = document.querySelector('ul');

        ul.appendChild(li_1_1);

        var input_1 = document.createElement('input');
        input_1.setAttribute('id', 'cfirst_1');
        input_1.setAttribute('type', 'checkbox');
        input_1.setAttribute('name', 'first_1');

        li_1_1.appendChild(input_1);

        var label_1 = document.createElement('label');
        label_1.setAttribute('for', 'cfirst_1');
        label_1.innerHTML = 'Вариант ответа №1';

        li_1_1.appendChild(label_1);



        var li_1_2 = li_1_1.cloneNode(true);

        ul.appendChild(li_1_2);

        var li_1_3 = li_1_1.cloneNode(true);

        ul.appendChild(li_1_3);
    },

    createOtherMarkedLi: function() {

    	var li_2 = li_1.cloneNode(true);

        ol.appendChild(li_2);

        var li_3 = li_1.cloneNode(true);

        ol.appendChild(li_3);

        var questions = document.querySelectorAll('.out p');
        questions[1].innerHTML = 'Вопрос №2';
        questions[2].innerHTML = 'Вопрос №3';
    },

    changeAttributes: function() {

    	var inputs = document.getElementsByTagName('input');
        inputs[1].setAttribute('id', 'csecond_1');
        inputs[1].setAttribute('name', 'second_1');
        inputs[2].setAttribute('id', 'cthird_1');
        inputs[2].setAttribute('name', 'third_1');
        inputs[3].setAttribute('id', 'cfirst_2');
        inputs[3].setAttribute('name', 'first_2');
        inputs[4].setAttribute('id', 'csecond_2');
        inputs[4].setAttribute('name', 'second_2');
        inputs[5].setAttribute('id', 'cthird_2');
        inputs[5].setAttribute('name', 'third_2');
        inputs[6].setAttribute('id', 'cfirst_3');
        inputs[6].setAttribute('name', 'first_3');
        inputs[7].setAttribute('id', 'csecond_3');
        inputs[7].setAttribute('name', 'second_3');
        inputs[8].setAttribute('id', 'cthird_3');
        inputs[8].setAttribute('name', 'third_3');

        var labels = document.getElementsByTagName('label');
        labels[1].setAttribute('for', 'csecond_1');
        labels[1].innerHTML = 'Вариант ответа №2';
        labels[2].setAttribute('for', 'cthird_1');
        labels[2].innerHTML = 'Вариант ответа №3';
        labels[3].setAttribute('for', 'cfirst_2');
        labels[3].innerHTML = 'Вариант ответа №1';
        labels[4].setAttribute('for', 'csecond_2');
        labels[4].innerHTML = 'Вариант ответа №2';
        labels[5].setAttribute('for', 'cthird_2');
        labels[5].innerHTML = 'Вариант ответа №3';
        labels[6].setAttribute('for', 'cfirst_3');
        labels[6].innerHTML = 'Вариант ответа №1';
        labels[7].setAttribute('for', 'csecond_3');
        labels[7].innerHTML = 'Вариант ответа №2';
        labels[8].setAttribute('for', 'cthird_3');
        labels[8].innerHTML = 'Вариант ответа №3';
    },

    createButton: function() {

    	var button = document.createElement('input');
        button.className = 'button';
        button.setAttribute('type', 'submit');
        button.setAttribute('name', 'confirm');
        button.setAttribute('value', 'Проверить мои результаты');

        form.appendChild(button);
    }

};

myTest.createBackground();
myTest.createForm();
myTest.setWrapper();
myTest.createHader();
myTest.createMarkedList();
myTest.createFirstMarkedLi();
myTest.createUnmarkedList();
myTest.createUnmarkedLi();
myTest.createOtherMarkedLi();
myTest.changeAttributes();
myTest.createButton();