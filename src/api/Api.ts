import { apiClient } from "../utils/apiClient";

export const getCovid19InfStateJson = async () => {
  try{
    const { data } = await apiClient.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84168dd6-1a38-4965-90a9-0f08f82280ed/getCovid19InfStateJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220620T231829Z&X-Amz-Expires=86400&X-Amz-Signature=ae8396492ef0221fead81b03e1f7abafadd4135d10d1d0c4a21c20f736ce38ed&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22getCovid19InfStateJson.json%22&x-id=GetObject')
    return { data };
  } catch (e: any){
    console.log(e);
  }
}

export const getCovid19GenAgeCaseInfJson = async () => {
  try{
    const { data } = await apiClient.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f70142f-4f22-4bf9-84d4-62ba9edfcdda/getCovid19GenAgeCaseInfJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220621T030000Z&X-Amz-Expires=86400&X-Amz-Signature=78301310289f4dac3262c558fba7c4a24c03aeafe32fd6ecf67fae85979a4fd3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22getCovid19GenAgeCaseInfJson.json%22&x-id=GetObject')
    return { data };
  } catch (e: any){
    console.log(e);
  }
}