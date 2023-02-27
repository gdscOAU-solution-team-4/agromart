import { Fragment } from 'react';
import { get as StorageGet } from '../../utils/storage'
import UserOnboard from '../../pages/userOnboard';



const Redirect = ()=>{
    window.location.assign('/login')
    return(
        null
    )
}


const Onboard = () => {
    let useId = StorageGet()
    return(
        <Fragment>
            {
                useId ? <UserOnboard /> : <Redirect />
            }
        </Fragment>
    )
}


export default Onboard;