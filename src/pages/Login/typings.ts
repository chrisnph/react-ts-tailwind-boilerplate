declare namespace LoginTypes {
  export interface LoginForm {
    inputCredentials?: {
      username: string;
      password: string;
    };
    handleLogin: () => Promise<void>;
  }
}
export default LoginTypes;
