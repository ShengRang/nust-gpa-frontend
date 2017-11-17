<template>
    <div>
        <h2>关于</h2>
        <p><span class="icon powerful"></span>本项目最初仅为测试项目, 由于仍有人使用, <strong>不定期</strong>开发维护</p>
        <p><span class="icon fast"></span>避免验证码, 远离教务处, 响应快速. 自定义 GPA 计算.</p>
        <p>如果本项目帮助了你, 欢迎打赏以维持服务器</p>
        <p>代码已开源, 前端: <a href="https://github.com/ShengRang/nust-gpa-frontend">nust-gpa-frontend</a> 后端: <a href="https://github.com/NUST-MSC/NUST-API">NUST-API</a> 详解: <a href="http://shengrang.github.io/2017/03/02/nust-gpa/">Vue/Tornado 在 NUST-GPA 的实践及演进</a></p>
        <p>欢迎贡献代码</p>
        <p>建议及意见, BUG 反馈, 欢迎 <del><a href="mailto:541628498@qq.com">联系我</a> (QQ 541628498)</del></p>
        <p>项目交接，欢迎联系 <a href="mailto:765520180@qq.com">新开发者</a> (QQ 765520180)</p>
        <strong>另外求一枚logo</strong>
        <h2>使用说明</h2>
        <p>在登录界面输入学号及教务处密码, 点击登录即可查看成绩, GPA, 均分</p>
        <p>GPA计算器支持<strong>自定义计算</strong>, 点击课程<strong>最前面的勾</strong>或者点击<strong>整行</strong>, 均可改变该课选中状态</p>
        <p><strong>所有课程</strong>的 GPA/均分 是将<strong>本学期所有课程</strong>加权平均求得</p>
        <p><strong>选中课程</strong>的 GPA/均分 是将<strong>选中课程(蓝底为选中)</strong>加权平均求得</p>
        <p><strong>课表</strong>默认显示当天课程, 点击<strong>其他周</strong>获取更多课程信息, 点击<strong>刷新课表</strong>导入最新课程信息</p>
        <p> iOS 用户可以用 Safari 打开本站，固定到主屏幕，体验优化中</p>
        <h2>更新日志</h2>
        <p>2017/11/17 新增课表查询</p>
        <p>2017/10/&nbsp;&nbsp;&nbsp;&nbsp;新增开发者 : <a href="https://github.com/yangsoon">yangs</a> <a href="https://github.com/kainstar">kainstar</a></p>
        <div class="divide"></div>
        <p>2017/06/&nbsp;&nbsp;&nbsp;&nbsp;毕业了</p>
        <p>2017/02/21 部分 BUG 修复</p>
        <p>2017/01/07 新增考试查询</p>
        <p>2016/11/09 前端重构</p>
        <p>2016/11/04 IO 性能优化</p>
        <p>2016/06/14 新增选修课已修学分查询</p>
        <p>2016/04/19 initial WebApp for iOS</p>
        <p>2016/04/01 前端 UI 改版 &amp; 微信乞讨</p>
        <p>2016/02/19 性能优化 &amp; 忽略缓考</p>
        <p>2016/02/06 全局 GPA &amp; BUG 修复</p>
        <p>2016/02/04 前端兼容性优化</p>
        <p>2016/02/03 前后端分离 &amp; GPA 查询</p>
        <p>2016/01/24 查成绩初版</p>
    </div>
</template>
<script type="text/javascript">
    module.exports = {
    }
</script>
<style scoped>
div.divide {
    border-bottom: 1px dashed #666;
}

</style>
