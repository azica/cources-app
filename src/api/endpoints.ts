export enum Endpoints {
  LOGIN = "/auth/login",
  LOGOUT = "/users/logout",
  PASSWORD_RECOVERY = "/users/reset_password/",
  FORGET_PASSOWRD = "/users/reset_password/set_password/",
  PASSWORD_TOKEN_VERIFY = "/users/reset_password/verify/",
  REFRESH_TOKEN = "/auth/refresh-token",
  GET_USER = "/auth/profile"
}
