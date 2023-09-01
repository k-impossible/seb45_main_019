export const useValidation = (id?: string) => {
  switch (id) {
    case 'username':
      return (value: string) => {
        return value.length <= 5 && value.length < 20
          ? { valid: true, msg: '' }
          : { valid: false, msg: '5~20 글자 영소문자, 숫자' };
      };
    default:
      return () => {
        return { valid: true, msg: '' };
      };
  }
};
