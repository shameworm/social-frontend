import { useState, useEffect } from 'react';

type ErrorStatus = {
  status: number;
  statusText: string;
  message?: string;
};

export function useErrorPage({ status, statusText }: ErrorStatus) {
  const [errorStatus, setErrorStatus] = useState<ErrorStatus>({ status, statusText });

  useEffect(() => {
    let message = '';
    switch (status) {
      case 400:
        message = 'Invalid request. Please check your input and try again.';
        break;
      case 401:
        message = "You're unauthorized. Please log in to access this content.";
        break;
      case 403:
        message = 'You lack the necessary permissions to access this resource.';
        break;
      case 404:
        message = 'Oops! The requested resource could not be found.';
        break;
      case 500:
        message = 'Something went wrong on our end. Please try again later.';
        break;
      default:
        message = 'An unexpected error has occurred. Please contact support if the issue persists.';
    }
    setErrorStatus({ status, statusText, message });
  }, [status, statusText]);

  return errorStatus;
}
