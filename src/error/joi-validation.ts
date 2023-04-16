import { ValidationError, ValidationErrorItem } from 'joi';
import { JoiMessagePayload, MessagePayload } from '../error/joi-mesage-payload';

export class ValidationException extends Error {
  public readonly code: string = 'PayloadValidation';
  public readonly messages: any | MessagePayload[];
  constructor(message?: string, messages?: any | MessagePayload[]) {
    super(message);
    this.messages = messages;
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}
export function validateAndThrowExceptionIfInvalid(
  error: undefined | ValidationError
) {
  if (error) {
    const messages: MessagePayload[] = error.details.map(
      convertToPayloadErrorMessage
    );
    throw new ValidationException(
      'GetCurrentTermCommand Validation failed',
      messages
    );
  }
}

function convertToPayloadErrorMessage(
  error: ValidationErrorItem
): JoiMessagePayload {
  return {
    message: error.message,
    path: error.path.toString()
  };
}
