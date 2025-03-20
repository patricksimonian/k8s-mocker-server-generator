/**
* CustomResourceConversion describes how to convert different versions of a CR.
* @resourceType customresourceconversion
* @kind Customresourceconversion
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion {
/**
* strategy specifies how custom resources are converted between versions. Allowed values are: - `"None"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `"Webhook"`: API Server will call to an external webhook to do the conversion. Additional information
  is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
* @required
*/
strategy: string;
/**
* WebhookConversion describes how to call a conversion webhook
* @isObject
*/
webhook?: { clientConfig?: { caBundle?: string; service?: { name: string; namespace: string; path?: string; port?: number }; url?: string }; conversionReviewVersions: string[] };
}

/**
* Create a new Customresourceconversion with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion {
 return {
   strategy: data?.strategy !== undefined ? data.strategy : '',
   webhook: data?.webhook !== undefined ? data.webhook : { conversionReviewVersions: [] },
 };
}
