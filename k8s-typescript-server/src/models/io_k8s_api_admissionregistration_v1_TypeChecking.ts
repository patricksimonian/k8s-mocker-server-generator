/**
* TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
*/
export interface io_k8s_api_admissionregistration_v1_TypeChecking {
/**
* The type checking warnings for each expression.
*/
expressionWarnings?: Array<{ fieldRef: string; warning: string }>;
}

/**
* Create a new io_k8s_api_admissionregistration_v1_TypeChecking with default values
*/
export function createio_k8s_api_admissionregistration_v1_TypeChecking(data?: Partial<io_k8s_api_admissionregistration_v1_TypeChecking>): io_k8s_api_admissionregistration_v1_TypeChecking {
  return {
    expressionWarnings: data?.expressionWarnings !== undefined ? data.expressionWarnings : [],
  };
}
