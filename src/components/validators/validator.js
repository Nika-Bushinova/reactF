export const required=(value)=>{
   if (value) return undefined
   return 'error message'
}
export const maxLengthF=(symbolsCount)=>(value)=>{
   if (value&&value.length>symbolsCount) return `Max length is ${symbolsCount} symbols`
   return undefined
}

