export const FETCH_DATA = "FETCH_DATA";
export const fetch_data = (data) => {
  return {
    type: FETCH_DATA,
    data
  }
}