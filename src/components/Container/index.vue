<template>
    <div class="container">
        <div v-if="headerShow" class="header">
            <slot name="header"></slot>
        </div>
        <div v-if="leftShow || rightShow" class="clear">
            <div v-if="leftShow" class="f-l left">
                <slot name="left"></slot>
            </div>
            <div v-if="rightShow" class="f-r right">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ElContainer',
    props: {
        headerShow: {
            type: Boolean,
            default: false
        },
        leftShow: {
            type: Boolean,
            default: false
        },
        rightShow: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped lang = 'scss'>
.container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
}
.header,
.left,
.right {
    pointer-events: auto;
}
</style>
