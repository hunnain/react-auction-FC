import { ContactUsCall, DashboardDataGet, DashboardPut, DashboardDataGetById, deleteDashboardRecord,loginCallPost } from "../Services/DashboardService";

export async function ContactUsCallPost(data) {
    let body = {
       
    }
    return await ContactUsCall(body);
}

export async function LoginPost(email,pass) {
    let body = {
       email:email,
       password:pass
    }
    return await loginCallPost(body);
}
export async function DashboardUpdateCall(id, data) {
    let body = {
    
    }
    return await DashboardPut(id, body);
}
export async function getDashboardDetailAll() {

    return await DashboardDataGet();
}
export async function getDashboardDetailById(id) {

    return await DashboardDataGetById(id);
}

export async function deleteRecordDashboardDetail(id) {

    return await deleteDashboardRecord(id);
}
