export const getTokenFromStorage = (): string | null => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    console.warn("Token no encontrado en localStorage.");
    return null;
  }
  return token;
};
