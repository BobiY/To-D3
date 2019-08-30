// 获取坐标轴的信息参数

function scale(domain) {
    const scale = d3.scaleLinear();
    const scaleBand = d3.scaleBand();
    /**
     * 刻度
     * 柱宽
     * 数据到视图的推倒函数
     */
    const exports = {
        ticks: scale.ticks(),
        barWidth: () => {},
        everyBarPos: () => {},
        barGaps: 0.3,  // barWidth 的 30%，每个柱图的左右各 15%
        textPos: 0,
        ticksSize: 5,
        ticksPos: () => {},
        barHeight: () => {}
    }

    function getBarWidth() {
        return scaleBand.bandwidth();
    }

    function calcBarPos() {
        /**
         * 根据输入的 range 和 domain 去计算每个 bar 的位置
         */
        const domain = (scale.domain() || []);
        const range = (scale.range() || [0, 0]);
        const everyAxisWidth = (range[1] - range[0]) / domain.length || 0;
        const widthCenter = everyAxisWidth / 2;
        const everyBarStartPos = everyAxisWidth * exports.barGaps / 2;
        const posX = everyAxisWidth - everyBarStartPos;
        const barWidth = everyAxisWidth * (1 - exports.barGaps);
        return { x: posX, barWidth, gaps: everyAxisWidth * exports.barGaps };
    }
}