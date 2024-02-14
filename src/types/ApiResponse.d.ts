export type HttpMethods = 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE';

export type Accept = 'application/json';
export type ContentType = 'application/json';

export type APIParams = {
  method: HttpMethods;
  endpoint: string;
  payload?: DynamicObject;
  isToken?: boolean;
  isFormData?: boolean;
};

export type APIOption = {
  method: string;
  headers: {
    Accept: Accept;
    'Content-Type'?: ContentType;
    Authorization?: string;
  };
  body?: string | FormData;
};

export interface DynamicObject {
  [key: string]: any;
}

export interface ActionParams {
  payload?: {};
  successCallback?: (response?: any) => void;
  errorCallback?: () => void;
}
