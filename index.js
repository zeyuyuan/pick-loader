/**
 *
 * @author yuanzeyu
 * @date 2019-04-28
 * @desc
 */
module.exports = function (source) {
    const target = process.env.VUE_APP_PICK;
    if (!target) {
        return source;
    }
    // 先找出所有pick注释
    const picks = source.match(/\/\* pick(((?!end).)*) \*\//g);
    if (!picks) {
        return source;
    }
    // 找出其中不符合当前环境的注释
    const removes = picks.filter((item) => item.indexOf(target) === -1);
    // 替换所有不符合的内容
    let result = source;
    removes.forEach((item) => {
        const regStr = item.slice(3, -2);
        const reg = new RegExp(`/\\* ${regStr}.*${regStr}end \\*/`, 'gs');
        result = result.replace(reg, '');
    });
    return result;
};
