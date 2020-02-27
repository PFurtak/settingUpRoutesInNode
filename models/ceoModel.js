const db = require('./conn');

class executiveList {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  static async getAll() {
    try {
      const res = await db.any(`SELECT * from ceos;`);
      return res;
    } catch (error) {
      console.error('ERROR: ', error);
    }
  }
}

module.exports = executiveList;
