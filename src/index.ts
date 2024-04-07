const validateEmail = (email: string | null) => {
  if (email === null) return false;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
};

export default validateEmail;
