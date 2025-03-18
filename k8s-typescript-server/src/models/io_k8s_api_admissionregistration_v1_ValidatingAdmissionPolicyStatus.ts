/**
* ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus {
/**
* TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
*/
typeChecking?: { expressionWarnings?: Array<{ warning: string; fieldRef: string }> };
/**
* The conditions represent the latest available observations of a policy's current state.
*/
conditions?: Array<{ observedGeneration?: number; reason: string; status: string; type: string; lastTransitionTime: Date; message: string }>;
/**
* The generation observed by the controller.
*/
observedGeneration?: number;
}

/**
* Create a new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus with default values
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus {
  return {
    typeChecking: data?.typeChecking !== undefined ? data.typeChecking : {},
    conditions: data?.conditions !== undefined ? data.conditions : [],
    observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
  };
}
