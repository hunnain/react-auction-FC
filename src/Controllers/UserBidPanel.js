import { updateProfilePost } from "../Services/UserBidPanelService";

export async function updateProfile(data) {
    let body = {
       firstName:data.firstName,
       lastName:data.lastName,
       mobile:data.mobile,
       email:data.email
    }
    return await updateProfilePost(body);
}
