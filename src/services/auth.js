import decode from 'jwt-decode';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    decode(token);
    let reToken = decode(refreshToken);
    if (reToken.exp < new Date().getTime() / 1000) {
      throw new Error('Token has expired!');
    }
  } catch (err) {
    return false;
  }

  return true;
};

export default isAuthenticated;
