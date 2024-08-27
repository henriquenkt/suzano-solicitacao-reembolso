import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkflowService } from '../service/workflow/workflow.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private workflowService: WorkflowService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const BEARER_TOKEN = this.workflowService.getToken();
    const userName = this.workflowService.getUser().username;

    if (
      req.url.startsWith(environment.domains.platform) ||
      req.url.startsWith(environment.backend.baseUrl)
    ) {
      req = req.clone({
        headers: req.headers
          .set('Authorization', BEARER_TOKEN)
          .set('user', userName),
      });
    }

    return next.handle(req);
  }
}
