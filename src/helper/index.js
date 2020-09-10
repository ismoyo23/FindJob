let joi = require('joi')
module.exports = {
    response: function(res, status, data, statusCode){
        let result = {}
        result.data = data || '';
        result.statusCode = statusCode || 200;
        result.success = status === 'success' ? true : false

        return res.status(result.statusCode).json({
            success: result.success,
            data: result.data
        })
    }
}