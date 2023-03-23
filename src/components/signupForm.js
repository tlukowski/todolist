 import { Field, useFormik, } from 'formik';

 const SignupForm = () => {

   const formik = useFormik({

     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
       phone: '',

     },

     onSubmit: values => {

       alert(JSON.stringify(values, null, 2));

     },

   });
   const validate = (values, props /* only available when using withFormik */) => {
    const errors = {};
 
    if (!values.email) {
 
      errors.email = 'Required';
 
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
 
      errors.email = 'Invalid email address';
 
    }  
    return errors;
 
  };  

   return (
    <div className='px-6 pt-6'>
      <form className='flex flex-col ' onSubmit={formik.handleSubmit}>      
        <label className='text-sm text-primary font-bold' htmlFor="firstName">First Name</label>
        
        <input
          className='border border-primary shadow-basic rounded mt-2 focus:outline-none px-2 py-1 text-sm'
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <label className='text-sm text-primary font-bold mt-4' htmlFor="lastName">Last Name</label>
        <input
          className='border border-primary shadow-basic rounded mt-2 focus:outline-none px-2 py-1 text-sm'
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <label className='text-sm text-primary font-bold mt-4' htmlFor="email">Email Address</label>

        <input
          className='border border-primary shadow-basic rounded mt-2 focus:outline-none px-2 py-1 text-sm'
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

          <label className='text-sm text-primary font-bold mt-4' htmlFor="phone">Phone number</label>

          <input
            className='border border-primary shadow-basic rounded mt-2 focus:outline-none px-2 py-1 text-sm'
            id="phone"
            name="phone"
            type="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        <div className='mt-8'>
        <button className='relative group bg-primary text-white py-[14px] w-full block rounded-[14px] hover:bg-violet-900 transition-colors duration-300] text-center' type="submit">Register</button>
        </div>
      </form>
     </div>

   );

 };

 export default SignupForm;