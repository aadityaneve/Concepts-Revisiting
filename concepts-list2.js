console.log("first"); 
setTimeout(function() { 
    console.log("second"); 
}, 0); 
console.log("third");
/* Output: first
           third
           second 
    */

/* Callback Hell */
function cb1(a){
    return (a) => {
        return () => {
            return () => {
                return () => {
                    return () => {
                        return () => {
            
                        }
                    }
                }
            }
        }
    }
}


/* 1. Connect to DB
    mongoose

2. Routes
    Express
    app.use(express.json())

    app.get(
        http://domain_name:8080/products/=:all,
        [middleware1, middleware1],
        response
    ) */