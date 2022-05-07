/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* ServiceAccountSubject holds detailed information for service-account-kind subject.
*/
export class V1beta2ServiceAccountSubject {
    /**
    * `name` is the name of matching ServiceAccount objects, or \"*\" to match regardless of name. Required.
    */
    'name': string;
    /**
    * `namespace` is the namespace of matching ServiceAccount objects. Required.
    */
    'namespace': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1beta2ServiceAccountSubject.attributeTypeMap;
    }

    public constructor() {
    }
}

