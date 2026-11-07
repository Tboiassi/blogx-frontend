export type UserRole = "ADMIN" | "AUTHOR" | "READER";

export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
}