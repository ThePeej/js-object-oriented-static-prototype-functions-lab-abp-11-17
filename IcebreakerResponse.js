function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emailArray) {
  return emailArray.map(function(email) {
    console.log(IcebreakerResponse(email))
    debugger;
    return new IcebreakerResponse(email)
    
  })
}
