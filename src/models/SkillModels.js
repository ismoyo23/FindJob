let conn = require("../helper/mysql");

// =================================================================
// portofolio proccess
module.exports = {
  Skill: function (search) {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM skill ${search}`, function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },

  CreateSkill: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO skill SET ?`, [setData], function (
        error,
        result
      ) {
        if (error) {
          reject(error);
        } else {
          let newData = {
            id: result.insertId,
            ...setData,
          };
          resolve(newData);
        }
      });
    });
  },

  DestroySkill: function (id) {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM skill ${id}`, function (error, result) {
        if (error) {
          reject(error);
        } else {
          let newData = {
            id,
          };
          resolve(newData);
        }
      });
    });
  },
};
