import {DynamicObject} from 'src/types/ApiResponse';

export const apiErrors = (
  endpoint: string,
  errorCallback: (errMsg: {}) => void,
  errMsg: any,
) => {
  console.log(`❌ ERR ${[endpoint]} ====> `, errMsg);
  if (errMsg.message) {
    errorCallback(errMsg);
  }
};

export const apiResponses = (endpoint: string, resp: any) => {
  console.log(`✅ Response ${[endpoint]}`, resp);
};

export const getTime = (dateTime: string) => {
  return new Date(dateTime).toLocaleTimeString('en', {
    minute: '2-digit',
    hour: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  });
};

export const truncateText = (text: string, charLength: number = 50) => {
  if (text.length > charLength) {
    return `${text.slice(0, charLength - 3)}...`;
  }
  return text;
};

export const smartSearch = (
  array: DynamicObject[] | [],
  word: string,
  keyName: string,
) => {
  return array.filter(item =>
    item[keyName]?.toLowerCase()?.includes(word?.toLowerCase()),
  );
};

export const nFormatter = (num: number | string) => {
  num = Number(num);
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};
