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
import {
  BaseAPI,
  HttpHeaders,
  throwIfNullOrUndefined,
  encodeURI,
  OperationOpts,
  RawAjaxResponse,
} from '../runtime';
import { CreateUserDto, UpdateUserDto } from '../models';

export interface UserControllerCreateRequest {
  createUserDto: CreateUserDto;
}

export interface UserControllerFindOneRequest {
  id: string;
}

export interface UserControllerRemoveRequest {
  id: string;
}

export interface UserControllerUpdateRequest {
  id: string;
  updateUserDto: UpdateUserDto;
}

/**
 * no description
 */
export class UserApi extends BaseAPI {
  /**
   */
  userControllerCreate({
    createUserDto,
  }: UserControllerCreateRequest): Observable<void>;
  userControllerCreate(
    { createUserDto }: UserControllerCreateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  userControllerCreate(
    { createUserDto }: UserControllerCreateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(
      createUserDto,
      'createUserDto',
      'userControllerCreate'
    );

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<void>(
      {
        url: '/api/user',
        method: 'POST',
        headers,
        body: createUserDto,
      },
      opts ? opts.responseOpts : undefined
    );
  }

  /**
   */
  userControllerFindOne({ id }: UserControllerFindOneRequest): Observable<void>;
  userControllerFindOne(
    { id }: UserControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  userControllerFindOne(
    { id }: UserControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'userControllerFindOne');

    return this.request<void>(
      {
        url: '/api/user/{id}'.replace('{id}', encodeURI(id)),
        method: 'GET',
      },
      opts ? opts.responseOpts : undefined
    );
  }

  /**
   */
  userControllerRemove({ id }: UserControllerRemoveRequest): Observable<void>;
  userControllerRemove(
    { id }: UserControllerRemoveRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  userControllerRemove(
    { id }: UserControllerRemoveRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'userControllerRemove');

    return this.request<void>(
      {
        url: '/api/user/{id}'.replace('{id}', encodeURI(id)),
        method: 'DELETE',
      },
      opts ? opts.responseOpts : undefined
    );
  }

  /**
   */
  userControllerUpdate({
    id,
    updateUserDto,
  }: UserControllerUpdateRequest): Observable<void>;
  userControllerUpdate(
    { id, updateUserDto }: UserControllerUpdateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  userControllerUpdate(
    { id, updateUserDto }: UserControllerUpdateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'userControllerUpdate');
    throwIfNullOrUndefined(
      updateUserDto,
      'updateUserDto',
      'userControllerUpdate'
    );

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<void>(
      {
        url: '/api/user/{id}'.replace('{id}', encodeURI(id)),
        method: 'PUT',
        headers,
        body: updateUserDto,
      },
      opts ? opts.responseOpts : undefined
    );
  }
}
