// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object

var person1 = {
    "name": "Rahim",
    "age": 25,
    "hometown": "Dhaka",
    "married": false
};

var person2 = {
    name: "Karim",
    age: 35,
    hometown: "Chittagong",
    married: true
};

console.log(person2);
console.log(person1); 

//JSON objects and Array
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();


function jsonData(json_obj) {
    //console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    //console.log(js_obj);

    for (x in js_obj.persons) {
        //console.log(x);

        var persons = js_obj.persons;
        // console.log(persons[x]);
        for (y in persons[x]) {
            console.log(persons[x][y]);
        }

    }
} 

//-----------------------------------------------

 {
    "persons": [
        {
            "name": "Rahim",
            "age": 25,
            "hometown": "Dhaka",
            "married": false
        },
        {
            "name": "Karim",
            "age": 35,
            "hometown": "Chittagong",
            "married": true
        },
        {
            "name": "Ayon",
            "age": 27,
            "hometown": "Chandpur",
            "married": false
        },
        {
            "name": "Rahat",
            "age": 34,
            "hometown": "Chittagong",
            "married": true
        },
        {
            "name": "Rony",
            "age": 26,
            "hometown": "Chittagong",
            "married": false
        }
    ]
}