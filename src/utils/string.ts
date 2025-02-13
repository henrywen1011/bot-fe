import { base64, hex } from "@scure/base";
import BigNumber from "bignumber.js";
import _ from "lodash";
import { toast } from "react-toastify";

const DEFAULT_PRECISION = 0;

const defaultFormatSettings = {
  // string to prepend
  prefix: "",
  // decimal separator
  decimalSeparator: ".",
  // grouping separator of the integer part
  groupSeparator: ",",
  // primary grouping size of the integer part
  groupSize: 3,
  // secondary grouping size of the integer part
  secondaryGroupSize: 0,
  // grouping separator of the fraction part
  fractionGroupSeparator: " ",
  // grouping size of the fraction part
  fractionGroupSize: 0,
  // string to append
  suffix: "",
};

export const MONTH_IN_SECONDS = 30 * 24 * 60 * 60;
export const DAY_IN_SECONDS = 24 * 60 * 60;
export const HOUR_IN_SECONDS = 60 * 60;
export const MINUTE_IN_SECONDS = 60;

export type UTXO = {
  txid: string;
  vout: number;
  status: {
    confirmed: boolean;
    block_height?: number;
    block_hash?: string;
    block_time?: number;
  };
  value: number;
};

export function replaceMiddleWithDots(walletAddress: string) {
  const firstPart = walletAddress.slice(0, 6);
  const lastPart = walletAddress.slice(56);

  const hiddenMiddle = "...";

  return firstPart + hiddenMiddle + lastPart;
}

export const getAvailableToken = (ordinalData: any) => {
  let claimableTokens = 0;
  claimableTokens += (ordinalData?.ogPassCnt ?? 0) * 0;
  claimableTokens += (ordinalData?.nodeMonkeCnt ?? 0) * 40000;
  claimableTokens += (ordinalData?.ombCnt ?? 0) * 40000;
  claimableTokens += (ordinalData?.qtCatCnt ?? 0) * 40000;
  claimableTokens += (ordinalData?.bitFrogCnt ?? 0) * 25000;
  claimableTokens += (ordinalData?.bitPunkCnt ?? 0) * 10000;
  claimableTokens += (ordinalData?.runestoneCnt ?? 0) * 9430;
  claimableTokens += (ordinalData?.bitmapCntUnder10k ?? 0) * 5000;

  return claimableTokens;
};

export const getAvailableOrdinal = (ordinalData: any) => {
  let claimableOrdinals = 0;
  claimableOrdinals += ordinalData?.ogPassCnt ?? 0;
  claimableOrdinals += ordinalData?.bitmapCntUnder10k ?? 0;
  claimableOrdinals += ordinalData?.bitFrogCnt ?? 0;
  claimableOrdinals += ordinalData?.bitPunkCnt ?? 0;
  claimableOrdinals += ordinalData?.nodeMonkeCnt ?? 0;
  claimableOrdinals += ordinalData?.ombCnt ?? 0;
  claimableOrdinals += ordinalData?.qtCatCnt ?? 0;
  claimableOrdinals += ordinalData?.runestoneCnt ?? 0;

  return claimableOrdinals;
};

export const removeCommaFromString = (str: string) => {
  if (!str) return "";
  return str?.replace(/,/g, "");
};
export const getReducedText = (
  str: string | undefined,
  startLen = 10,
  endLen = 10
) => {
  if (_.isEmpty(str)) return "";
  const value = removeCommaFromString(str!);
  return `${value?.substring(0, startLen)}...${value?.substring(
    value?.length - endLen
  )}`;
};

export const convertDisplayDateTime = (date: any) => {
  // Parse the datetime string with timezone awareness
  const datetimeObj = new Date(date);

  // Convert to the desired format (without seconds and timezone)
  const formattedDatetime = datetimeObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formattedDatetime;
};

export const numberWithCommas = (num: number | string) => {
  if (!num) return "0";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertToIntegerWithComma = (value: any) => {
  if (!value) return "";
  let newValue = value;
  let str = value
    .toString()
    .replaceAll(",", "")
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  if (
    removeCommaFromString(value.toString()).length > 0 &&
    removeCommaFromString(value.toString())[0] === "0"
  )
    str = str.substring(1);
  if (/^\d*$/.test(removeCommaFromString(value.toString()))) newValue = str;
  else newValue = str.slice(0, value.length - 1);
  return newValue;
};

export const displayUnits = (count: number, unit: string) => {
  const _count = Math.floor(count);
  if (_count < 1) return "";
  return `${count} ${unit}${_count > 1 ? "s" : ""}`;
};

export const convertReadableTime = (seconds: number) => {
  const days = Math.floor(seconds / DAY_IN_SECONDS);
  const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);
  const mins = Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS);
  const secs = seconds % MINUTE_IN_SECONDS;

  if (seconds >= DAY_IN_SECONDS) return `${displayUnits(days, "Day")}`;
  else if (seconds >= HOUR_IN_SECONDS) {
    return `${displayUnits(hours, "Hour")}`;
  } else if (seconds >= MINUTE_IN_SECONDS)
    return `${displayUnits(mins, "Minute")}`;
  else if (seconds > 0) return `${displayUnits(secs, "Second")}`;
  return "Finished";
};

