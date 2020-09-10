let conn = require("../helper/mysql");

module.exports = {
  AuthRegister: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO users SET ?", [setData], function (
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

  AuthLogin: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM users WHERE email = '${setData.email}'`,
        function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  // ===========================================================================
  // user manager
  GetUsers: function (search, sort, pagination) {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM users ${search} ${sort} ${pagination}`,
        function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  UpdatedUsers: function (setData, id) {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE users SET ? WHERE id = '${id}'`, [setData], function (
        error,
        result
      ) {
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

  DestroyUsers: function (id) {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM users WHERE id = '${id}'`, function (
        error,
        result
      ) {
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

  ProfileUpdate: function (setData, id) {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE users SET ? WHERE id = '${id}'`, [setData], function (
        error,
        result
      ) {
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
