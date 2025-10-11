"use client";

import { useUserSessionFetchStore } from "@/lib/hooks/fetchStores/session.ts";
import assert from "assert";
import { LoginResult } from "fimidara-private-js-sdk";
import { first } from "lodash-es";

export interface IUseAssertGetUserResult {
  assertGet: () => NonNullable<LoginResult>;
}

export function useAssertGetUser(): IUseAssertGetUserResult {
  const assertGet = (): LoginResult => {
    const state = first(useUserSessionFetchStore.getState().states);
    const [, existingState] = state ?? [];
    assert.ok(existingState?.data?.other?.refresh);
    return existingState.data.other.refresh.getValue();
  };

  return { assertGet };
}
