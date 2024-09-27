// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Async thunk for creating a user and address
// export const createUserAndAddress = createAsyncThunk(
//   'user/createUserAndAddress',
//   async (userDetails, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         "https://09ubwkjphb.execute-api.us-east-1.amazonaws.com/createUserAndAddress",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userDetails),
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to create user and address');
//       }

//       const data = await response.json();
//       console.log('Response:', data); // Log the response data
//       return data;
//     } catch (error) {
//       console.error('Error:', error);
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     user: null,
//     status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null,
//   },
//   reducers: {
//     // If you need additional reducers, add them here
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createUserAndAddress.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(createUserAndAddress.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload; // Store the user data in the state
//       })
//       .addCase(createUserAndAddress.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload; // Store the error message
//       });
//   },
// });

// export default userSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { CreateUser } from './CreateUserThunk';

const creaeUserSlice = createSlice({
    name: "creaeUser",
    initialState: {
      userData: null,
      loading: false,
      error: null,
    },
    reducers: {
      // Optional: define other reducers if needed
    },
    extraReducers: (builder) => {
      builder
        .addCase(CreateUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(CreateUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(CreateUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default creaeUserSlice.reducer;