import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import errorcodes from "../util/errorcodes";

const initialState = {
  data: [],
  status: errorcodes.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //   fetchproducts(state, action) {
    //     state.data = action.payload;
    //   },
  },

  //its for api errors
  extraReducers: (builder) => {
    builder
      .addCase(getproducts.pending, (state, action) => {
        state.status = errorcodes.LOADING;
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = errorcodes.IDLE;
      })
      .addCase(getproducts.rejected, (state, action) => {
        state.status = errorcodes.ERROR;
      });
  },
});

export const { fetchproducts } = productSlice.actions;
export default productSlice.reducer;

export const getproducts = createAsyncThunk("products/get", async () => {
  const respone = await fetch("https://fakestoreapi.com/products");
  const result = await respone.json();
  return result;
});

// export const getproducts = () => {
//   return async function getproductsThunk(dispatch, getState) {
//     const respone = await fetch("https://fakestoreapi.com/products");
//     const result = await respone.json();
//     dispatch(fetchproducts(result));
//   };
// };
