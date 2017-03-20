'use strict';

import _ from 'lodash';

export class AppError {
  constructor(messages, code) {
    messages = messages || '';
    this.messages = (typeof messages === 'string') ? [messages] : messages;
    this.message = this.messages.join(',');
    this.code = code || 500;
  }

  toString() {
    return this.message;
  }
}

export class UnauthorisedError extends AppError {
  constructor() {
    super('Unauthorised', 401);
  }
}


export class NotFoundError extends AppError {
  constructor() {
    super('Not found', 404);
  }
}
