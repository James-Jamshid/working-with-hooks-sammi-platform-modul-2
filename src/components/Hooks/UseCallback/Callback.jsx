import React, { useState, useCallback } from "react"
import Generate from "./Generate"
// ////////////////////////////////// ////////////////////////////////// ///////////////////////////////
const Guest = (props) => {
  const [counter, setCounter] = useState(0)
  const [active, setActive] = useState(true)
  const onInc = () => {
    setCounter(counter + 1)
  }
  const onActive = () => {
    setActive((active) => !active)
    // setActive(prevState=>!prevState)
    //useState orqali raqamalrni qoshish, ayirish, nolga tennglash; malumotlarni yashirish -ko'rsatishni organdim.
    //va yana set /useState orqali falseni true qilish, ozgarganda stylni ham ozgartirishni organdim.
  }

  const color = {
    fontWeight: "bold",
    color: active ? "green" : "red",
  }
  const counterGenerate = useCallback(() => {
    return new Array(counter)
      .fill("")
      .map((_, index) => `Counter number ${index + 1}`)
    //QOIDA:
    //bu funksiyamiz add btn ni bosganimizda kopayayotgan /counter/ni useEffectga solib qayta update qilib map orqali ekranga chiqarib beradi.
    //bunda yonidagi /change/ btnni bosganimizda ham useEffect ishlab shu bolimni qayta update qilib beradi.
    // bu yerda funksiyamiz ichida serverdan kelgan ma'lumot bo'lsa har safar kerarsiz btnni boganimizda bo'lim update bo'laversa, bu saytimizda katta bug ya'ni sekinlashishni yuzaga keltiradi.
    // xosh nima qilish kerak?
    //javob: biz bu yerda useCallback hookini ishlatsak, boladi-- useCallback hooki oz ichidagi /deps/  ichiga kiritilgan buyruqnigina ishlatadi.
  }, [counter])

  return (
    <div className='w-50 mx-auto'>
      <div className='border p-3 mt-5'>
        <h1>
          User: {props.fname} {props.lname}
        </h1>
        <div className='mt-3'>
          <button
            onClick={onInc}
            type='button'
            className='btn btn-success bg-green-600'
          >
            add
          </button>
          <button onClick={onActive} type='button' className='btn btn-info'>
            change
          </button>
          <div>
            <p className='text-center' style={color}>
              user activated: {counter}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Generate counterGenerate={counterGenerate} />
      </div>
    </div>
  )
}
const CallbackHook = () => {
  return (
    <div>
      {" "}
      <Guest fname='Jamshid' lname='Makhmudov' />
    </div>
  )
}
export default CallbackHook
