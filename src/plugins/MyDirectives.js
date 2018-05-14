const MyDirectives = {
    install: function(Vue, options){

        Vue.directive('focus', {
            inserted: function(element){
            element.focus()
     //console.log('xxx', element,binding, vnode, oldnode )
            }
        })
        // Vue.mixin({
        //     mounted: function(){
        //         console.log(this.$el)
        //     }
        // })

        Vue.directive('validate', {
            inserted: function(element, binding){
                element.addEventListener('input',(event) => {
                    console.log(event, event.target.value, 'value')
                })
                
            }
        })
    }
}
export default MyDirectives