<template>
    <div>
        <ul>
            <li v-for="(item, index) in courses" :key="index" style="list-style:none;">
                <a v-html="item.name"></a>
                <a v-if="item.class">分类：{{ item.class }}</a>
                <a v-if="item.teacher">老师：{{ item.teacher }}</a>
                <a v-if="item.raw_weeks">周次：{{ item.raw_weeks }}周</a>
                <a v-if="item.room">教室：{{ item.room }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        courses: [Array]
    }
}
</script>

<style>

</style>