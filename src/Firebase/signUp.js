import { STRING_UNARY_OPERATORS } from "../../../../../AppData/Local/Microsoft/TypeScript/4.8/node_modules/@babel/types/lib/index";
import { authUser } from "./Auth";
import writeNewUser from "./WriteUser";


export default async function signUp(email, password, f, l, dob){

    const data = await authUser(email, password);
    if(data !== false){
        return await writeNewUser(data.user.uid, email, password, f, l, dob);
    }
    return false
}