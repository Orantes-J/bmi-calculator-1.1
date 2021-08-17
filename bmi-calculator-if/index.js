const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 95;
const johnsHeight = 1.76;

const marksbmiCal = Math.ceil(marksWeight/marksHeight ** 2);

const johnsbmiCal = Math.ceil(johnsWeight/johnsHeight ** 2);


if(marksbmiCal < johnsbmiCal){
    console.log(`John has a greater BMI resulting in ${johnsbmiCal} and Marks BMI count is ${marksbmiCal} ):`)
};

