var myList = [{
    "name": "list",
    "items": [
        {
            "name": "foo",
            "items": [{
                "name": "No Children"
            },
                {
                    "name": "No Children"
                },
                {
                    "name": "bar",
                    "items": [
                        {
                            "name": "baz",
                            "items": [
                                {
                                    "name": "No Children"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        ,
        {
            "name": "No Children"
        }]
},
    {
        "name": "list2",
        "items": [
            {
                "name": "foo2",
                "items": [
                    {
                        "name": "bar2",
                        "items": [
                            {
                                "name": "baz2",
                                "items": [
                                    {
                                        "name": "yahoo2",
                                        "items": [
                                            {
                                                "name": "baz2",
                                                "items": [
                                                    {
                                                        "name": "yahoo2"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }];

(function () {
    var parentElem = document.body;         //точка входа - body

    createParent(myList, parentElem);       //main func(лист, точка входа)

    function createParent(myList, parent) {
        var parentElem = parent;

        for (var item in myList) {
            var elem = document.createElement('ul');        //создаем узел ul
            elem.id = myList[item].name;                    //даем ему id(добавил для проверки)
            var childElem = parentElem.appendChild(elem);       //пихаем ul на страницу и запоминаем куда
            createItem('li', myList[item].name, childElem);     //вызов ф-ии для создания и вставки li
            if (myList[item].items) createParent(myList[item].items, childElem);        //если есть подмасив - рекурсия
        }
    }

    function createItem(tag, content, parent) {         //дочерний элемент
        var elem = document.createElement(tag),
            contentElem = document.createTextNode(content),     //текстовый узел
            parentElem = parent;

        elem.appendChild(contentElem);          //вставляем текст в элемент
        parentElem.appendChild(elem);           //вставляем на страницу к родителю
    };

})();