import axiosCilent from "./axiosCilent"


const categoryApi= {
getAll(params){
const url = '/categories'
return axiosCilent.get(url, {params})
},
get(id){
    const url = `/categories/${id}`
    return axiosCilent.get(url)
},
add(data){
    const url = `/categories/`
    return axiosCilent.post(url, {data})
},
update(data){
    const url = `/categories/${data.id}`
    return axiosCilent.patch(url, data)
},
remove(id){
    const url = `/categories/${id}`
    return axiosCilent.delete(url)
}
}
export default categoryApi;