<template>
    <div class="table-box-wrap">
        <table class="table-box">
            <colgroup width="30%"></colgroup>
            <colgroup width="70%"></colgroup>
            <thead>
            <tr>
                <th colspan="2" class="table-head">{{ dateTime.year }}年{{ dateTime.month }}月{{ dateTime.day }}日 (周{{ weekday + 1 }})</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index" >
                    <td>第{{ index + 1 }}节</td>
                    <td class="table-item">
                        <p v-if="item.name" v-html="item.name"></p>
                        <p v-if="item.class">分类：{{ item.class }}</p>
                        <p v-if="item.teacher">老师：{{ item.teacher }}</p>
                        <p v-if="item.raw_weeks">周次：{{ item.raw_weeks }}周</p>
                        <p v-if="item.room">教室：{{ item.room }}</p>
                        <a v-if="item.haveMore" href="javascript:;" class="more-btn" :data-index="index" :data-weekday="weekday">&gt;&gt;更多</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="expend-space"></div>
    </div>
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

<style scoped>
.table-box-wrap {
    width: auto;
    margin: 0 1.5rem;
}
.table-box {
    width: 100%;
    height: 100%;
}
.table-item {
    padding-left: 20%;
    text-align: left;
    height: 120px;
    border: 1px solid #42B983;
}
.table-head {
    height: 20px;
    border: 1px solid #42B983;
}
.table-item p {
    margin: 0 auto;
    color: #42B983;
}
.more-btn {
    width: 60px;
    text-align: center;
    display: block;
    margin-top: 5px;
    padding: 2px 10px;
    border-radius: 5px;
    background-color: #31DFA7;
    color: #fff;
}
.more-btn:hover {
    background-color: #4DD898;
    color: #fff;
}
.more-btn:active {
    background-color: #42B983;
    color: #fff;
}
.expend-space {
    height: 40px;
}
</style>