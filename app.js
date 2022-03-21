class InputValidator{
    static checkPseudo = function(pseudo, minSize=1 , maxSize=55){

        return new Promise((resolve,reject)=>{
            
            if(pseudo.value.length >= minSize && pseudo.value.length <= maxSize){
                let pseudoValue = pseudo.value.replace(' ', '_')

                pseudo.value = pseudoValue

                let pseudoIsNotValide = this.isSpecialChar(pseudoValue)

                if(pseudoIsNotValide){
                    reject("Votre pseudo peut pas contenir de caratère spéciaux")
                }else{
                    resolve('Votre pseudo est correct !')
                }
            }else{
                reject(`Votre pseudo doit au minimum avoir ${minSize} caratère(s) et maximum ${maxSize}`)
            }
        })
    }

    static checkEmail = (email, minSize=1 , maxSize=55)=>{
        return new Promise((resolve, reject)=>{
            let emailValue = email.value.replace(' ','')
            const terminaison = ['com','be','fr','net']
            email.value = emailValue

            let tabEmail = emailValue.split('@')
            let isNotValide
            if(tabEmail.length === 2 && tabEmail[1]){
                for(let i=0;i<tabEmail.length;i++){
                    isNotValide = this.isSpecialChar(tabEmail[i])
                }
                if(isNotValide){
                    reject("Votre adresse mail n'est pas valide !")
                }else{
                    terminaison.forEach(element => {
                        let endEmail = emailValue.split('.')
                        endEmail = endEmail[endEmail.length-1]

                        if(element === endEmail){
                            resolve('Adresse mail valide')
                        }else{
                            reject("Votre adresse mail n'est pas valide !")
                        }
                    });      
                }
            }else{
                reject("Votre adresse mail n'est pas valide !")
            }
        })
    }

    static checkPassword = function(password, minSize=1 , maxSize=55){
        return new Promise((resolve, reject)=>{
            let passwordValue = password.value

            if(passwordValue.length >= minSize && passwordValue.length <= maxSize){
                let isNotSpecialChar = this.isSpecialChar(passwordValue)
                isNotSpecialChar ? resolve('mot de passe valide') : reject('Votre mot de passe doitau minimum avoir un caractère spécial !')
            }else{
                reject(`Votre mot de passe doit faire minimum ${minSize} caractère et maximum ${maxSize}`)
            }
        })
    }

    static isSpecialChar(str){
        const specialChar = "|@\"'()!{}^[#]$´%\`:/\\¨=+,?*;"
        for(let i = 0; i < specialChar.length; i++){
            for(let j = 0; j < str.length; j++){
                if(str[j] === specialChar[i]){
                   return true
                }
            }
        }
        return false
    }

}

