export const useAuth = () => {
  const saveSession = (userData, token, refreshToken = null) => {
    if (process.client) {
      try {
        sessionStorage.setItem('user_data', JSON.stringify(userData));
        sessionStorage.setItem('auth_token', token);
        if (refreshToken) {
          sessionStorage.setItem('refresh_token', refreshToken);
        }
        sessionStorage.setItem('session_timestamp', new Date().getTime().toString());
        console.log('Sesión guardada exitosamente');
      } catch (error) {
        console.error('Error al guardar la sesión:', error);
      }
    }
  };

  const clearSession = () => {
    if (process.client) {
      sessionStorage.removeItem('user_data');
      sessionStorage.removeItem('auth_token');
      sessionStorage.removeItem('refresh_token');
      sessionStorage.removeItem('session_timestamp');
      console.log('Sesión eliminada');
    }
  };

  const getCurrentUser = () => {
    if (process.client) {
      const userData = sessionStorage.getItem('user_data');
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  };

  const isAuthenticated = () => {
    if (process.client) {
      const token = sessionStorage.getItem('auth_token');
      const timestamp = sessionStorage.getItem('session_timestamp');
      if (token && timestamp) {
        const sessionAge = Date.now() - parseInt(timestamp);
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours
        return sessionAge < maxAge;
      }
    }
    return false;
  };

  const logout = async () => {
    clearSession();
    await navigateTo('/');
  };

  return {
    saveSession,
    clearSession,
    getCurrentUser,
    isAuthenticated,
    logout,
  };
};
