const BASE_URL = `${import.meta.env.VITE_API_URL}`;

import type { UpdateBinder } from "../types/responses";


export const  updateBinderServiceResponse = async (
  binderName: string,
  accessToken: string,
  newBinderImage: string
) => {
try {

      const options = {
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}` 
        },
        body: JSON.stringify({
          binderName,
          newBinderImage
        })
      }

      const response = await fetch(`${BASE_URL}/binders/${binderName}`, options);

      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `http error: ${response.status}`);
      };

      const updatedBinder = await response.json();
      
      if(!updatedBinder.success) {
        return null
      }

      const successfullUpdateResults: UpdateBinder = updatedBinder;

      console.log(`${successfullUpdateResults.message}: ${successfullUpdateResults.binderImage}`);
      return successfullUpdateResults

} catch (error) {
    console.log(error);
    throw error;
}

}