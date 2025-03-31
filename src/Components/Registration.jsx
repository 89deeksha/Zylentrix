import React from 'react'
import { useForm } from 'react-hook-form';

function Registration() {

    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting },
      } = useForm();
     //API call simulate asyn await promis call

async function onSubmit(data){
  await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log("form submitted",data)
}
  return (
   
        <form  onSubmit={handleSubmit(onSubmit)}>
             <div className='forms'>
              <div className='input'>
            <label htmlFor="">First Name:</label>
            <input {...register('firstName',
              { required: true,
              minLength:{value:3, message:"min len should 3" },
              maxLength:{value:5, message:"max len should 5"}})} />
              
            {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
            </div>
            
            

            <div>
            <label htmlFor="">Last Name:</label>
            <input {...register('lastName',{ required: true })}  />
            </div>
            
            <div>
            <label htmlFor="">Password:</label>
            <input {...register('password',{ required: true })}  />
            </div>
            <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting....":"Submit"}/>
            </div>
            
        </form>
    
  )
}

export default Registration