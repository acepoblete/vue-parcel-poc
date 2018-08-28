import Yolo from './yolo.vue'

export default {
    data() {
        return {
            msg: "with jsx"
        }
    },
    render() {
        return (
            <h1>{this.msg} <Yolo text="lil bit better" /></h1>
        )
    }
}