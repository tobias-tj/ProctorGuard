export const logoutGeneral = () => {
  localStorage.clear();
  window.location.href = "/";
};
