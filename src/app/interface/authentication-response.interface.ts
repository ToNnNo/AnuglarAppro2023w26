import { AuthenticateUser } from "./authenticate-user";

export interface AuthenticationResponse {
  token: string;
  user: AuthenticateUser;
}
