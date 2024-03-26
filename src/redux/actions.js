import axios from 'axios'

export const postData = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://658aa7e7ba789a96223780e2.mockapi.io/practic', data)
      console.log(response.data);
      dispatch({ type: 'POST_DATA_SUCCESS', payload: response.data })
    } catch (error) {
      console.error('Ошибка запроса', error)
      dispatch({ type: 'POST_DATA_ERROR', payload: error })
    }
  }
}