export const displayDate = (timeInSeconds: number) => {
  const date = new Date(timeInSeconds * 1000);
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
};

export const getTimerValue = (start_ts: number) => {
  const now = Math.floor(Date.now() / 1000);
  const diff = start_ts - now;
  if (diff < 0) return { day: 0, hour: 0, min: 0 };

  return {
    day: Math.floor(diff / DAY_IN_SECONDS),
    hour: Math.floor((diff % DAY_IN_SECONDS) / HOUR_IN_SECONDS),
    min: Math.floor((diff % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS),
  };
};

export function forceNumeric(nr: any) {
  return nr
    .replace(",", ".")
    .replace(/[^0-9.]/g, "")
    .replace(/((\d+)?\.(\d+)?)\.(.*)/g, "$1");
}

export const isValidNumber = (
  text: any,
  precision = DEFAULT_PRECISION,
  isInteger = false
) => {
  const normalizedText = text.replace(/,/, ".");

  const integerNumberRegexp = /^\d*$/gi;

  if (isInteger) {
    return integerNumberRegexp.test(text);
  }

  const decimalNumberRegexp = new RegExp(`^\\d+\\.\\d{0,${precision}}$`, "gi");

  return (
    integerNumberRegexp.test(normalizedText) ||
    decimalNumberRegexp.test(normalizedText)
  );
};

function removeZerosFromEnd(num: any) {
  const numStr = num.toString();
  const integerPart = numStr.split(".")[0];
  const decimalPart = numStr.split(".")[1];

  if (!decimalPart) return numStr;

  let i = decimalPart.length - 1;

  for (; i >= 0; i--) {
    if (decimalPart[i] !== "0") break;
  }

  if (i < 0) return integerPart;

  return `${integerPart}.${decimalPart.slice(0, i + 1)}`;
}

export const number_format = (
  number: any,
  {
    precision = DEFAULT_PRECISION,
    short = false,
    noCommas = false,
    removeZeroEnd = false,
    roundingMode = BigNumber.ROUND_DOWN,
    formatSettings = {},
    returnNumber = false,
  } = {}
) => {
  const BGNumber = new BigNumber(number || 0);

  let formattedNumber = BGNumber.toFormat(precision, roundingMode, {
    ...defaultFormatSettings,
    ...formatSettings,
  });

  if (short && !returnNumber) {
    formattedNumber = shortNumberFormat(BGNumber.toString(), precision);
  }

  if (noCommas || returnNumber) {
    formattedNumber = BGNumber.toFormat(precision, roundingMode, {
      ...defaultFormatSettings,
      groupSeparator: "",
      ...formatSettings,
    });
  }

  const result = removeZeroEnd
    ? removeZerosFromEnd(formattedNumber)
    : formattedNumber;

  return returnNumber ? Number.parseFloat(result) : result;
};

export const bigNumberPrefixes = [
  { value: 1, symbol: "" },
  { value: 1e3, symbol: "K" },
  { value: 1e6, symbol: "M" },
  { value: 1e9, symbol: "G" },
  { value: 1e12, symbol: "T" },
  { value: 1e15, symbol: "P" },
  { value: 1e18, symbol: "E" },
  { value: 1e21, symbol: "Z" },
  { value: 1e24, symbol: "Y" },
];

function shortNumberFormat(num: any, digits: any) {
  const numToCheck = Math.abs(num);

  for (let i = bigNumberPrefixes.length - 1; i >= 0; i -= 1) {
    if (numToCheck >= bigNumberPrefixes[i].value) {
      const newNumber = (num / bigNumberPrefixes[i].value).toFixed(digits);

      return `${newNumber}${bigNumberPrefixes[i].symbol}`;
    }
  }

  return "0";
}

export const convert_from_wei_value_with_decimal = (
  wei_value: any,
  decimal: number
) => {
  const decimalBN = Math.pow(10, decimal);

  const val = Number(wei_value) / Number(decimalBN);
  const formattedVal = val.toFixed(decimal).replace(/\.?0+$/, "");
  return formattedVal;
};

export function uint8ArrayToString(uint8Array: Uint8Array): string {
  // Convert Uint8Array to a base64 encoded string
  return btoa(String.fromCharCode(...uint8Array));
}

export function stringToUint8Array(str: string): Uint8Array {
  // Decode base64 string to binary string
  const binaryString = atob(str);
  // Create a Uint8Array from the binary string
  const uint8Array = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  return uint8Array;
}

export const handleCopy = (txt: string) => {
  navigator.clipboard.writeText(txt);
  toast.success("Copied Address");
};
