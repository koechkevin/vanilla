export const store = () => JSON.parse(localStorage.getItem('store'));

export const setStore = (value) => {
  const newStore = JSON.stringify({...store(), ...value});
  localStorage.setItem('store', newStore);
};
