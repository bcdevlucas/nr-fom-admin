// tslint:disable
/**
 * FOM API
 * API for FOM backend
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, OperationOpts, RawAjaxResponse } from '../runtime';

/**
 * no description
 */
export class FspDistrictXrefsApi extends BaseAPI {
  /**
   */
  fspDistrictXrefsControllerFindAll(): Observable<void>;
  fspDistrictXrefsControllerFindAll(
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  fspDistrictXrefsControllerFindAll(
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    return this.request<void>(
      {
        url: '/api/fsp-district-xrefs',
        method: 'POST',
      },
      opts ? opts.responseOpts : undefined
    );
  }
}
