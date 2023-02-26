export const save = (item)=> localStorage.setItem('docRef', item)

export const get = ()=> localStorage.getItem('docRef')

export const clear = ()=> localStorage.clear()