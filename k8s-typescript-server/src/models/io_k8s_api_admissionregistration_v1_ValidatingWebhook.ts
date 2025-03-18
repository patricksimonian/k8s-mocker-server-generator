/**
* ValidatingWebhook describes an admission webhook and the resources and operations it applies to.
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingWebhook {
/**
* TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
*/
timeoutSeconds?: number;
/**
* WebhookClientConfig contains the information to make a TLS connection with the webhook
*/
clientConfig: { caBundle?: string; service?: { name: string; namespace: string; path?: string; port?: number }; url?: string };
/**
* MatchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.

The exact matching logic is (in order):
  1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.
  2. If ALL matchConditions evaluate to TRUE, the webhook is called.
  3. If any matchCondition evaluates to an error (but none are FALSE):
     - If failurePolicy=Fail, reject the request
     - If failurePolicy=Ignore, the error is ignored and the webhook is skipped
*/
matchConditions?: Array<{ expression: string; name: string }>;
/**
* matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Possible enum values:
 - `"Equivalent"` means requests should be sent to the webhook if they modify a resource listed in rules via another API group or version.
 - `"Exact"` means requests should only be sent to the webhook if they exactly match a given rule.
*/
matchPolicy?: 'Equivalent' | 'Exact';
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
*/
namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
*/
objectSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> };
/**
* SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Possible enum values:
 - `"None"` means that calling the webhook will have no side effects.
 - `"NoneOnDryRun"` means that calling the webhook will possibly have side effects, but if the request being reviewed has the dry-run attribute, the side effects will be suppressed.
 - `"Some"` means that calling the webhook will possibly have side effects. If a request with the dry-run attribute would trigger a call to this webhook, the request will instead fail.
 - `"Unknown"` means that no information is known about the side effects of calling the webhook. If a request with the dry-run attribute would trigger a call to this webhook, the request will instead fail.
*/
sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown';
/**
* AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
*/
admissionReviewVersions: string[];
/**
* FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.

Possible enum values:
 - `"Fail"` means that an error calling the webhook causes the admission to fail.
 - `"Ignore"` means that an error calling the webhook is ignored.
*/
failurePolicy?: 'Fail' | 'Ignore';
/**
* The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
*/
name: string;
/**
* Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
*/
rules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resources?: string[]; scope?: string }>;
}

/**
* Create a new io_k8s_api_admissionregistration_v1_ValidatingWebhook with default values
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingWebhook(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingWebhook>): io_k8s_api_admissionregistration_v1_ValidatingWebhook {
  return {
    timeoutSeconds: data?.timeoutSeconds !== undefined ? data.timeoutSeconds : 0,
    clientConfig: data?.clientConfig !== undefined ? data.clientConfig : {},
    matchConditions: data?.matchConditions !== undefined ? data.matchConditions : [],
    matchPolicy: data?.matchPolicy !== undefined ? data.matchPolicy : '',
    namespaceSelector: data?.namespaceSelector !== undefined ? data.namespaceSelector : {},
    objectSelector: data?.objectSelector !== undefined ? data.objectSelector : {},
    sideEffects: data?.sideEffects !== undefined ? data.sideEffects : '',
    admissionReviewVersions: data?.admissionReviewVersions !== undefined ? data.admissionReviewVersions : [],
    failurePolicy: data?.failurePolicy !== undefined ? data.failurePolicy : '',
    name: data?.name !== undefined ? data.name : '',
    rules: data?.rules !== undefined ? data.rules : [],
  };
}
