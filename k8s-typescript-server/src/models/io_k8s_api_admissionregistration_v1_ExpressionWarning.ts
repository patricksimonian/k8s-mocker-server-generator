/**
* ExpressionWarning is a warning information that targets a specific expression.
*/
export interface io_k8s_api_admissionregistration_v1_ExpressionWarning {
/**
* The path to the field that refers the expression. For example, the reference to the expression of the first item of validations is "spec.validations[0].expression"
*/
fieldRef: string;
/**
* The content of type checking information in a human-readable form. Each line of the warning contains the type that the expression is checked against, followed by the type check error from the compiler.
*/
warning: string;
}

/**
* Create a new io_k8s_api_admissionregistration_v1_ExpressionWarning with default values
*/
export function createio_k8s_api_admissionregistration_v1_ExpressionWarning(data?: Partial<io_k8s_api_admissionregistration_v1_ExpressionWarning>): io_k8s_api_admissionregistration_v1_ExpressionWarning {
  return {
    fieldRef: data?.fieldRef !== undefined ? data.fieldRef : '',
    warning: data?.warning !== undefined ? data.warning : '',
  };
}
