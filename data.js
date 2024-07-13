fs = require("fs");

loadData = () => {
  try {
    return JSON.parse(fs.readFileSync("data.json").toString());
  } catch {
    return [];
  }
};

saveAllData = (allData) => {
  fs.writeFileSync("data.json", JSON.stringify(allData));
};

addPerson = (id, fullName, age) => {
  allData = loadData();
  duplicatedData = allData.filter((obj) => {
    return obj.id === id;
  });

  if (duplicatedData.length == 0) {
    allData.push({
      id,
      fullName,
      age,
      city,
    });
    saveAllData(allData);
  } else {
    console.log("This id is already exist");
  }
};

deleteData = (id) => {
  allData = loadData();
  dataToKeep = allData.filter((obj) => {
    return obj.id !== id;
  });
  console.log(dataToKeep);
  saveAllData(dataToKeep);
};

readData = (id) => {
  allData = loadData();
  searchedPerson = allData.find((obj) => {
    return obj.id === id;
  });

  if (searchedPerson) {
    console.log(searchedPerson);
  } else {
    console.log("This id is not exist");
  }
};

listData = () => {
    allData = loadData();
    allData.forEach(obj => {
        console.log(`${obj.id} : name: ${obj.fullName} age: ${obj.age}`);
    });
}
module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
};
