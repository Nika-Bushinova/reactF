export const required=(value)=>{
   if (value) return undefined
   return 'Field is required'
}
export const maxLengthF=(symbolsCount)=>(value)=>{
   if (value&&value.length>symbolsCount) return `Max length is ${symbolsCount} symbols`
   return undefined
}

