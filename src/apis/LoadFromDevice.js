import myData from "../data/data.json";

const idList = [];
const operations = [];
const temperatures = [];
const durations = [];

for (const id in myData.operation) {
    idList.push(id);
    operations.push(myData.operation[id]);
    temperatures.push(myData.temperature[id]);
    durations.push(myData.duration[id]);
}
return [idList,operations,temperatures,durations];

