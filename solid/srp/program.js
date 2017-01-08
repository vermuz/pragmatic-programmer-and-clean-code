'use strict';

const fs = require('fs');
const {join} = require('path');

const readSoldiersFormatSoldiersAndWriteSoldiers = () => {
  return fs.readFile(join(__dirname, '../../data/soldiers.csv'), (err, data) => {
    if (err) {
      throw err;
    }
    const soldiers = data.toString()
      .trim()
      .split('\n')
      .map(soldier => soldier.split(','))
      .map((field) => {
        return {
          name: field[0],
          rank: field[1],
          branch: field[2]
        };
      });
    return fs.writeFile(join(__dirname, 'soldiers.json'), JSON.stringify(soldiers), (err) => {
      if (err) {
        throw err;
      }
    });
  });
};

const readSoldiers = (cb) => {};

const formatSoldiers = (soldiers) => {};

const writeSoldiers = (soldiers, cb) => {};

const removeSoldiers = (file, cb) => {};

module.exports = {
  readSoldiersFormatSoldiersAndWriteSoldiers,
  readSoldiers,
  formatSoldiers,
  writeSoldiers,
  removeSoldiers
};