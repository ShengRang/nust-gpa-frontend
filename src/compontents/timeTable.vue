<template>
    <div class="table-container" @click="showDetail($event)">
        <swiper :options="swiperOption" :not-next-tick="notNextTick" class="swiper-box" ref="mySwiper">
            <swiper-slide v-for="(list, index) in filterlists" :key="index">
                <table-list :weekday="index" :items="list" :week="week"></table-list>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <table-detail @closeModal="hideDetail" v-show="show" :courses="detailItems" class="detail-item"></table-detail>
        <div class="week-select-wrap">
            第
            <select class="week-select" v-model="week">
                <option v-for="(option, index) in options" :value="option" :key="index">{{option}}</option>
            </select>
            周
            <button class="refresh-btn" @click="reloadTable">刷新课表</button>
        </div>
    </div>
</template>

<script>
    import tableList from './tableList.vue'
    import tableDetail from './tableDetail.vue'
    import * as util from '../js/time'
    import { mapState } from 'vuex'
    // TODO 添加日历检索
    export default {
        data() {
            return {
                notNextTick: true,
                // swiper配置
                swiperOption: {
                    direction: 'horizontal',
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    grabCursor: true,
                    loop: true,
                    initialSlide: 0,
                    // 滑动切换周次，可能会出现bug
                    onSlidePrevStart: swiper => {
                        if(swiper.previousIndex === 1 && swiper.realIndex === 6) {
                            if (this.week === 1) this.week = 22
                            else this.week -= 1
                        }
                    },
                    onSlideNextStart: swiper => {
                        if(swiper.previousIndex === 7 && swiper.realIndex === 0) {
                            if (this.week === 22) this.week = 1
                            else this.week += 1
                        }
                    },
                    paginationBulletRender: function (swiper, index, className) {
                        return `<span class="${className} select-day">${(index + 1)}</span>`;
                    }
                },
                week: 1,
                options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
                show: false,
                detailItems: []
            }
        },
        created(){
            this.initWeek()
        },
        computed: {
            lists() {
                return this.$store.state.table
            },
            startDate(){
                return this.$store.state.startDate
            },
            filterlists() {
                return this.lists.map((items) => {
                    return this.filterItem(items)
                })
            },
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            filterItem(items) {
                let result = []
                for (let item of items) {
                    let temp = {}
                    if (item.length > 0) {
                        temp = item.filter((value)=>{
                            return value.weeks.indexOf(this.week) === -1? false : true
                        })[0] || {}
                        temp.haveMore = true
                    }
                    result.push(temp)
                }
                return result
            },
            initWeek() {
                let today = new Date()
                this.swiperOption.initialSlide = (today.getDay() + 6) % 7
                today = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate()
                this.week = util.GetDateDiff(this.startDate, today)
            },
            showDetail(event){
                const target = event.target
                if (target.nodeName.toLowerCase() === 'a' && target.dataset.index) {
                    const weekday = target.dataset.weekday,
                          index = target.dataset.index
                    this.show = true
                    this.detailItems = this.lists[weekday][index]
                }
            },
            hideDetail () {
                this.show = false
            },
            reloadTable() {
                this.show = false
                this.$store.dispatch('fetchTable')
            }
        },
        components: {
            tableList,
            tableDetail
        },
    }
</script>

<style>
    .table-container{
        text-align: center;
    }
    .deatil-item{
        position: relative;
        z-index: 1;
    }
    .select-day {
        width: 20px;
        height: 20px;
        line-height: 20px;
    }
    .select-day.swiper-pagination-bullet-active {
        color: #fff;
    }
    .swiper-pagination-bullets {
        width: calc(100% - 3rem) !important;
        margin-left: 1.5rem;
    }
    .week-select-wrap {
        margin-top: 1rem;
    }
    .week-select {
        padding: 5px 10px;
        border: 1px solid #42B983;
        border-radius: 6px;
        outline: none;
    }
    .refresh-btn {
        padding: 6px 11px;
        margin-left: 1.3rem;
        border: 1px solid #42B983;
        background: #fff;
        color: #42B983;
        outline: none;
        border-radius: 6px;
    }
    .refresh-btn:hover {
        color: #fff;
        background-color: #4DD898;
        border: 1px solid #4DD898;
    }
    .refresh-btn:active {
        border: 1px solid #25F3B0;
        background-color: #25F3B0;
        color: #fff;
    }
</style>