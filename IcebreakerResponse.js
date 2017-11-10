function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emailArray) {
  return emailArray.map(function(email) {
    new IcebreakerResponse(email)
  })
  console.log(IcebreakerResponse)
  debugger;
}
