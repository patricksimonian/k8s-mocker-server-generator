/**
* HPAScalingPolicy is a single policy which must hold true for a specified past interval.
*/
export interface io_k8s_api_autoscaling_v2_HPAScalingPolicy {
/**
* periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
*/
periodSeconds: number;
/**
* type is used to specify the scaling policy.
*/
type: string;
/**
* value contains the amount of change which is permitted by the policy. It must be greater than zero
*/
value: number;
}

/**
* Create a new io_k8s_api_autoscaling_v2_HPAScalingPolicy with default values
*/
export function createio_k8s_api_autoscaling_v2_HPAScalingPolicy(data?: Partial<io_k8s_api_autoscaling_v2_HPAScalingPolicy>): io_k8s_api_autoscaling_v2_HPAScalingPolicy {
  return {
    periodSeconds: data?.periodSeconds !== undefined ? data.periodSeconds : 0,
    type: data?.type !== undefined ? data.type : '',
    value: data?.value !== undefined ? data.value : 0,
  };
}
