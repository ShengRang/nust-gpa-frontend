<template>
    <table class="table-box">
        <tr>
            <td>周{{ weekday + 1 }}</td>
            <td class="table-item">{{ dateTime.year }}年{{ dateTime.month }}月{{ dateTime.day }}日</td>
        </tr>
        <tr v-for="(item, index) in items" :key="index" >
            <td>第{{ index + 1 }}节</td>
            <td class="table-item">
                <a v-html="item.name"></a>
                <a v-if="item.class">分类：{{ item.class }}</a> <br/>
                <a v-if="item.teacher">老师：{{ item.teacher }}</a> <br/>
                <a v-if="item.raw_weeks">周次：{{ item.raw_weeks }}周</a> <br/>
                <a v-if="item.room">教室：{{ item.room }}</a> <br />
                <button @click="handlerDetail(index)">>>more</button>
            </td>
        </tr>
        <div style="height: 50px"></div>
    </table>
</template>

<script>
    import * as util from '../js/time'
    export default {
        props: {
            weekday: {
                type: Number,
                default: 0
            },
            items: {
                type: Array,
                default: []
            },
            week: {
                type: Number,
                default: 1
            }
        },
        computed: {
            dateTime () {
                return util.CalDate(this.startDate, this.week, this.weekday)
            },
            startDate(){
                return this.$store.state.startDate
            },
        },
        methods: {
            handlerDetail(index){
                this.$emit("courseDetail", index, this.weekday)
            }
        }
    }
</script>

<style>
.table-box {
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
}
.table-item {
    width: 80%;
    height: 100%;
    border-style: solid;
    border-width: 2px 2px 1px 2px;
}
</style>