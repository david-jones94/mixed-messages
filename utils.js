// Helper Functions
export const filterArr = (arr, key, value) => {return arr.filter(obj => obj[key] === value);}
export const randomiser = (arr) => {return arr[Math.floor(Math.random() * arr.length)];}
