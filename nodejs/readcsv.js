const fs = require("fs");
const highland = require("highland");
highland(fs.createReadStream("test.csv", "utf8"))
  .split()
  .map(line => line.split(","))
  .map(row => ({
    id: row[0],
    name: row[1],
    price: row[2]
  }))
  .filter(item => item.price >= 100)
  .each(x => console.log(x));
