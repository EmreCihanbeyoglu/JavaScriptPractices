// Json data ile object syntax farkli


{
    "firstName": "Emre" //JSON yazimi
}


{
    firstName: "Emre" //object data yazimi
}

//pretty print   --> her sey acik halde gosteriiyor. 

var school = {
    "name": "Learning U",
    "classes":[
        {
            "title": "Cooking is fun",
            "teacher": "Mr. Jones",
            "courseId": "A123",
            "credits": 3
        },
        {
            "title": "Salads for people who like salads",
            "teacher": "Ms. Cha",
            "courseId": "B223",
            "credits": 4
        },
        {
            "title": "Soup for your Belly",
            "teacher": "Adam Smith",
            "courseId": "C543",
            "credits": 1
        }

    ]
}

school
school.name
school.classes
school.classes[0].title


//minified 

{"name":"Learning U","classes":[{"title":"Cooking is fun","teacher":"Mr. Jones","courseId":"A123","credits":3},{"title":"Salads for people who like salads","teacher":"Ms. Cha","courseId":"B223","credits":4},{"title":"Soup for your Belly","teacher":"Adam Smith","courseId":"C543","credits":1}]}

