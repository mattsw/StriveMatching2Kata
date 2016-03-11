function match(job, candidates) {
  // Which of these candidates match this job?
  return job.equityMax > 0 
      ? findEligibleCandidates(job, candidates)
      : findEligibleCandidates(job, filterOutEquityCandidates(candidates));
}

function filterOutEquityCandidates(candidates){
    var eligibleCandidates = [];
    candidates.forEach(function(candidate){
        if(!candidate.desiresEquity) eligibleCandidates.push(candidate);
    });
    
    return eligibleCandidates;
}

function findEligibleCandidates(job, candidates){
    var eligibleCandidates = [];
    
    candidates.forEach(function(candidate){
        if(job.locations.indexOf(candidate.currentLocation) != -1){
            eligibleCandidates.push(candidate);
        } else {
            for(var i = 0; i < candidate.desiredLocations.length; i++){
                if(job.locations.indexOf(candidate.desiredLocations[i]) != -1) {
                    eligibleCandidates.push(candidate);
                    break;
                }
            }            
            
        }        
    });
    
    return eligibleCandidates;
}