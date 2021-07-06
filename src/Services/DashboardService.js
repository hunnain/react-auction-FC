import { PostAsync, GetAsync, PutAsync, DeleteAsync } from "./api";

export async function ContactUsCall(body) {
  return await PostAsync(`${process.env.REACT_APP_BASE_URL}/leads/create`, body, true);
}
export async function loginCallPost(body) {
  return await PostAsync(`${process.env.REACT_APP_BASE_URL}/authentication`, body, true);
}
export async function DashboardPut(id, body) {
  return await PutAsync(`${process.env.REACT_APP_BASE_URL}/Dashboard/PutDashboard?id=${id}`, body, true);
}

export async function DashboardDataGet() {
  return await GetAsync(`${process.env.REACT_APP_BASE_URL}/web/products`, false);
}
export async function DashboardDataGetById(id) {
  return await GetAsync(`${process.env.REACT_APP_BASE_URL}/Dashboard/GetDashboardById?id=${id}`, true);
}
export async function deleteDashboardRecord(id) {
  return await DeleteAsync(`${process.env.REACT_APP_BASE_URL}/DeleteDashboard?id=${id}`, true);
}
