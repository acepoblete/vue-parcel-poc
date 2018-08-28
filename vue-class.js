import Vue from 'vue'
import Component from 'vue-class-component'

import Yolo from './yolo.vue';

@Component
export default class VueClass extends Vue {
    msg = 'vue class'
    render() {
        return (
            <h1>{this.msg} <Yolo text="omg!!!!" /></h1>
        )
    }
}