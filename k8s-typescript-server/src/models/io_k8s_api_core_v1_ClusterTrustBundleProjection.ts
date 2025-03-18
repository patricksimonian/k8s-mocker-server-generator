/**
* ClusterTrustBundleProjection describes how to select a set of ClusterTrustBundle objects and project their contents into the pod filesystem.
*/
export interface io_k8s_api_core_v1_ClusterTrustBundleProjection {
/**
* Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated.
*/
signerName?: string;
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
*/
labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
/**
* Select a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector.
*/
name?: string;
/**
* If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
*/
optional?: boolean;
/**
* Relative path from the volume root to write the bundle.
*/
path: string;
}

/**
* Create a new io_k8s_api_core_v1_ClusterTrustBundleProjection with default values
*/
export function createio_k8s_api_core_v1_ClusterTrustBundleProjection(data?: Partial<io_k8s_api_core_v1_ClusterTrustBundleProjection>): io_k8s_api_core_v1_ClusterTrustBundleProjection {
  return {
    signerName: data?.signerName !== undefined ? data.signerName : '',
    labelSelector: data?.labelSelector !== undefined ? data.labelSelector : {},
    name: data?.name !== undefined ? data.name : '',
    optional: data?.optional !== undefined ? data.optional : false,
    path: data?.path !== undefined ? data.path : '',
  };
}
