
import { authUser } from "./Auth";
import writeNewUser from "./WriteUser";


export default async function signUp(email, password, f, l, dob){

    const data = await authUser(email, password);
    if(data !== false){
        return await writeNewUser(data.user.uid, email, password, f, l);
    }
    return false
}