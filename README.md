# pick-loader
使用注释选择不同环境变量的打包代码

### 使用
```
VUE_APP_PICK=name1
/* pick name1 name2 */
console.log('only name1 or name2');
/* pick name1 name2 end */
```
