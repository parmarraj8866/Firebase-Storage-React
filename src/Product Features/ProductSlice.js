import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from 'firebase/firestore'
import { db } from '../../firestore'

// Add Product
export const createProduct = createAsyncThunk('/createProduct', async (data) => {
  await addDoc(collection(db, "ProductList"), data)
  return data
})

// View Products
export const viewProduct = createAsyncThunk('/viewProduct', async () => {
  const result = await getDocs(query(collection(db, "ProductList")))
  let arr = []

  result.forEach((ele) => {
    const product = {
      id: ele.id,
      ...ele.data()
    }
    arr.push(product)
  })
  return arr
})

// Delete Product
export const deleteProduct = createAsyncThunk('/deleteProduct', async (id) => {
  await deleteDoc(doc(db, `ProductList/${id}`))
  return id
})

// Update Product
export const updateProduct = createAsyncThunk('/updateProduct', async (data) => {
  await updateDoc(doc(db, `ProductList/${data.id}`), data)
  return data
})

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
  },
  reducers: {},
  extraReducers: (res) => {
    res
      .addCase(createProduct.fulfilled, (state, action) => {
        state.productList.push(action.payload)
      })
      .addCase(viewProduct.fulfilled, (state, action) => {
        state.productList = action.payload
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        let id = action.payload
        state.productList = state.productList.filter((ele) => ele.id !== id)
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        let { id } = action.payload
        let index = state.productList.findIndex((ele) => ele.id === id)
        if (index !== -1) {
          state.productList[index] = action.payload
        } else {
          alert("Product Not Found")
        }
      })
  },
})

export default ProductSlice.reducer
