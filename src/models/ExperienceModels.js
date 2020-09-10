let conn = require("../helper/mysql");

// =================================================================
// portofolio proccess
module.exports = {
  Experience: function (search) {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM jobexperience ${search}`, function (
        error,
        result
      ) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },

  CreateExperience: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO jobexperience SET ?`, [setData], function (
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

  UpdateExperience: function (setData, id) {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE jobexperience SET ? ${id}`, [setData], function (
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

  DestroyExperience: function (id) {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM jobexperience ${id}`, function (error, result) {
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
