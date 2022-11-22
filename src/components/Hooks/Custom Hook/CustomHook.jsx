import useInputValidation from "./useInputValidation"
//customhook nega kerak?
//ba'zida hooklarda bir xil statelarni juda kop ishlatamiz, shunda ularni takror qayta qayta ishlatish orniga shaxsiy hookimizni ya'ni custom hookni yozishimizkerak boladi.
const CustomHook = () => {
  const firstname = useInputValidation("")
  const lastname = useInputValidation("")
  return (
    <div className='flex flex-col gap-7 w-50 mx-auto '>
      <div className='border-2 p-3 mt-5 '>
        <p className='text-center fs-3'>Register</p>
        <div className='d-flex gap-3 '>
          <input
            onChange={firstname.onChange}
            value={firstname.value}
            className={`form-control ${firstname.validateColor}`}
            placeholder='first name...'
            type='text'
          />
          <input
            onChange={lastname.onChange}
            value={lastname.value}
            className={`form-control ${lastname.validateColor}`}
            placeholder='last name...'
            type='text'
          />
        </div>
        <div>
          <button className='mt-3 btn btn-success'>Send</button>
        </div>
      </div>
    </div>
  )
}
export default CustomHook
