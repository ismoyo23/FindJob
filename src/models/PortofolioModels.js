let conn = require("../helper/mysql");

// =================================================================
// portofolio proccess
module.exports = {
  Portofolio: function (search) {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM portofolio ${search}`, function (
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

  CreatePortofolio: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO portofolio SET ?`, [setData], function (
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

  UpdatePortofolio: function (setData, id) {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE portofolio SET ? ${id}`, [setData], function (
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

  DestroyPortofolio: function (id) {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM portofolio ${id}`, function (error, result) {
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
