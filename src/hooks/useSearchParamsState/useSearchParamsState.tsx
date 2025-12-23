import _isEqual from "lodash/isEqual";

import { useEventCallback, useIsMounted } from "@/hooks";
import { commonHelpers } from "@/utils/helpers";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

type ValueType<Value, Multiple extends boolean> = Multiple extends true
  ? Value[]
  : Value;

const useSearchParamsState = <Value, Multiple extends boolean = false>(
  name: string,
  initialValue: ValueType<Value, Multiple>,
  options?: {
    multiple?: Multiple;
    parseNumbers?: boolean;
    parseBooleans?: boolean;
    onChange?: (value: ValueType<Value, Multiple>) => void;
  }
) => {
  const { multiple, parseNumbers, parseBooleans, onChange } = options || {};

  const searchParams = useSearchParams();
  const router = useRouter();
  const searchParamsNameValue = multiple
    ? searchParams.getAll(name)
    : searchParams.get(name);

  const curSearchParamsNameValueRef = useRef(searchParamsNameValue);

  const [value, setValue] = useState<ValueType<Value, Multiple>>(() => {
    if (!!multiple) {
      return searchParams.getAll(name).map((value) => {
        if (parseNumbers && commonHelpers.isNumber(value)) return Number(value);
        if (parseBooleans && ["true", "false"].includes(`${value}`))
          return JSON.parse(value);
        return value;
      }) as unknown as ValueType<Value, Multiple>;
    }
    let searchParamsValue = (searchParams.get(name) ?? "") as any;
    if (parseNumbers && commonHelpers.isNumber(searchParamsValue))
      searchParamsValue = Number(searchParamsValue);
    if (parseBooleans && ["true", "false"].includes(`${searchParamsValue}`))
      return JSON.parse(searchParamsValue);

    return (searchParamsValue as ValueType<Value, Multiple>) || initialValue;
  });

  const setSearchParamsValue = useEventCallback(
    (searchParamsValue: ValueType<Value, Multiple>) => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        if (!!multiple) {
          if (((searchParamsValue as any)?.length ?? 0) < 1)
            params.delete(name);
          else {
            params.delete(name);
            (Array.isArray(searchParamsValue) ? searchParamsValue : []).forEach(
              (value) =>
                params.append(
                  name,
                  typeof value === "string" ? value : JSON.stringify(value)
                )
            );
          }
        } else {
          if (commonHelpers.isEmpty(searchParamsValue)) params.delete(name);
          else params.set(name, JSON.stringify(searchParamsValue));
          params.set(
            name,
            typeof searchParamsValue === "string"
              ? searchParamsValue
              : JSON.stringify(searchParamsValue)
          );
        }
        curSearchParamsNameValueRef.current = multiple
          ? params.getAll(name)
          : params.get(name);
        history.replaceState(
          null,
          "",
          `${window.location.pathname}?${params.toString()}`
        );
      }
      setValue(searchParamsValue);
    }
  );

  const eventCallbackOnChange = useEventCallback(onChange ?? (() => {}));

  const updateValue = useEventCallback(() => {
    curSearchParamsNameValueRef.current = searchParamsNameValue;

    let updatedSearchParamsNameValue = (searchParamsNameValue ?? "") as any;
    if (!!multiple) {
      updatedSearchParamsNameValue = (
        Array.isArray(updatedSearchParamsNameValue)
          ? updatedSearchParamsNameValue
          : !!updatedSearchParamsNameValue
          ? [updatedSearchParamsNameValue]
          : []
      ).map((value) => {
        if (parseNumbers && commonHelpers.isNumber(value)) return Number(value);
        if (parseBooleans && ["true", "false"].includes(`${value}`))
          return JSON.parse(value);
        return value;
      });
    } else {
      if (Array.isArray(updatedSearchParamsNameValue))
        updatedSearchParamsNameValue = updatedSearchParamsNameValue[0] ?? "";
      if (parseNumbers && commonHelpers.isNumber(updatedSearchParamsNameValue))
        updatedSearchParamsNameValue = Number(updatedSearchParamsNameValue);
      if (
        parseBooleans &&
        ["true", "false"].includes(`${updatedSearchParamsNameValue}`)
      )
        updatedSearchParamsNameValue = JSON.parse(updatedSearchParamsNameValue);
    }
    setValue(updatedSearchParamsNameValue);
    eventCallbackOnChange(updatedSearchParamsNameValue);
  });

  const handleRouterChangeComplete = useEventCallback((pathname: string) => {
    if (!isMounted()) return;
    const params = new URLSearchParams(pathname);
    const curSearchParamsNameValue = params.get(name);
    if (
      !_isEqual(curSearchParamsNameValue, curSearchParamsNameValueRef.current)
    ) {
      updateValue();
    }
  });

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouterChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChangeComplete);
    };
  }, []);

  useEffect(() => {
    if (!isMounted()) return;
    // updateValue();
  }, [multiple, parseBooleans, parseNumbers]);

  const isMounted = useIsMounted();

  const searchParamsValue = value;

  return [searchParamsValue, setSearchParamsValue] as const;
};

export default useSearchParamsState;
