/**
* HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior {
/**
* HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
*/
scaleDown?: { policies?: Array<{ value: number; periodSeconds: number; type: string }>; selectPolicy?: string; stabilizationWindowSeconds?: number };
/**
* HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
*/
scaleUp?: { selectPolicy?: string; stabilizationWindowSeconds?: number; policies?: Array<{ value: number; periodSeconds: number; type: string }> };
}

/**
* Create a new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior with default values
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior {
  return {
    scaleDown: data?.scaleDown !== undefined ? data.scaleDown : {},
    scaleUp: data?.scaleUp !== undefined ? data.scaleUp : {},
  };
}
