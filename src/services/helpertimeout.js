//Create function and call function with self (window||global) for testing (mock)
export const interval = (function(scope) {
    return {
        setInterval: scope.setInterval,
        clearInterval: scope.clearInterval,
    }
    
}(self));

/*

MOCK:

interval.setInterval=()=>1;
interval.clearInterval=()=>0;
*/