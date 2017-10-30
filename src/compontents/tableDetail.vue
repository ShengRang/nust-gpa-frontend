<template>
    <transition name="modal">
        <div class="modal-overflow" @click="closeModal(true)">
            <div class="modal-content-wrap" @click.stop="closeModal(false)">
                <div class="modal-content table-content">
                    <ul>
                        <li v-for="(item, index) in courses" :key="index">
                            <p v-html="item.name"></p>
                            <p v-if="item.class">分类：{{ item.class }}</p>
                            <p v-if="item.teacher">老师：{{ item.teacher }}</p>
                            <p v-if="item.raw_weeks">周次：{{ item.raw_weeks }}周</p>
                            <p v-if="item.room">教室：{{ item.room }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        courses: [Array]
    },
    methods: {
        closeModal (isClose) {
            if (isClose) {
                this.$emit('closeModal')
            }
        }
    }
}
</script>

<style scoped>
.modal-enter.modal-overflow, .modal-leave-to.modal-overflow {
    opacity: 0;
}
.modal-enter .modal-content-wrap, .modal-leave-to .modal-content-wrap {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
}

.modal-overflow {
    transition: all 0.3s ease 0s;
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.35);
    z-index: 9;
}
.modal-content-wrap {
    transition: all 0.3s ease 0s;
    max-height: 500px;
    overflow-y: auto;
    box-sizing: border-box;
    max-width: 500px;
    min-width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.6);
    z-index: 10;
}
.table-content {
    color: #42b983;
}
.table-content ul {
    list-style: none;
    padding-left: 0;
}
.table-content ul li p {
    margin: 0.5rem;
}
.table-content ul li:not(:last-child) {
    border-bottom: 1px solid currentColor;
}
</style>