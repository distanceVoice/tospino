/**
 * created by lixingyang
 * on 2020/11/1
 *
 */
const path = require("path")

exports.resolve = function (dir) {
    return path.resolve(__dirname, dir)
}
