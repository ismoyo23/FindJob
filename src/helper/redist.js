const redis = require("redis");
const client = redis.createClient(6379);
let helper = require("../helper/index");
module.exports = {
  cacheAuth: (name) => {
    return (req, res, next) => {
      client.hgetall(`${name}`, (err, data) => {
        if (err) throw err;
        if (data != null) {
          return helper.response(res, "success", data, 200);
        } else {
          next();
          // Jika tidak ada di cache local, maka ambil data dari controller
        }
      });
    };
  },
};
