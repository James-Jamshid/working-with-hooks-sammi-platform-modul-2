import React, { useState, useRef } from "react"
const UseRefHook = () => {
  const [cvcNumber, setCvcNumber] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [anum, setAnum] = useState("")

  const cvcRef = useRef(null)
  const cvcNumbRef = useRef(null)
  const secureNumber = useRef(null)
  const handleInput = (e) => {
    const val = e.target.value
    setCardNumber(val)
    if (val.length === 16) {
      cvcRef.current.focus()
    }
  }

  const onHandle = (e) => {
    const val = e.target.value
    setCvcNumber(val)
    if (val.length === 3) {
      cvcNumbRef.current.focus()
    }
  }
  const Onnumber = (e) => {
    const val = e.target.value
    setAnum(val)
    if (val.length === 4) {
      secureNumber.current.focus()
    }
  }
  //QOIDA:
  //1)Reflar ozimini prerenderimiz ishga tushganida, ya'ni state ozgarib render boganda reflar ozgarmidi.
  //2)UseRefning asosiy vazifasi bu elementga reference ya'ni havola qoldirish

  //biz hozir nima qildik? 2ta input ochib 1-inputga 16ta raqam yozilgandan keyin avtomat tarizda 2- inputga focus qildik.
  //buning uchun 2chi input ozii ref metodini berib olib yuqoridagi funksiyamizni yozdik.

  return (
    <div className='flex justify-center w-[100%] mx-auto '>
      <div className='flex flex-col border px-20 mt-7 py-6 gap-4'>
        <div className='flex '>
          <form className='flex flex-col gap-2' action=''>
            <input
              onChange={handleInput}
              type='text'
              className='form-control'
              placeholder='16 card numbers..'
              value={cardNumber}
            />
            <input
              onChange={onHandle}
              ref={cvcRef}
              value={cvcNumber}
              type='text'
              className='form-control'
              placeholder='3 cvc number..'
            />
            <input
              onChange={Onnumber}
              value={anum}
              ref={cvcNumbRef}
              type='text'
              className='form-control'
              placeholder='birth year...'
            />
            <input
              ref={secureNumber}
              type='number'
              className='form-control'
              placeholder='Enter numbers only...'
            />
            <button type='submit' className='btn btn-success bg-green-600'>
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default UseRefHook
