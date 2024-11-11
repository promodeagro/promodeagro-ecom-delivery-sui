import { updateLoading, setPersonalDetails, setError } from './onboardingSlice';
import Config from 'Views/Config';

export const updatePersonalDetails = (personalDetails) => async (dispatch) => {
  dispatch(updateLoading(true));

  console.log("API URL:", Config.PERSONAL_DETAILS);
  console.log("Request Body:", JSON.stringify(personalDetails));

  try {
    const response = await fetch(Config.PERSONAL_DETAILS, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personalDetails),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch(setPersonalDetails(personalDetails));
    } else {
      dispatch(setError(data.message || "Failed to update personal details"));
    }
  } catch (error) {
    dispatch(setError(error.message || "An error occurred"));
  } finally {
    dispatch(updateLoading(false));
  }
};
