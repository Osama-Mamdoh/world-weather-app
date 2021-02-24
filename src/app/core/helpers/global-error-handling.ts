import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService, ErrorService, NotificationService } from '@core/utils';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    const notifier = this.injector.get(NotificationService);
    let message;
    let errorType: string;
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerErrorMessage(error);
      errorType = 'Server Side Error';
      notifier.showError(message, 'Error', {});
    } else {
      // Client Error
      message = errorService.getClientErrorMessage(error);
      errorType = 'Client Side Error';
      notifier.showError(message, 'Error', {});
    }
    // Always log errors
    logger.logError(message);
  }
}
