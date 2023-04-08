export type ApplicationError = {
  name: string;
  message: string;
};

export type BodyUser = {
  name: string,
  email: string,
  password: string,
  avatar: string,
}

export type Login = Omit<BodyUser, "name" | "avatar">