<template>
    <div class="table-container">
        <swiper :options="swiperOption" :not-next-tick="notNextTick" class="swiper-box" ref="mySwiper">
            <swiper-slide v-for="(list, index) in filterlists" :key="index">
                <table-list :weekday="index" :items="list" :week="week" @courseDetail="showDetail"></table-list>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <table-detail v-show="show" :courses="detailItems" class="detail-item"></table-detail>
        <p>第<select v-model="week">
                <option v-for="option in options" :value="option">
                    {{ option }}
                </option>
            </select>周
            <button @click="reloadTable">刷新课表</button>
        </p>
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
            showDetail(index, weekday){
                this.show = true
                this.detailItems = this.lists[weekday][index]
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
</style>