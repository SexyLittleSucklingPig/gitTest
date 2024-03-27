import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useGetStudentsBayIdQuery, useAddStudentMutation, useUpdataStudentMutation } from '../../store/api/studentApi'

const StudentForm = (props) => {
  const { data: stuData, isSuccess } = useGetStudentsBayIdQuery(props.stuId)


  const [formData, setformData] = useState({
    name: '',
    age: '',
    gender: '男',
    address: '',
  })

  const [addStudent, { isSuccess: isAddsuccess }] = useAddStudentMutation()

  const [updateStudent, { isSuccess: isUpdatesuccess }] = useUpdataStudentMutation()

  useEffect(() => {
    if (isSuccess) {
      setformData(stuData.attributes)
    }
  }, [isSuccess])



  const nameHandleChange = (e) => {
    setformData(prevState => ({
      ...prevState, name: e.target.value
    }))
  }

  const ageHandleChange = (e) => {
    setformData(prevState => ({
      ...prevState, age: +e.target.value
    }))
  }

  const genderHandleChange = (e) => {
    setformData(prevState => ({
      ...prevState, gender: e.target.value
    }))
  }

  const addressHandleChange = (e) => {
    setformData(prevState => ({
      ...prevState, address: e.target.value
    }))
  }


  const commitData = (e) => {
    addStudent(formData)
    setformData({
      name: '',
      age: '',
      gender: '男',
      address: '',
    })
  }
  const updata = () => {
    updateStudent({ id: props.stuId, attributes: formData })
    props.cancelEdit()

  }


  return (
    <>
      <tr>
        <td>
          <input type='text' value={formData.name} onChange={nameHandleChange}></input>
        </td>
        <td>
          <select value={formData.gender} onChange={genderHandleChange}>
            <option value='男'>男</option>
            <option value='女'>女</option>
          </select>
        </td>
        <td>
          <input type='text' value={formData.age} onChange={ageHandleChange}></input>
        </td>
        <td>
          <input type='text' value={formData.address} onChange={addressHandleChange}></input>
        </td>
        <td>
          {props.stuId && <>
            <button onClick={() => props.cancelEdit()}>取消</button>
            <button onClick={updata}>确认</button>
          </>}
          {!props.stuId &&
            <button onClick={commitData}>添加</button>}
        </td>

      </tr>
      {/* {Loading && <tr colSpan={5}>Loading...</tr>}
      {isError && <tr colSpan={5}>添加失败了</tr>} */}
    </>
  )
}
export default StudentForm
