export const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
};
export const saveUser = (key, user) => {
  localStorage.setItem(key, JSON.stringify(user));
};
export const saveStatus = (key, status) => {
  localStorage.setItem(key, JSON.stringify(status));
};
