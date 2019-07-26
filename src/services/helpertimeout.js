//Create function and call function with self (window||global) for testing (mock)
 export const interval = (function(scope) {
    return {
        setInterval: (handler, timeout)=>scope.setInterval(handler,timeout),
        clearInterval:(intervalId)=> scope.clearInterval(intervalId),
    }
    
}(self));

export const dateSystem = new Date();

/*

MOCK:

interval.setInterval=()=>1;
interval.clearInterval=()=>0;

interval.setInterval(()=>console.log('hola'),1000)
*/