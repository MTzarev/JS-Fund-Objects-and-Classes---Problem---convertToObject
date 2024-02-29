function convertToObject(string) {
    let person = JSON.parse(string);
    // let keys = Object.keys(person)
    // let value = Object.values(keys[keys])
    for (let key of Object.keys(person)) {

        console.log(`${key}: ${person[key]}`);
    }



    console.log();
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
//convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
