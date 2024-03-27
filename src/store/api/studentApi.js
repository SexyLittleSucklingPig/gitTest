import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// RTKQ  创建Api对象
//createApi() 用来创建RTKQ中的API对象
// RTKQ的所有功能都需要通过该对象来进行
// createApi() 需要一个对象作为参数
const studentApi = createApi({
    reducerPath: "studentApi", //api的标识
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),//请求更路径 baseQery：fetchBaseQuery({baseUrl:''})
    tagTypes: ['student'],
    endpoints(bind) {   //端点，bind为构建器
        return {
            getStudents: bind.query({ //请求接口
                query() {
                    return 'students'
                },
                transformResponse(baseQueryReturnVale) {
                    return baseQueryReturnVale.data
                },
                providesTags: () => {
                    return [{ type: 'student', id: 'LIST' }]
                }

            }),
            getStudentsBayId: bind.query({ //请求接口
                query(id) {
                    return `students/${id}`
                },
                transformResponse(baseQueryReturnVale) {
                    return baseQueryReturnVale.data
                },
                providesTags: (result, error, id) => {
                    return [{ type: 'student', id }]
                }

            }),
            delStudent: bind.mutation({ //请求接口
                query(id) {
                    return {
                        url: `students/${id}`,
                        method: 'delete'
                    }
                },
                transformResponse(baseQueryReturnVale) {
                    return baseQueryReturnVale.data
                },

            }),
            addStudent: bind.mutation({ //请求接口
                query(stu) {
                    return {
                        url: `students`,
                        method: 'post',
                        body: { data: stu }
                    }
                },
                transformResponse(baseQueryReturnVale) {
                    return baseQueryReturnVale.data
                },
                invalidatesTags: [{ type: 'student', id: 'LIST' }]
            }),
            updataStudent: bind.mutation({ //请求接口
                query(stu) {
                    return {
                        url: `students/${stu.id}`,
                        method: 'put',
                        body: { data: stu.attributes }
                    }
                },
                transformResponse(baseQueryReturnVale) {
                    return baseQueryReturnVale.data
                },
                invalidatesTags: (result, error, stu) => {
                    return [{ type: 'student', id: stu.id }, { type: 'student', id: 'LIST' }]
                }

            }),
        }
    }
})

export const { useGetStudentsQuery, useGetStudentsBayIdQuery, useDelStudentMutation, useAddStudentMutation,
    useUpdataStudentMutation } = studentApi
export default studentApi
