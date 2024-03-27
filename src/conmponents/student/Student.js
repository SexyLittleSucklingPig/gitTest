import React, { useCallback, useContext, useState } from 'react';
import StudentForm from './StudentForm';
import { useDelStudentMutation } from '../../store/api/studentApi'

const Student = (props) => {

    //修改
    const [isEdit, setIsEdit] = useState(false)

    //获取删除钩子
    const [delStudent, { isSuccess }] = useDelStudentMutation()

    //取消修改
    const cancelEdit = () => {
        setIsEdit(false)
    }

    const ondelete = () => {
        delStudent(props.stu.id)
    }
    return (
        <>
            {(!isEdit && !isSuccess) &&
                <tr>
                    <td>{props.stu.attributes.name}</td>
                    <td>{props.stu.attributes.gender}</td>
                    <td>{props.stu.attributes.age}</td>
                    <td>{props.stu.attributes.address}</td>
                    <td>
                        <button onClick={ondelete}>删除</button>
                        <button onClick={() => setIsEdit(true)}>修改</button>
                    </td>
                </tr>
            }
            {isEdit && <StudentForm stuId={props.stu.id} cancelEdit={cancelEdit} />}
            {/* {isSuccess && <tr>
                <td colSpan={5}>数据删除</td>
            </tr>} */}
            {/* {Loading && <tr colSpan={5}>删除中...</tr>}
            {isError && <tr colSpan={5}>删除失败...</tr>} */}
        </>
    );
};

export default Student;
