//Create function and call function with self (window||global) for testing (mock)
 const interval = (function(scope) {
    debugger;
    return {
        setInterval: (handler, timeout)=>scope.setInterval(handler,timeout),
        clearInterval:(intervalId)=> scope.clearInterval(intervalId),
    }
    
}(self));

/*

MOCK:

interval.setInterval=()=>1;
interval.clearInterval=()=>0;

interval.setInterval(()=>console.log('hola'),1000)
*/