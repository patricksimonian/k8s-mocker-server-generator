/**
* FlowSchemaSpec describes how the FlowSchema's specification looks like.
*/
export interface io_k8s_api_flowcontrol_v1_FlowSchemaSpec {
/**
* FlowDistinguisherMethod specifies the method of a flow distinguisher.
*/
distinguisherMethod?: { type: string };
/**
* `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
*/
matchingPrecedence?: number;
/**
* PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
*/
priorityLevelConfiguration: { name: string };
/**
* `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.
*/
rules?: Array<{ nonResourceRules?: Array<{ nonResourceURLs: string[]; verbs: string[] }>; resourceRules?: Array<{ apiGroups: string[]; clusterScope?: boolean; namespaces?: string[]; resources: string[]; verbs: string[] }>; subjects: Array<{ group?: { name: string }; kind: string; serviceAccount?: { name: string; namespace: string }; user?: { name: string } }> }>;
}

/**
* Create a new io_k8s_api_flowcontrol_v1_FlowSchemaSpec with default values
*/
export function createio_k8s_api_flowcontrol_v1_FlowSchemaSpec(data?: Partial<io_k8s_api_flowcontrol_v1_FlowSchemaSpec>): io_k8s_api_flowcontrol_v1_FlowSchemaSpec {
  return {
    distinguisherMethod: data?.distinguisherMethod !== undefined ? data.distinguisherMethod : { type: '' },
    matchingPrecedence: data?.matchingPrecedence !== undefined ? data.matchingPrecedence : 0,
    priorityLevelConfiguration: data?.priorityLevelConfiguration !== undefined ? data.priorityLevelConfiguration : { name: '' },
    rules: data?.rules !== undefined ? data.rules : [],
  };
}
