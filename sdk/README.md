# 性能监控 sdk

## sdk 开发准备

1. 准备编译环境 ts/js 文件
2. rollup(React 使用 rollup 编译) esbuild(vite-golang) swc(rust 对标 babel 构建速度)
3. 目标 umd cmd esmodule commonjs2 xxx.min.js -> microbundle
4. 分成两部分：
   源代码 github
   一部分 dist + package.json [npm login, npm publish]
5. xx.d.ts api-extractor 合并成一个 microbundle
   独立的 dist package.json type:'index.d.ts'
6. micro 原分散的 d.ts 外面某个文件夹
   api -> 外面某个文件夹 -> index.d.ts -> dist -> npm
7. ts-doc + typedoc
8. 性能监控 + 错误监控 + 用户回溯（用户操作轨迹+还原 sourcemap）
9. 开发过程中 直接把 ts 文件引入到浏览器里 parcel 自带 ts livereload
10. sdk 开发原则，不能去影响用户（业务逻辑主线程+网络层 fetch）
11. requestIdleCallback + macrotask sendBeacon + img(日志服务器)
12. 前端数据送到一个专门的日志服务器 xxx.gif?data=xxxx 定时 task
    记录 LCP（最大内容绘制）代表页面速度
    FID（首次输入延迟）页面交互体验指标
    TBT（阻塞总时间）
    CLS（累计位移偏移）代表页面稳定指标
    核心任务指标 LCP、FID、CLS
13. 根据优先级 -> 微信 邮箱 电话 短信
