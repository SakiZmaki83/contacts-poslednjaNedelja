const MyDirectives = {
    install: function(Vue, options){

        Vue.directive('focus', {
            inserted: function(element){
            element.focus()
     //console.log('xxx', element,binding, vnode, oldnode )
            }
        })
    }
}
export default MyDirectives