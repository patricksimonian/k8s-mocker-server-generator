/**
* The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
*/
export interface io_k8s_api_core_v1_Toleration {
/**
* TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
*/
tolerationSeconds?: number;
/**
* Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
*/
value?: string;
/**
* Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.

Possible enum values:
 - `"NoExecute"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.
 - `"NoSchedule"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.
 - `"PreferNoSchedule"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
*/
effect?: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule';
/**
* Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
*/
key?: string;
/**
* Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.

Possible enum values:
 - `"Equal"`
 - `"Exists"`
*/
operator?: 'Equal' | 'Exists';
}

/**
* Create a new io_k8s_api_core_v1_Toleration with default values
*/
export function createio_k8s_api_core_v1_Toleration(data?: Partial<io_k8s_api_core_v1_Toleration>): io_k8s_api_core_v1_Toleration {
  return {
    tolerationSeconds: data?.tolerationSeconds !== undefined ? data.tolerationSeconds : 0,
    value: data?.value !== undefined ? data.value : '',
    effect: data?.effect !== undefined ? data.effect : '',
    key: data?.key !== undefined ? data.key : '',
    operator: data?.operator !== undefined ? data.operator : '',
  };
}
