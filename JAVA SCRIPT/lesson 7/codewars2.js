/**
 * Created by Андрей on 01.11.2015.
 */
function createSecretHolder(secret){
    var secret = secret;

    return {
        getSecret: function(){
            return secret;
        },

        setSecret: function(newSecret){
            secret = newSecret;
        }
    };
};


var lol = createSecretHolder(7);

console.log(lol.getSecret());
lol.setSecret(2);
console.log(lol.getSecret());