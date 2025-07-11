import { DrizzleAdapter } from "@auth/drizzle-adapter";
import assert from "assert";
import { FimidaraEndpoints } from "fimidara-private-js-sdk";
import NextAuth, { Session } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { NextRequest } from "next/server";
import { db } from "./db/schema";
import { systemConstants } from "./lib/definitions/system.ts";
import { IOAuthUser } from "./lib/definitions/user.ts";

const internalAuthSecret = process.env.INTER_SERVER_AUTH_SECRET;

if (!internalAuthSecret) {
  throw new Error("INTER_SERVER_AUTH_SECRET is not set");
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  // debug: true,
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true,
    }),
    GitHub({
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  adapter: DrizzleAdapter(db),
  events: {
    createUser: async ({ user }) => {
      assert(user.id, "user ID is not set");
      assert(user.name, "user name is not set");
      assert(user.email, "user email is not set");

      const endpoint = new FimidaraEndpoints({
        serverURL: systemConstants.serverAddr,
      });

      // I think it's safe to assume that the email is verified at the time of
      // creation for the 2 providers we use, Google and GitHub
      const emailVerifiedAt = Date.now();
      await endpoint.users.signupWithOAuth({
        oauthUserId: user.id,
        interServerAuthSecret: internalAuthSecret,
        name: user.name,
        email: user.email,
        emailVerifiedAt,
      });
    },
  },
  callbacks: {
    session: async ({ session, user }) => {
      const endpoint = new FimidaraEndpoints({
        serverURL: systemConstants.serverAddr,
      });

      const res = await endpoint.users.loginWithOAuth({
        oauthUserId: user.id,
        interServerAuthSecret: internalAuthSecret,
        // there is no need to pass the emailVerifiedAt here, because it's
        // already set in the createUser event
      });
      const userData: IOAuthUser = {
        ...user,
        ...res,
      };

      return {
        ...session,
        user: userData,
      };
    },
  },
  pages: {
    error: "/error",
  },
  // cookies: {
  //   pkceCodeVerifier: {
  //     name: "next-auth.pkce.code_verifier",
  //     options: {
  //       httpOnly: true,
  //       sameSite: "none",
  //       path: "/",
  //       secure: true,
  //     },
  //   },
  // },
});

export interface NextAuthRequest extends NextRequest {
  auth: Session | null;
}
