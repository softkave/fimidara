"use client";

import { FimidaraEndpoints } from "fimidara";
import {
  FimidaraJsConfigAuthToken,
  FimidaraEndpoints as PrivateFimidaraEndpoints,
} from "fimidara-private-js-sdk";
import { first } from "lodash-es";
import { getSession } from "next-auth/react";
import { systemConstants } from "../definitions/system";
import { IOAuthUser } from "../definitions/user.ts";
import { useUserSessionFetchStore } from "../hooks/fetchStores/session.ts";
import { kUserSessionStorageFns } from "../storage/UserSessionStorageFns.ts";

async function getTokensFromOAuth() {
  const auth = await getSession();
  const user = auth?.user as IOAuthUser | undefined;
  if (!user) {
    return undefined;
  }

  const jwtToken = user.jwtToken;
  const clientJwtToken = user.clientJwtToken;

  kUserSessionStorageFns.setData({
    clientJwtToken,
    jwtToken,
    jwtTokenExpiresAt: user.jwtTokenExpiresAt,
    refreshToken: user.refreshToken,
  });

  return { jwtToken, clientJwtToken };
}

function getUserTokenFromStore() {
  const state = first(useUserSessionFetchStore.getState().states);
  if (state) {
    return state[1].data?.other?.refresh;
  }
}

function getUserTokenFromStorage() {
  return kUserSessionStorageFns.getData()?.jwtToken ?? undefined;
}

export async function getUserToken() {
  const token =
    getUserTokenFromStore() ??
    getUserTokenFromStorage() ??
    (await getTokensFromOAuth())?.jwtToken;

  return token;
}

function getClientTokenFromStore() {
  const state = first(useUserSessionFetchStore.getState().states);
  if (state) {
    return state[1].data?.other?.refresh;
  }
}

function getClientTokenFromStorage() {
  return kUserSessionStorageFns.getData()?.clientJwtToken ?? undefined;
}

export async function getClientToken() {
  const token =
    getClientTokenFromStore() ??
    getClientTokenFromStorage() ??
    (await getTokensFromOAuth())?.clientJwtToken;

  return token;
}

export function getPublicFimidaraEndpoints(
  props: { authToken?: FimidaraJsConfigAuthToken } = {}
) {
  const { authToken } = props;
  const publicFimidaraEndpoints = new FimidaraEndpoints({
    authToken,
    serverURL: systemConstants.serverAddr,
  });

  return publicFimidaraEndpoints;
}

export function getPrivateFimidaraEndpoints(
  props: { authToken?: FimidaraJsConfigAuthToken } = {}
) {
  const { authToken } = props;
  const privateFimidaraEndpoints = new PrivateFimidaraEndpoints({
    authToken,
    serverURL: systemConstants.serverAddr,
  });

  return privateFimidaraEndpoints;
}

export async function getPublicFimidaraEndpointsUsingUserToken(
  props: { userToken?: string; throwIfNoToken?: boolean } = {}
) {
  const { userToken = await getUserToken(), throwIfNoToken = true } = props;
  if (throwIfNoToken && !userToken) {
    throw new Error("No user token found");
  }

  return getPublicFimidaraEndpoints({ authToken: userToken });
}

export async function getPrivateFimidaraEndpointsUsingUserToken(
  props: { userToken?: string; throwIfNoToken?: boolean } = {}
) {
  const { userToken = await getUserToken(), throwIfNoToken = true } = props;
  if (throwIfNoToken && !userToken) {
    throw new Error("No user token found");
  }

  return getPrivateFimidaraEndpoints({ authToken: userToken });
}
