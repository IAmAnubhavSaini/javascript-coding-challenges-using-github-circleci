Solution = (function() {
  return {
    countZeros: function(n) {
	var zeros = 0,
	divisor = 10;
	if(n < 10) return zeros;
	while(divisor <= n){
		zeros += n/divisor;
		divisor *= 10;
	}
      return zeros;
    }    
  }
}());
