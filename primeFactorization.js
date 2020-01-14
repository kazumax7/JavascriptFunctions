function primeFactorization(target){
	if(isNaN(target)) return;
	
	target = Math.floor(target);
	let result;
	
	switch(target){
		case 0:
		case 1:
			result = [target];
			break;
		
		default:
			result = [];
			
			if(target < 0){
				target *= -1;
				result = [-1];
			}
			for(let i = 2; i <= target; i++){
				if(i % 2 == 0 && i != 2) continue;
				if(target % i == 0){
					result = result.concat([i]);
					
					let addition = primeFactorization(target/i);
					if(addition[0] != 1) result = result.concat(addition);
					
					break;
				}
			}
	}
	
	return result;
}
