export interface MessagePayload {
  message: string;
}

export interface JoiMessagePayload extends MessagePayload {
  path: string;
}
