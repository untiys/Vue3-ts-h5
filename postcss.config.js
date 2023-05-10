module.exports = ({ file }) => {
    // 使用vant开发的时候要注意，vant是根据375的设计稿设计的，要单独适配
    const vwUnit = file && file.indexOf("vant") !== -1 ? 375 : 750
    return {
        plugins: {
            "postcss-px-to-viewport-8-plugin": {
                unitToConvert: "px", //要转化的单位
                viewportWidth: vwUnit, // 设计稿的宽度
                // landscapeWidth,   横屏时使用的视口宽度
            },
        },
    }
}
