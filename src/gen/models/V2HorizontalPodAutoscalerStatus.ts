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

import { V2HorizontalPodAutoscalerCondition } from './V2HorizontalPodAutoscalerCondition';
import { V2MetricStatus } from './V2MetricStatus';
import { HttpFile } from '../http/http';

/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
*/
export class V2HorizontalPodAutoscalerStatus {
    /**
    * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
    */
    'conditions'?: Array<V2HorizontalPodAutoscalerCondition>;
    /**
    * currentMetrics is the last read state of the metrics used by this autoscaler.
    */
    'currentMetrics'?: Array<V2MetricStatus>;
    /**
    * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
    */
    'currentReplicas'?: number;
    /**
    * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
    */
    'desiredReplicas': number;
    /**
    * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
    */
    'lastScaleTime'?: Date;
    /**
    * observedGeneration is the most recent generation observed by this autoscaler.
    */
    'observedGeneration'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V2HorizontalPodAutoscalerCondition>",
            "format": ""
        },
        {
            "name": "currentMetrics",
            "baseName": "currentMetrics",
            "type": "Array<V2MetricStatus>",
            "format": ""
        },
        {
            "name": "currentReplicas",
            "baseName": "currentReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "desiredReplicas",
            "baseName": "desiredReplicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "lastScaleTime",
            "baseName": "lastScaleTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return V2HorizontalPodAutoscalerStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

