import "next-auth";
import { User as SchemaUser } from "@/shared/schema";

declare module "next-auth" {
  interface User {
    id: string;
    name?: string | null;
    username: string;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      username: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
  }
}