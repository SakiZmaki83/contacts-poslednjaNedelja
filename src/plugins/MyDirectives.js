const MyDirectives = {
    install: function(Vue, options) {
        Vue.directive('focus', {
            inserted: function(element) {
              element.focus()
            }
          })

          const RULES= {
            REQUIRED: 'required',
            NUMBER: 'number',
            EMAIL: 'email'
        }
        const MESSAGES_CLASNAME = 'validator-messages'
        const removeMessageErrorElement = (element) => {
            let oldMessageElement = element.querySelector(`#${MESSAGES_CLASNAME}`)

                            if(oldMessageElement){
                                oldMessageElement.remove()
                            }
        }
        
        Vue.directive('validate', {
            inserted: function(element, binding){


                let validationRules = binding.value
                
                element.addEventListener('submit', (event) => {
                    event.preventDefault()
                    Object.keys(validationRules).forEach(key => {
                        let input = element.querySelector(`#${key}`)

                        if(!input){
                            throw new Error(`Element for validation rule ${key} not found.`)
                        }

                        if(validationRules[key].indexOf(RULES.REQUIRED) > -1 && !input.value.length){
                            let messageElement = document.createElement('div')
                            messageElement.id= MESSAGES_CLASNAME
                            
                            removeMessageErrorElement(element)

                            messageElement.innerHTML = `${key} is required`
                            element.appendChild(messageElement)
                        }else{
                            removeMessageErrorElement(element)
                        }
                    });
                    
                })
            }
        }) 
    }
}

export default MyDirectives