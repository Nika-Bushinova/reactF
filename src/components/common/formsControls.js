import React from "react";
import classes from './formControls.module.css'
/*
export const Textarea=({input, meta,...props})=>{
   const hasError=meta.touched&&meta.error 
   return(
      <div >
       
         <textarea className={hasError?classes.error:classes} {...input}{...props}></textarea>
         {hasError&&<span className={classes.formControl__span}>{meta.error}</span>}
      </div>
   )
}
export const Input=({input, meta,...props})=>{
   const hasError=meta.touched&&meta.error 
   return(
      <div >
       
         <input className={hasError?classes.error:classes} {...input}{...props}></input>
         {hasError&&<span className={classes.formControl__span}>{meta.error}</span>}
      </div>
   )
}*/
 export const FormControl=({input, meta,child, element,...props})=>{
   return(
      <div >
        {props.children}
         {meta.touched&&meta.error &&<span className={classes.formControl__span}>{meta.error}</span>}
      </div>
   )
}

export const Textarea=(props)=>{
   const {input, meta,child,...restProps}=props
   return <FormControl {...props}><textarea {...input} {...restProps} className={meta.touched&&meta.error ?classes.error:classes}/></FormControl>
  }
  export const Input=(props)=>{
   const {input, meta,child,...restProps}=props
   return <FormControl {...props}><input {...input} {...restProps} className={meta.touched&&meta.error ?classes.error:classes}/></FormControl>
  }