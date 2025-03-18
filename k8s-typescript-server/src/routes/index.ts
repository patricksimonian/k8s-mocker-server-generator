import express from 'express';
import { createDiscoveryRoutes } from './discovery-routes';
import storage from '../storage';

// Import all route handlers



import { createAuditAnnotationRoutes } from './AuditAnnotation-routes';



import { createExpressionWarningRoutes } from './ExpressionWarning-routes';



import { createMatchConditionRoutes } from './MatchCondition-routes';



import { createMatchResourcesRoutes } from './MatchResources-routes';



import { createMutatingWebhookRoutes } from './MutatingWebhook-routes';



import { createMutatingWebhookConfigurationRoutes } from './MutatingWebhookConfiguration-routes';



import { createMutatingWebhookConfigurationListRoutes } from './MutatingWebhookConfigurationList-routes';



import { createNamedRuleWithOperationsRoutes } from './NamedRuleWithOperations-routes';



import { createParamKindRoutes } from './ParamKind-routes';



import { createParamRefRoutes } from './ParamRef-routes';



import { createRuleWithOperationsRoutes } from './RuleWithOperations-routes';



import { createServiceReferenceRoutes } from './ServiceReference-routes';



import { createTypeCheckingRoutes } from './TypeChecking-routes';



import { createValidatingAdmissionPolicyRoutes } from './ValidatingAdmissionPolicy-routes';



import { createValidatingAdmissionPolicyBindingRoutes } from './ValidatingAdmissionPolicyBinding-routes';



import { createValidatingAdmissionPolicyBindingListRoutes } from './ValidatingAdmissionPolicyBindingList-routes';



import { createValidatingAdmissionPolicyBindingSpecRoutes } from './ValidatingAdmissionPolicyBindingSpec-routes';



import { createValidatingAdmissionPolicyListRoutes } from './ValidatingAdmissionPolicyList-routes';



import { createValidatingAdmissionPolicySpecRoutes } from './ValidatingAdmissionPolicySpec-routes';



import { createValidatingAdmissionPolicyStatusRoutes } from './ValidatingAdmissionPolicyStatus-routes';



import { createValidatingWebhookRoutes } from './ValidatingWebhook-routes';



import { createValidatingWebhookConfigurationRoutes } from './ValidatingWebhookConfiguration-routes';



import { createValidatingWebhookConfigurationListRoutes } from './ValidatingWebhookConfigurationList-routes';



import { createValidationRoutes } from './Validation-routes';



import { createVariableRoutes } from './Variable-routes';



import { createWebhookClientConfigRoutes } from './WebhookClientConfig-routes';



import { createControllerRevisionRoutes } from './ControllerRevision-routes';



import { createControllerRevisionListRoutes } from './ControllerRevisionList-routes';



import { createDaemonSetRoutes } from './DaemonSet-routes';



import { createDaemonSetConditionRoutes } from './DaemonSetCondition-routes';



import { createDaemonSetListRoutes } from './DaemonSetList-routes';



import { createDaemonSetSpecRoutes } from './DaemonSetSpec-routes';



import { createDaemonSetStatusRoutes } from './DaemonSetStatus-routes';



import { createDaemonSetUpdateStrategyRoutes } from './DaemonSetUpdateStrategy-routes';



import { createDeploymentRoutes } from './Deployment-routes';



import { createDeploymentConditionRoutes } from './DeploymentCondition-routes';



import { createDeploymentListRoutes } from './DeploymentList-routes';



import { createDeploymentSpecRoutes } from './DeploymentSpec-routes';



import { createDeploymentStatusRoutes } from './DeploymentStatus-routes';



import { createDeploymentStrategyRoutes } from './DeploymentStrategy-routes';



import { createReplicaSetRoutes } from './ReplicaSet-routes';



import { createReplicaSetConditionRoutes } from './ReplicaSetCondition-routes';



import { createReplicaSetListRoutes } from './ReplicaSetList-routes';



import { createReplicaSetSpecRoutes } from './ReplicaSetSpec-routes';



import { createReplicaSetStatusRoutes } from './ReplicaSetStatus-routes';



import { createRollingUpdateDaemonSetRoutes } from './RollingUpdateDaemonSet-routes';



import { createRollingUpdateDeploymentRoutes } from './RollingUpdateDeployment-routes';



import { createRollingUpdateStatefulSetStrategyRoutes } from './RollingUpdateStatefulSetStrategy-routes';



import { createStatefulSetRoutes } from './StatefulSet-routes';



import { createStatefulSetConditionRoutes } from './StatefulSetCondition-routes';



import { createStatefulSetListRoutes } from './StatefulSetList-routes';



import { createStatefulSetOrdinalsRoutes } from './StatefulSetOrdinals-routes';



import { createStatefulSetPersistentVolumeClaimRetentionPolicyRoutes } from './StatefulSetPersistentVolumeClaimRetentionPolicy-routes';



import { createStatefulSetSpecRoutes } from './StatefulSetSpec-routes';



import { createStatefulSetStatusRoutes } from './StatefulSetStatus-routes';



import { createStatefulSetUpdateStrategyRoutes } from './StatefulSetUpdateStrategy-routes';



import { createBoundObjectReferenceRoutes } from './BoundObjectReference-routes';



import { createSelfSubjectReviewRoutes } from './SelfSubjectReview-routes';



import { createSelfSubjectReviewStatusRoutes } from './SelfSubjectReviewStatus-routes';



import { createTokenRequestRoutes } from './TokenRequest-routes';



import { createTokenRequestSpecRoutes } from './TokenRequestSpec-routes';



import { createTokenRequestStatusRoutes } from './TokenRequestStatus-routes';



import { createTokenReviewRoutes } from './TokenReview-routes';



import { createTokenReviewSpecRoutes } from './TokenReviewSpec-routes';



import { createTokenReviewStatusRoutes } from './TokenReviewStatus-routes';



import { createUserInfoRoutes } from './UserInfo-routes';



import { createFieldSelectorAttributesRoutes } from './FieldSelectorAttributes-routes';



import { createLabelSelectorAttributesRoutes } from './LabelSelectorAttributes-routes';



import { createLocalSubjectAccessReviewRoutes } from './LocalSubjectAccessReview-routes';



import { createNonResourceAttributesRoutes } from './NonResourceAttributes-routes';



import { createNonResourceRuleRoutes } from './NonResourceRule-routes';



import { createResourceAttributesRoutes } from './ResourceAttributes-routes';



import { createResourceRuleRoutes } from './ResourceRule-routes';



import { createSelfSubjectAccessReviewRoutes } from './SelfSubjectAccessReview-routes';



import { createSelfSubjectAccessReviewSpecRoutes } from './SelfSubjectAccessReviewSpec-routes';



import { createSelfSubjectRulesReviewRoutes } from './SelfSubjectRulesReview-routes';



import { createSelfSubjectRulesReviewSpecRoutes } from './SelfSubjectRulesReviewSpec-routes';



import { createSubjectAccessReviewRoutes } from './SubjectAccessReview-routes';



import { createSubjectAccessReviewSpecRoutes } from './SubjectAccessReviewSpec-routes';



import { createSubjectAccessReviewStatusRoutes } from './SubjectAccessReviewStatus-routes';



import { createSubjectRulesReviewStatusRoutes } from './SubjectRulesReviewStatus-routes';



import { createCrossVersionObjectReferenceRoutes } from './CrossVersionObjectReference-routes';



import { createHorizontalPodAutoscalerRoutes } from './HorizontalPodAutoscaler-routes';



import { createHorizontalPodAutoscalerListRoutes } from './HorizontalPodAutoscalerList-routes';



import { createHorizontalPodAutoscalerSpecRoutes } from './HorizontalPodAutoscalerSpec-routes';



import { createHorizontalPodAutoscalerStatusRoutes } from './HorizontalPodAutoscalerStatus-routes';



import { createScaleRoutes } from './Scale-routes';



import { createScaleSpecRoutes } from './ScaleSpec-routes';



import { createScaleStatusRoutes } from './ScaleStatus-routes';



import { createContainerResourceMetricSourceRoutes } from './ContainerResourceMetricSource-routes';



import { createContainerResourceMetricStatusRoutes } from './ContainerResourceMetricStatus-routes';



import { createCrossVersionObjectReferenceRoutes } from './CrossVersionObjectReference-routes';



import { createExternalMetricSourceRoutes } from './ExternalMetricSource-routes';



import { createExternalMetricStatusRoutes } from './ExternalMetricStatus-routes';



import { createHPAScalingPolicyRoutes } from './HPAScalingPolicy-routes';



import { createHPAScalingRulesRoutes } from './HPAScalingRules-routes';



import { createHorizontalPodAutoscalerRoutes } from './HorizontalPodAutoscaler-routes';



import { createHorizontalPodAutoscalerBehaviorRoutes } from './HorizontalPodAutoscalerBehavior-routes';



import { createHorizontalPodAutoscalerConditionRoutes } from './HorizontalPodAutoscalerCondition-routes';



import { createHorizontalPodAutoscalerListRoutes } from './HorizontalPodAutoscalerList-routes';



import { createHorizontalPodAutoscalerSpecRoutes } from './HorizontalPodAutoscalerSpec-routes';



import { createHorizontalPodAutoscalerStatusRoutes } from './HorizontalPodAutoscalerStatus-routes';



import { createMetricIdentifierRoutes } from './MetricIdentifier-routes';



import { createMetricSpecRoutes } from './MetricSpec-routes';



import { createMetricStatusRoutes } from './MetricStatus-routes';



import { createMetricTargetRoutes } from './MetricTarget-routes';



import { createMetricValueStatusRoutes } from './MetricValueStatus-routes';



import { createObjectMetricSourceRoutes } from './ObjectMetricSource-routes';



import { createObjectMetricStatusRoutes } from './ObjectMetricStatus-routes';



import { createPodsMetricSourceRoutes } from './PodsMetricSource-routes';



import { createPodsMetricStatusRoutes } from './PodsMetricStatus-routes';



import { createResourceMetricSourceRoutes } from './ResourceMetricSource-routes';



import { createResourceMetricStatusRoutes } from './ResourceMetricStatus-routes';



import { createCronJobRoutes } from './CronJob-routes';



import { createCronJobListRoutes } from './CronJobList-routes';



import { createCronJobSpecRoutes } from './CronJobSpec-routes';



import { createCronJobStatusRoutes } from './CronJobStatus-routes';



import { createJobRoutes } from './Job-routes';



import { createJobConditionRoutes } from './JobCondition-routes';



import { createJobListRoutes } from './JobList-routes';



import { createJobSpecRoutes } from './JobSpec-routes';



import { createJobStatusRoutes } from './JobStatus-routes';



import { createJobTemplateSpecRoutes } from './JobTemplateSpec-routes';



import { createPodFailurePolicyRoutes } from './PodFailurePolicy-routes';



import { createPodFailurePolicyOnExitCodesRequirementRoutes } from './PodFailurePolicyOnExitCodesRequirement-routes';



import { createPodFailurePolicyOnPodConditionsPatternRoutes } from './PodFailurePolicyOnPodConditionsPattern-routes';



import { createPodFailurePolicyRuleRoutes } from './PodFailurePolicyRule-routes';



import { createSuccessPolicyRoutes } from './SuccessPolicy-routes';



import { createSuccessPolicyRuleRoutes } from './SuccessPolicyRule-routes';



import { createUncountedTerminatedPodsRoutes } from './UncountedTerminatedPods-routes';



import { createCertificateSigningRequestRoutes } from './CertificateSigningRequest-routes';



import { createCertificateSigningRequestConditionRoutes } from './CertificateSigningRequestCondition-routes';



import { createCertificateSigningRequestListRoutes } from './CertificateSigningRequestList-routes';



import { createCertificateSigningRequestSpecRoutes } from './CertificateSigningRequestSpec-routes';



import { createCertificateSigningRequestStatusRoutes } from './CertificateSigningRequestStatus-routes';



import { createLeaseRoutes } from './Lease-routes';



import { createLeaseListRoutes } from './LeaseList-routes';



import { createLeaseSpecRoutes } from './LeaseSpec-routes';



import { createAWSElasticBlockStoreVolumeSourceRoutes } from './AWSElasticBlockStoreVolumeSource-routes';



import { createAffinityRoutes } from './Affinity-routes';



import { createAppArmorProfileRoutes } from './AppArmorProfile-routes';



import { createAttachedVolumeRoutes } from './AttachedVolume-routes';



import { createAzureDiskVolumeSourceRoutes } from './AzureDiskVolumeSource-routes';



import { createAzureFilePersistentVolumeSourceRoutes } from './AzureFilePersistentVolumeSource-routes';



import { createAzureFileVolumeSourceRoutes } from './AzureFileVolumeSource-routes';



import { createBindingRoutes } from './Binding-routes';



import { createCSIPersistentVolumeSourceRoutes } from './CSIPersistentVolumeSource-routes';



import { createCSIVolumeSourceRoutes } from './CSIVolumeSource-routes';



import { createCapabilitiesRoutes } from './Capabilities-routes';



import { createCephFSPersistentVolumeSourceRoutes } from './CephFSPersistentVolumeSource-routes';



import { createCephFSVolumeSourceRoutes } from './CephFSVolumeSource-routes';



import { createCinderPersistentVolumeSourceRoutes } from './CinderPersistentVolumeSource-routes';



import { createCinderVolumeSourceRoutes } from './CinderVolumeSource-routes';



import { createClientIPConfigRoutes } from './ClientIPConfig-routes';



import { createClusterTrustBundleProjectionRoutes } from './ClusterTrustBundleProjection-routes';



import { createComponentConditionRoutes } from './ComponentCondition-routes';



import { createComponentStatusRoutes } from './ComponentStatus-routes';



import { createComponentStatusListRoutes } from './ComponentStatusList-routes';



import { createConfigMapRoutes } from './ConfigMap-routes';



import { createConfigMapEnvSourceRoutes } from './ConfigMapEnvSource-routes';



import { createConfigMapKeySelectorRoutes } from './ConfigMapKeySelector-routes';



import { createConfigMapListRoutes } from './ConfigMapList-routes';



import { createConfigMapNodeConfigSourceRoutes } from './ConfigMapNodeConfigSource-routes';



import { createConfigMapProjectionRoutes } from './ConfigMapProjection-routes';



import { createConfigMapVolumeSourceRoutes } from './ConfigMapVolumeSource-routes';



import { createContainerRoutes } from './Container-routes';



import { createContainerImageRoutes } from './ContainerImage-routes';



import { createContainerPortRoutes } from './ContainerPort-routes';



import { createContainerResizePolicyRoutes } from './ContainerResizePolicy-routes';



import { createContainerStateRoutes } from './ContainerState-routes';



import { createContainerStateRunningRoutes } from './ContainerStateRunning-routes';



import { createContainerStateTerminatedRoutes } from './ContainerStateTerminated-routes';



import { createContainerStateWaitingRoutes } from './ContainerStateWaiting-routes';



import { createContainerStatusRoutes } from './ContainerStatus-routes';



import { createContainerUserRoutes } from './ContainerUser-routes';



import { createDaemonEndpointRoutes } from './DaemonEndpoint-routes';



import { createDownwardAPIProjectionRoutes } from './DownwardAPIProjection-routes';



import { createDownwardAPIVolumeFileRoutes } from './DownwardAPIVolumeFile-routes';



import { createDownwardAPIVolumeSourceRoutes } from './DownwardAPIVolumeSource-routes';



import { createEmptyDirVolumeSourceRoutes } from './EmptyDirVolumeSource-routes';



import { createEndpointAddressRoutes } from './EndpointAddress-routes';



import { createEndpointPortRoutes } from './EndpointPort-routes';



import { createEndpointSubsetRoutes } from './EndpointSubset-routes';



import { createEndpointsRoutes } from './Endpoints-routes';



import { createEndpointsListRoutes } from './EndpointsList-routes';



import { createEnvFromSourceRoutes } from './EnvFromSource-routes';



import { createEnvVarRoutes } from './EnvVar-routes';



import { createEnvVarSourceRoutes } from './EnvVarSource-routes';



import { createEphemeralContainerRoutes } from './EphemeralContainer-routes';



import { createEphemeralVolumeSourceRoutes } from './EphemeralVolumeSource-routes';



import { createEventRoutes } from './Event-routes';



import { createEventListRoutes } from './EventList-routes';



import { createEventSeriesRoutes } from './EventSeries-routes';



import { createEventSourceRoutes } from './EventSource-routes';



import { createExecActionRoutes } from './ExecAction-routes';



import { createFCVolumeSourceRoutes } from './FCVolumeSource-routes';



import { createFlexPersistentVolumeSourceRoutes } from './FlexPersistentVolumeSource-routes';



import { createFlexVolumeSourceRoutes } from './FlexVolumeSource-routes';



import { createFlockerVolumeSourceRoutes } from './FlockerVolumeSource-routes';



import { createGCEPersistentDiskVolumeSourceRoutes } from './GCEPersistentDiskVolumeSource-routes';



import { createGRPCActionRoutes } from './GRPCAction-routes';



import { createGitRepoVolumeSourceRoutes } from './GitRepoVolumeSource-routes';



import { createGlusterfsPersistentVolumeSourceRoutes } from './GlusterfsPersistentVolumeSource-routes';



import { createGlusterfsVolumeSourceRoutes } from './GlusterfsVolumeSource-routes';



import { createHTTPGetActionRoutes } from './HTTPGetAction-routes';



import { createHTTPHeaderRoutes } from './HTTPHeader-routes';



import { createHostAliasRoutes } from './HostAlias-routes';



import { createHostIPRoutes } from './HostIP-routes';



import { createHostPathVolumeSourceRoutes } from './HostPathVolumeSource-routes';



import { createISCSIPersistentVolumeSourceRoutes } from './ISCSIPersistentVolumeSource-routes';



import { createISCSIVolumeSourceRoutes } from './ISCSIVolumeSource-routes';



import { createImageVolumeSourceRoutes } from './ImageVolumeSource-routes';



import { createKeyToPathRoutes } from './KeyToPath-routes';



import { createLifecycleRoutes } from './Lifecycle-routes';



import { createLifecycleHandlerRoutes } from './LifecycleHandler-routes';



import { createLimitRangeRoutes } from './LimitRange-routes';



import { createLimitRangeItemRoutes } from './LimitRangeItem-routes';



import { createLimitRangeListRoutes } from './LimitRangeList-routes';



import { createLimitRangeSpecRoutes } from './LimitRangeSpec-routes';



import { createLinuxContainerUserRoutes } from './LinuxContainerUser-routes';



import { createLoadBalancerIngressRoutes } from './LoadBalancerIngress-routes';



import { createLoadBalancerStatusRoutes } from './LoadBalancerStatus-routes';



import { createLocalObjectReferenceRoutes } from './LocalObjectReference-routes';



import { createLocalVolumeSourceRoutes } from './LocalVolumeSource-routes';



import { createModifyVolumeStatusRoutes } from './ModifyVolumeStatus-routes';



import { createNFSVolumeSourceRoutes } from './NFSVolumeSource-routes';



import { createNamespaceRoutes } from './Namespace-routes';



import { createNamespaceConditionRoutes } from './NamespaceCondition-routes';



import { createNamespaceListRoutes } from './NamespaceList-routes';



import { createNamespaceSpecRoutes } from './NamespaceSpec-routes';



import { createNamespaceStatusRoutes } from './NamespaceStatus-routes';



import { createNodeRoutes } from './Node-routes';



import { createNodeAddressRoutes } from './NodeAddress-routes';



import { createNodeAffinityRoutes } from './NodeAffinity-routes';



import { createNodeConditionRoutes } from './NodeCondition-routes';



import { createNodeConfigSourceRoutes } from './NodeConfigSource-routes';



import { createNodeConfigStatusRoutes } from './NodeConfigStatus-routes';



import { createNodeDaemonEndpointsRoutes } from './NodeDaemonEndpoints-routes';



import { createNodeFeaturesRoutes } from './NodeFeatures-routes';



import { createNodeListRoutes } from './NodeList-routes';



import { createNodeRuntimeHandlerRoutes } from './NodeRuntimeHandler-routes';



import { createNodeRuntimeHandlerFeaturesRoutes } from './NodeRuntimeHandlerFeatures-routes';



import { createNodeSelectorRoutes } from './NodeSelector-routes';



import { createNodeSelectorRequirementRoutes } from './NodeSelectorRequirement-routes';



import { createNodeSelectorTermRoutes } from './NodeSelectorTerm-routes';



import { createNodeSpecRoutes } from './NodeSpec-routes';



import { createNodeStatusRoutes } from './NodeStatus-routes';



import { createNodeSystemInfoRoutes } from './NodeSystemInfo-routes';



import { createObjectFieldSelectorRoutes } from './ObjectFieldSelector-routes';



import { createObjectReferenceRoutes } from './ObjectReference-routes';



import { createPersistentVolumeRoutes } from './PersistentVolume-routes';



import { createPersistentVolumeClaimRoutes } from './PersistentVolumeClaim-routes';



import { createPersistentVolumeClaimConditionRoutes } from './PersistentVolumeClaimCondition-routes';



import { createPersistentVolumeClaimListRoutes } from './PersistentVolumeClaimList-routes';



import { createPersistentVolumeClaimSpecRoutes } from './PersistentVolumeClaimSpec-routes';



import { createPersistentVolumeClaimStatusRoutes } from './PersistentVolumeClaimStatus-routes';



import { createPersistentVolumeClaimTemplateRoutes } from './PersistentVolumeClaimTemplate-routes';



import { createPersistentVolumeClaimVolumeSourceRoutes } from './PersistentVolumeClaimVolumeSource-routes';



import { createPersistentVolumeListRoutes } from './PersistentVolumeList-routes';



import { createPersistentVolumeSpecRoutes } from './PersistentVolumeSpec-routes';



import { createPersistentVolumeStatusRoutes } from './PersistentVolumeStatus-routes';



import { createPhotonPersistentDiskVolumeSourceRoutes } from './PhotonPersistentDiskVolumeSource-routes';



import { createPodRoutes } from './Pod-routes';



import { createPodAffinityRoutes } from './PodAffinity-routes';



import { createPodAffinityTermRoutes } from './PodAffinityTerm-routes';



import { createPodAntiAffinityRoutes } from './PodAntiAffinity-routes';



import { createPodConditionRoutes } from './PodCondition-routes';



import { createPodDNSConfigRoutes } from './PodDNSConfig-routes';



import { createPodDNSConfigOptionRoutes } from './PodDNSConfigOption-routes';



import { createPodIPRoutes } from './PodIP-routes';



import { createPodListRoutes } from './PodList-routes';



import { createPodOSRoutes } from './PodOS-routes';



import { createPodReadinessGateRoutes } from './PodReadinessGate-routes';



import { createPodResourceClaimRoutes } from './PodResourceClaim-routes';



import { createPodResourceClaimStatusRoutes } from './PodResourceClaimStatus-routes';



import { createPodSchedulingGateRoutes } from './PodSchedulingGate-routes';



import { createPodSecurityContextRoutes } from './PodSecurityContext-routes';



import { createPodSpecRoutes } from './PodSpec-routes';



import { createPodStatusRoutes } from './PodStatus-routes';



import { createPodTemplateRoutes } from './PodTemplate-routes';



import { createPodTemplateListRoutes } from './PodTemplateList-routes';



import { createPodTemplateSpecRoutes } from './PodTemplateSpec-routes';



import { createPortStatusRoutes } from './PortStatus-routes';



import { createPortworxVolumeSourceRoutes } from './PortworxVolumeSource-routes';



import { createPreferredSchedulingTermRoutes } from './PreferredSchedulingTerm-routes';



import { createProbeRoutes } from './Probe-routes';



import { createProjectedVolumeSourceRoutes } from './ProjectedVolumeSource-routes';



import { createQuobyteVolumeSourceRoutes } from './QuobyteVolumeSource-routes';



import { createRBDPersistentVolumeSourceRoutes } from './RBDPersistentVolumeSource-routes';



import { createRBDVolumeSourceRoutes } from './RBDVolumeSource-routes';



import { createReplicationControllerRoutes } from './ReplicationController-routes';



import { createReplicationControllerConditionRoutes } from './ReplicationControllerCondition-routes';



import { createReplicationControllerListRoutes } from './ReplicationControllerList-routes';



import { createReplicationControllerSpecRoutes } from './ReplicationControllerSpec-routes';



import { createReplicationControllerStatusRoutes } from './ReplicationControllerStatus-routes';



import { createResourceClaimRoutes } from './ResourceClaim-routes';



import { createResourceFieldSelectorRoutes } from './ResourceFieldSelector-routes';



import { createResourceHealthRoutes } from './ResourceHealth-routes';



import { createResourceQuotaRoutes } from './ResourceQuota-routes';



import { createResourceQuotaListRoutes } from './ResourceQuotaList-routes';



import { createResourceQuotaSpecRoutes } from './ResourceQuotaSpec-routes';



import { createResourceQuotaStatusRoutes } from './ResourceQuotaStatus-routes';



import { createResourceRequirementsRoutes } from './ResourceRequirements-routes';



import { createResourceStatusRoutes } from './ResourceStatus-routes';



import { createSELinuxOptionsRoutes } from './SELinuxOptions-routes';



import { createScaleIOPersistentVolumeSourceRoutes } from './ScaleIOPersistentVolumeSource-routes';



import { createScaleIOVolumeSourceRoutes } from './ScaleIOVolumeSource-routes';



import { createScopeSelectorRoutes } from './ScopeSelector-routes';



import { createScopedResourceSelectorRequirementRoutes } from './ScopedResourceSelectorRequirement-routes';



import { createSeccompProfileRoutes } from './SeccompProfile-routes';



import { createSecretRoutes } from './Secret-routes';



import { createSecretEnvSourceRoutes } from './SecretEnvSource-routes';



import { createSecretKeySelectorRoutes } from './SecretKeySelector-routes';



import { createSecretListRoutes } from './SecretList-routes';



import { createSecretProjectionRoutes } from './SecretProjection-routes';



import { createSecretReferenceRoutes } from './SecretReference-routes';



import { createSecretVolumeSourceRoutes } from './SecretVolumeSource-routes';



import { createSecurityContextRoutes } from './SecurityContext-routes';



import { createServiceRoutes } from './Service-routes';



import { createServiceAccountRoutes } from './ServiceAccount-routes';



import { createServiceAccountListRoutes } from './ServiceAccountList-routes';



import { createServiceAccountTokenProjectionRoutes } from './ServiceAccountTokenProjection-routes';



import { createServiceListRoutes } from './ServiceList-routes';



import { createServicePortRoutes } from './ServicePort-routes';



import { createServiceSpecRoutes } from './ServiceSpec-routes';



import { createServiceStatusRoutes } from './ServiceStatus-routes';



import { createSessionAffinityConfigRoutes } from './SessionAffinityConfig-routes';



import { createSleepActionRoutes } from './SleepAction-routes';



import { createStorageOSPersistentVolumeSourceRoutes } from './StorageOSPersistentVolumeSource-routes';



import { createStorageOSVolumeSourceRoutes } from './StorageOSVolumeSource-routes';



import { createSysctlRoutes } from './Sysctl-routes';



import { createTCPSocketActionRoutes } from './TCPSocketAction-routes';



import { createTaintRoutes } from './Taint-routes';



import { createTolerationRoutes } from './Toleration-routes';



import { createTopologySelectorLabelRequirementRoutes } from './TopologySelectorLabelRequirement-routes';



import { createTopologySelectorTermRoutes } from './TopologySelectorTerm-routes';



import { createTopologySpreadConstraintRoutes } from './TopologySpreadConstraint-routes';



import { createTypedLocalObjectReferenceRoutes } from './TypedLocalObjectReference-routes';



import { createTypedObjectReferenceRoutes } from './TypedObjectReference-routes';



import { createVolumeRoutes } from './Volume-routes';



import { createVolumeDeviceRoutes } from './VolumeDevice-routes';



import { createVolumeMountRoutes } from './VolumeMount-routes';



import { createVolumeMountStatusRoutes } from './VolumeMountStatus-routes';



import { createVolumeNodeAffinityRoutes } from './VolumeNodeAffinity-routes';



import { createVolumeProjectionRoutes } from './VolumeProjection-routes';



import { createVolumeResourceRequirementsRoutes } from './VolumeResourceRequirements-routes';



import { createVsphereVirtualDiskVolumeSourceRoutes } from './VsphereVirtualDiskVolumeSource-routes';



import { createWeightedPodAffinityTermRoutes } from './WeightedPodAffinityTerm-routes';



import { createWindowsSecurityContextOptionsRoutes } from './WindowsSecurityContextOptions-routes';



import { createEndpointRoutes } from './Endpoint-routes';



import { createEndpointConditionsRoutes } from './EndpointConditions-routes';



import { createEndpointHintsRoutes } from './EndpointHints-routes';



import { createEndpointPortRoutes } from './EndpointPort-routes';



import { createEndpointSliceRoutes } from './EndpointSlice-routes';



import { createEndpointSliceListRoutes } from './EndpointSliceList-routes';



import { createForZoneRoutes } from './ForZone-routes';



import { createEventRoutes } from './Event-routes';



import { createEventListRoutes } from './EventList-routes';



import { createEventSeriesRoutes } from './EventSeries-routes';



import { createExemptPriorityLevelConfigurationRoutes } from './ExemptPriorityLevelConfiguration-routes';



import { createFlowDistinguisherMethodRoutes } from './FlowDistinguisherMethod-routes';



import { createFlowSchemaRoutes } from './FlowSchema-routes';



import { createFlowSchemaConditionRoutes } from './FlowSchemaCondition-routes';



import { createFlowSchemaListRoutes } from './FlowSchemaList-routes';



import { createFlowSchemaSpecRoutes } from './FlowSchemaSpec-routes';



import { createFlowSchemaStatusRoutes } from './FlowSchemaStatus-routes';



import { createGroupSubjectRoutes } from './GroupSubject-routes';



import { createLimitResponseRoutes } from './LimitResponse-routes';



import { createLimitedPriorityLevelConfigurationRoutes } from './LimitedPriorityLevelConfiguration-routes';



import { createNonResourcePolicyRuleRoutes } from './NonResourcePolicyRule-routes';



import { createPolicyRulesWithSubjectsRoutes } from './PolicyRulesWithSubjects-routes';



import { createPriorityLevelConfigurationRoutes } from './PriorityLevelConfiguration-routes';



import { createPriorityLevelConfigurationConditionRoutes } from './PriorityLevelConfigurationCondition-routes';



import { createPriorityLevelConfigurationListRoutes } from './PriorityLevelConfigurationList-routes';



import { createPriorityLevelConfigurationReferenceRoutes } from './PriorityLevelConfigurationReference-routes';



import { createPriorityLevelConfigurationSpecRoutes } from './PriorityLevelConfigurationSpec-routes';



import { createPriorityLevelConfigurationStatusRoutes } from './PriorityLevelConfigurationStatus-routes';



import { createQueuingConfigurationRoutes } from './QueuingConfiguration-routes';



import { createResourcePolicyRuleRoutes } from './ResourcePolicyRule-routes';



import { createServiceAccountSubjectRoutes } from './ServiceAccountSubject-routes';



import { createSubjectRoutes } from './Subject-routes';



import { createUserSubjectRoutes } from './UserSubject-routes';



import { createHTTPIngressPathRoutes } from './HTTPIngressPath-routes';



import { createHTTPIngressRuleValueRoutes } from './HTTPIngressRuleValue-routes';



import { createIPBlockRoutes } from './IPBlock-routes';



import { createIngressRoutes } from './Ingress-routes';



import { createIngressBackendRoutes } from './IngressBackend-routes';



import { createIngressClassRoutes } from './IngressClass-routes';



import { createIngressClassListRoutes } from './IngressClassList-routes';



import { createIngressClassParametersReferenceRoutes } from './IngressClassParametersReference-routes';



import { createIngressClassSpecRoutes } from './IngressClassSpec-routes';



import { createIngressListRoutes } from './IngressList-routes';



import { createIngressLoadBalancerIngressRoutes } from './IngressLoadBalancerIngress-routes';



import { createIngressLoadBalancerStatusRoutes } from './IngressLoadBalancerStatus-routes';



import { createIngressPortStatusRoutes } from './IngressPortStatus-routes';



import { createIngressRuleRoutes } from './IngressRule-routes';



import { createIngressServiceBackendRoutes } from './IngressServiceBackend-routes';



import { createIngressSpecRoutes } from './IngressSpec-routes';



import { createIngressStatusRoutes } from './IngressStatus-routes';



import { createIngressTLSRoutes } from './IngressTLS-routes';



import { createNetworkPolicyRoutes } from './NetworkPolicy-routes';



import { createNetworkPolicyEgressRuleRoutes } from './NetworkPolicyEgressRule-routes';



import { createNetworkPolicyIngressRuleRoutes } from './NetworkPolicyIngressRule-routes';



import { createNetworkPolicyListRoutes } from './NetworkPolicyList-routes';



import { createNetworkPolicyPeerRoutes } from './NetworkPolicyPeer-routes';



import { createNetworkPolicyPortRoutes } from './NetworkPolicyPort-routes';



import { createNetworkPolicySpecRoutes } from './NetworkPolicySpec-routes';



import { createServiceBackendPortRoutes } from './ServiceBackendPort-routes';



import { createOverheadRoutes } from './Overhead-routes';



import { createRuntimeClassRoutes } from './RuntimeClass-routes';



import { createRuntimeClassListRoutes } from './RuntimeClassList-routes';



import { createSchedulingRoutes } from './Scheduling-routes';



import { createEvictionRoutes } from './Eviction-routes';



import { createPodDisruptionBudgetRoutes } from './PodDisruptionBudget-routes';



import { createPodDisruptionBudgetListRoutes } from './PodDisruptionBudgetList-routes';



import { createPodDisruptionBudgetSpecRoutes } from './PodDisruptionBudgetSpec-routes';



import { createPodDisruptionBudgetStatusRoutes } from './PodDisruptionBudgetStatus-routes';



import { createAggregationRuleRoutes } from './AggregationRule-routes';



import { createClusterRoleRoutes } from './ClusterRole-routes';



import { createClusterRoleBindingRoutes } from './ClusterRoleBinding-routes';



import { createClusterRoleBindingListRoutes } from './ClusterRoleBindingList-routes';



import { createClusterRoleListRoutes } from './ClusterRoleList-routes';



import { createPolicyRuleRoutes } from './PolicyRule-routes';



import { createRoleRoutes } from './Role-routes';



import { createRoleBindingRoutes } from './RoleBinding-routes';



import { createRoleBindingListRoutes } from './RoleBindingList-routes';



import { createRoleListRoutes } from './RoleList-routes';



import { createRoleRefRoutes } from './RoleRef-routes';



import { createSubjectRoutes } from './Subject-routes';



import { createPriorityClassRoutes } from './PriorityClass-routes';



import { createPriorityClassListRoutes } from './PriorityClassList-routes';



import { createCSIDriverRoutes } from './CSIDriver-routes';



import { createCSIDriverListRoutes } from './CSIDriverList-routes';



import { createCSIDriverSpecRoutes } from './CSIDriverSpec-routes';



import { createCSINodeRoutes } from './CSINode-routes';



import { createCSINodeDriverRoutes } from './CSINodeDriver-routes';



import { createCSINodeListRoutes } from './CSINodeList-routes';



import { createCSINodeSpecRoutes } from './CSINodeSpec-routes';



import { createCSIStorageCapacityRoutes } from './CSIStorageCapacity-routes';



import { createCSIStorageCapacityListRoutes } from './CSIStorageCapacityList-routes';



import { createStorageClassRoutes } from './StorageClass-routes';



import { createStorageClassListRoutes } from './StorageClassList-routes';



import { createTokenRequestRoutes } from './TokenRequest-routes';



import { createVolumeAttachmentRoutes } from './VolumeAttachment-routes';



import { createVolumeAttachmentListRoutes } from './VolumeAttachmentList-routes';



import { createVolumeAttachmentSourceRoutes } from './VolumeAttachmentSource-routes';



import { createVolumeAttachmentSpecRoutes } from './VolumeAttachmentSpec-routes';



import { createVolumeAttachmentStatusRoutes } from './VolumeAttachmentStatus-routes';



import { createVolumeErrorRoutes } from './VolumeError-routes';



import { createVolumeNodeResourcesRoutes } from './VolumeNodeResources-routes';



import { createCustomResourceColumnDefinitionRoutes } from './CustomResourceColumnDefinition-routes';



import { createCustomResourceConversionRoutes } from './CustomResourceConversion-routes';



import { createCustomResourceDefinitionRoutes } from './CustomResourceDefinition-routes';



import { createCustomResourceDefinitionConditionRoutes } from './CustomResourceDefinitionCondition-routes';



import { createCustomResourceDefinitionListRoutes } from './CustomResourceDefinitionList-routes';



import { createCustomResourceDefinitionNamesRoutes } from './CustomResourceDefinitionNames-routes';



import { createCustomResourceDefinitionSpecRoutes } from './CustomResourceDefinitionSpec-routes';



import { createCustomResourceDefinitionStatusRoutes } from './CustomResourceDefinitionStatus-routes';



import { createCustomResourceDefinitionVersionRoutes } from './CustomResourceDefinitionVersion-routes';



import { createCustomResourceSubresourceScaleRoutes } from './CustomResourceSubresourceScale-routes';



import { createCustomResourceSubresourceStatusRoutes } from './CustomResourceSubresourceStatus-routes';



import { createCustomResourceSubresourcesRoutes } from './CustomResourceSubresources-routes';



import { createCustomResourceValidationRoutes } from './CustomResourceValidation-routes';



import { createExternalDocumentationRoutes } from './ExternalDocumentation-routes';



import { createJSONRoutes } from './JSON-routes';



import { createJSONSchemaPropsOrArrayRoutes } from './JSONSchemaPropsOrArray-routes';



import { createJSONSchemaPropsOrBoolRoutes } from './JSONSchemaPropsOrBool-routes';



import { createJSONSchemaPropsOrStringArrayRoutes } from './JSONSchemaPropsOrStringArray-routes';



import { createSelectableFieldRoutes } from './SelectableField-routes';



import { createServiceReferenceRoutes } from './ServiceReference-routes';



import { createValidationRuleRoutes } from './ValidationRule-routes';



import { createWebhookClientConfigRoutes } from './WebhookClientConfig-routes';



import { createWebhookConversionRoutes } from './WebhookConversion-routes';



import { createQuantityRoutes } from './Quantity-routes';



import { createAPIGroupRoutes } from './APIGroup-routes';



import { createAPIGroupListRoutes } from './APIGroupList-routes';



import { createAPIResourceRoutes } from './APIResource-routes';



import { createAPIResourceListRoutes } from './APIResourceList-routes';



import { createAPIVersionsRoutes } from './APIVersions-routes';



import { createConditionRoutes } from './Condition-routes';



import { createDeleteOptionsRoutes } from './DeleteOptions-routes';



import { createFieldSelectorRequirementRoutes } from './FieldSelectorRequirement-routes';



import { createFieldsV1Routes } from './FieldsV1-routes';



import { createGroupVersionForDiscoveryRoutes } from './GroupVersionForDiscovery-routes';



import { createLabelSelectorRoutes } from './LabelSelector-routes';



import { createLabelSelectorRequirementRoutes } from './LabelSelectorRequirement-routes';



import { createListMetaRoutes } from './ListMeta-routes';



import { createManagedFieldsEntryRoutes } from './ManagedFieldsEntry-routes';



import { createMicroTimeRoutes } from './MicroTime-routes';



import { createObjectMetaRoutes } from './ObjectMeta-routes';



import { createOwnerReferenceRoutes } from './OwnerReference-routes';



import { createPatchRoutes } from './Patch-routes';



import { createPreconditionsRoutes } from './Preconditions-routes';



import { createServerAddressByClientCIDRRoutes } from './ServerAddressByClientCIDR-routes';



import { createStatusRoutes } from './Status-routes';



import { createStatusCauseRoutes } from './StatusCause-routes';



import { createStatusDetailsRoutes } from './StatusDetails-routes';



import { createTimeRoutes } from './Time-routes';



import { createWatchEventRoutes } from './WatchEvent-routes';



import { createRawExtensionRoutes } from './RawExtension-routes';



import { createIntOrStringRoutes } from './IntOrString-routes';



import { createInfoRoutes } from './Info-routes';



import { createAPIServiceRoutes } from './APIService-routes';



import { createAPIServiceConditionRoutes } from './APIServiceCondition-routes';



import { createAPIServiceListRoutes } from './APIServiceList-routes';



import { createAPIServiceSpecRoutes } from './APIServiceSpec-routes';



import { createAPIServiceStatusRoutes } from './APIServiceStatus-routes';



import { createServiceReferenceRoutes } from './ServiceReference-routes';


/**
 * Create all routes for the API server
 */
export function createRoutes(): express.Router {
  const router = express.Router();
  
  // Add discovery routes
  router.use('/', createDiscoveryRoutes(storage));
  
  // Add resource routes
  
  
  
  router.use('/', createAuditAnnotationRoutes(storage));
  
  
  
  router.use('/', createExpressionWarningRoutes(storage));
  
  
  
  router.use('/', createMatchConditionRoutes(storage));
  
  
  
  router.use('/', createMatchResourcesRoutes(storage));
  
  
  
  router.use('/', createMutatingWebhookRoutes(storage));
  
  
  
  router.use('/', createMutatingWebhookConfigurationRoutes(storage));
  
  
  
  router.use('/', createMutatingWebhookConfigurationListRoutes(storage));
  
  
  
  router.use('/', createNamedRuleWithOperationsRoutes(storage));
  
  
  
  router.use('/', createParamKindRoutes(storage));
  
  
  
  router.use('/', createParamRefRoutes(storage));
  
  
  
  router.use('/', createRuleWithOperationsRoutes(storage));
  
  
  
  router.use('/', createServiceReferenceRoutes(storage));
  
  
  
  router.use('/', createTypeCheckingRoutes(storage));
  
  
  
  router.use('/', createValidatingAdmissionPolicyRoutes(storage));
  
  
  
  router.use('/', createValidatingAdmissionPolicyBindingRoutes(storage));
  
  
  
  router.use('/', createValidatingAdmissionPolicyBindingListRoutes(storage));
  
  
  
  router.use('/', createValidatingAdmissionPolicyBindingSpecRoutes(storage));
  
  
  
  router.use('/', createValidatingAdmissionPolicyListRoutes(storage));
  
  
  
  router.use('/', createValidatingAdmissionPolicySpecRoutes(storage));
  
  
  
  router.use('/', createValidatingAdmissionPolicyStatusRoutes(storage));
  
  
  
  router.use('/', createValidatingWebhookRoutes(storage));
  
  
  
  router.use('/', createValidatingWebhookConfigurationRoutes(storage));
  
  
  
  router.use('/', createValidatingWebhookConfigurationListRoutes(storage));
  
  
  
  router.use('/', createValidationRoutes(storage));
  
  
  
  router.use('/', createVariableRoutes(storage));
  
  
  
  router.use('/', createWebhookClientConfigRoutes(storage));
  
  
  
  router.use('/', createControllerRevisionRoutes(storage));
  
  
  
  router.use('/', createControllerRevisionListRoutes(storage));
  
  
  
  router.use('/', createDaemonSetRoutes(storage));
  
  
  
  router.use('/', createDaemonSetConditionRoutes(storage));
  
  
  
  router.use('/', createDaemonSetListRoutes(storage));
  
  
  
  router.use('/', createDaemonSetSpecRoutes(storage));
  
  
  
  router.use('/', createDaemonSetStatusRoutes(storage));
  
  
  
  router.use('/', createDaemonSetUpdateStrategyRoutes(storage));
  
  
  
  router.use('/', createDeploymentRoutes(storage));
  
  
  
  router.use('/', createDeploymentConditionRoutes(storage));
  
  
  
  router.use('/', createDeploymentListRoutes(storage));
  
  
  
  router.use('/', createDeploymentSpecRoutes(storage));
  
  
  
  router.use('/', createDeploymentStatusRoutes(storage));
  
  
  
  router.use('/', createDeploymentStrategyRoutes(storage));
  
  
  
  router.use('/', createReplicaSetRoutes(storage));
  
  
  
  router.use('/', createReplicaSetConditionRoutes(storage));
  
  
  
  router.use('/', createReplicaSetListRoutes(storage));
  
  
  
  router.use('/', createReplicaSetSpecRoutes(storage));
  
  
  
  router.use('/', createReplicaSetStatusRoutes(storage));
  
  
  
  router.use('/', createRollingUpdateDaemonSetRoutes(storage));
  
  
  
  router.use('/', createRollingUpdateDeploymentRoutes(storage));
  
  
  
  router.use('/', createRollingUpdateStatefulSetStrategyRoutes(storage));
  
  
  
  router.use('/', createStatefulSetRoutes(storage));
  
  
  
  router.use('/', createStatefulSetConditionRoutes(storage));
  
  
  
  router.use('/', createStatefulSetListRoutes(storage));
  
  
  
  router.use('/', createStatefulSetOrdinalsRoutes(storage));
  
  
  
  router.use('/', createStatefulSetPersistentVolumeClaimRetentionPolicyRoutes(storage));
  
  
  
  router.use('/', createStatefulSetSpecRoutes(storage));
  
  
  
  router.use('/', createStatefulSetStatusRoutes(storage));
  
  
  
  router.use('/', createStatefulSetUpdateStrategyRoutes(storage));
  
  
  
  router.use('/', createBoundObjectReferenceRoutes(storage));
  
  
  
  router.use('/', createSelfSubjectReviewRoutes(storage));
  
  
  
  router.use('/', createSelfSubjectReviewStatusRoutes(storage));
  
  
  
  router.use('/', createTokenRequestRoutes(storage));
  
  
  
  router.use('/', createTokenRequestSpecRoutes(storage));
  
  
  
  router.use('/', createTokenRequestStatusRoutes(storage));
  
  
  
  router.use('/', createTokenReviewRoutes(storage));
  
  
  
  router.use('/', createTokenReviewSpecRoutes(storage));
  
  
  
  router.use('/', createTokenReviewStatusRoutes(storage));
  
  
  
  router.use('/', createUserInfoRoutes(storage));
  
  
  
  router.use('/', createFieldSelectorAttributesRoutes(storage));
  
  
  
  router.use('/', createLabelSelectorAttributesRoutes(storage));
  
  
  
  router.use('/', createLocalSubjectAccessReviewRoutes(storage));
  
  
  
  router.use('/', createNonResourceAttributesRoutes(storage));
  
  
  
  router.use('/', createNonResourceRuleRoutes(storage));
  
  
  
  router.use('/', createResourceAttributesRoutes(storage));
  
  
  
  router.use('/', createResourceRuleRoutes(storage));
  
  
  
  router.use('/', createSelfSubjectAccessReviewRoutes(storage));
  
  
  
  router.use('/', createSelfSubjectAccessReviewSpecRoutes(storage));
  
  
  
  router.use('/', createSelfSubjectRulesReviewRoutes(storage));
  
  
  
  router.use('/', createSelfSubjectRulesReviewSpecRoutes(storage));
  
  
  
  router.use('/', createSubjectAccessReviewRoutes(storage));
  
  
  
  router.use('/', createSubjectAccessReviewSpecRoutes(storage));
  
  
  
  router.use('/', createSubjectAccessReviewStatusRoutes(storage));
  
  
  
  router.use('/', createSubjectRulesReviewStatusRoutes(storage));
  
  
  
  router.use('/', createCrossVersionObjectReferenceRoutes(storage));
  
  
  
  router.use('/', createHorizontalPodAutoscalerRoutes(storage));
  
  
  
  router.use('/', createHorizontalPodAutoscalerListRoutes(storage));
  
  
  
  router.use('/', createHorizontalPodAutoscalerSpecRoutes(storage));
  
  
  
  router.use('/', createHorizontalPodAutoscalerStatusRoutes(storage));
  
  
  
  router.use('/', createScaleRoutes(storage));
  
  
  
  router.use('/', createScaleSpecRoutes(storage));
  
  
  
  router.use('/', createScaleStatusRoutes(storage));
  
  
  
  router.use('/', createContainerResourceMetricSourceRoutes(storage));
  
  
  
  router.use('/', createContainerResourceMetricStatusRoutes(storage));
  
  
  
  router.use('/', createCrossVersionObjectReferenceRoutes(storage));
  
  
  
  router.use('/', createExternalMetricSourceRoutes(storage));
  
  
  
  router.use('/', createExternalMetricStatusRoutes(storage));
  
  
  
  router.use('/', createHPAScalingPolicyRoutes(storage));
  
  
  
  router.use('/', createHPAScalingRulesRoutes(storage));
  
  
  
  router.use('/', createHorizontalPodAutoscalerRoutes(storage));
  
  
  
  router.use('/', createHorizontalPodAutoscalerBehaviorRoutes(storage));
  
  
  
  router.use('/', createHorizontalPodAutoscalerConditionRoutes(storage));
  
  
  
  router.use('/', createHorizontalPodAutoscalerListRoutes(storage));
  
  
  
  router.use('/', createHorizontalPodAutoscalerSpecRoutes(storage));
  
  
  
  router.use('/', createHorizontalPodAutoscalerStatusRoutes(storage));
  
  
  
  router.use('/', createMetricIdentifierRoutes(storage));
  
  
  
  router.use('/', createMetricSpecRoutes(storage));
  
  
  
  router.use('/', createMetricStatusRoutes(storage));
  
  
  
  router.use('/', createMetricTargetRoutes(storage));
  
  
  
  router.use('/', createMetricValueStatusRoutes(storage));
  
  
  
  router.use('/', createObjectMetricSourceRoutes(storage));
  
  
  
  router.use('/', createObjectMetricStatusRoutes(storage));
  
  
  
  router.use('/', createPodsMetricSourceRoutes(storage));
  
  
  
  router.use('/', createPodsMetricStatusRoutes(storage));
  
  
  
  router.use('/', createResourceMetricSourceRoutes(storage));
  
  
  
  router.use('/', createResourceMetricStatusRoutes(storage));
  
  
  
  router.use('/', createCronJobRoutes(storage));
  
  
  
  router.use('/', createCronJobListRoutes(storage));
  
  
  
  router.use('/', createCronJobSpecRoutes(storage));
  
  
  
  router.use('/', createCronJobStatusRoutes(storage));
  
  
  
  router.use('/', createJobRoutes(storage));
  
  
  
  router.use('/', createJobConditionRoutes(storage));
  
  
  
  router.use('/', createJobListRoutes(storage));
  
  
  
  router.use('/', createJobSpecRoutes(storage));
  
  
  
  router.use('/', createJobStatusRoutes(storage));
  
  
  
  router.use('/', createJobTemplateSpecRoutes(storage));
  
  
  
  router.use('/', createPodFailurePolicyRoutes(storage));
  
  
  
  router.use('/', createPodFailurePolicyOnExitCodesRequirementRoutes(storage));
  
  
  
  router.use('/', createPodFailurePolicyOnPodConditionsPatternRoutes(storage));
  
  
  
  router.use('/', createPodFailurePolicyRuleRoutes(storage));
  
  
  
  router.use('/', createSuccessPolicyRoutes(storage));
  
  
  
  router.use('/', createSuccessPolicyRuleRoutes(storage));
  
  
  
  router.use('/', createUncountedTerminatedPodsRoutes(storage));
  
  
  
  router.use('/', createCertificateSigningRequestRoutes(storage));
  
  
  
  router.use('/', createCertificateSigningRequestConditionRoutes(storage));
  
  
  
  router.use('/', createCertificateSigningRequestListRoutes(storage));
  
  
  
  router.use('/', createCertificateSigningRequestSpecRoutes(storage));
  
  
  
  router.use('/', createCertificateSigningRequestStatusRoutes(storage));
  
  
  
  router.use('/', createLeaseRoutes(storage));
  
  
  
  router.use('/', createLeaseListRoutes(storage));
  
  
  
  router.use('/', createLeaseSpecRoutes(storage));
  
  
  
  router.use('/', createAWSElasticBlockStoreVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createAffinityRoutes(storage));
  
  
  
  router.use('/', createAppArmorProfileRoutes(storage));
  
  
  
  router.use('/', createAttachedVolumeRoutes(storage));
  
  
  
  router.use('/', createAzureDiskVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createAzureFilePersistentVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createAzureFileVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createBindingRoutes(storage));
  
  
  
  router.use('/', createCSIPersistentVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createCSIVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createCapabilitiesRoutes(storage));
  
  
  
  router.use('/', createCephFSPersistentVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createCephFSVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createCinderPersistentVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createCinderVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createClientIPConfigRoutes(storage));
  
  
  
  router.use('/', createClusterTrustBundleProjectionRoutes(storage));
  
  
  
  router.use('/', createComponentConditionRoutes(storage));
  
  
  
  router.use('/', createComponentStatusRoutes(storage));
  
  
  
  router.use('/', createComponentStatusListRoutes(storage));
  
  
  
  router.use('/', createConfigMapRoutes(storage));
  
  
  
  router.use('/', createConfigMapEnvSourceRoutes(storage));
  
  
  
  router.use('/', createConfigMapKeySelectorRoutes(storage));
  
  
  
  router.use('/', createConfigMapListRoutes(storage));
  
  
  
  router.use('/', createConfigMapNodeConfigSourceRoutes(storage));
  
  
  
  router.use('/', createConfigMapProjectionRoutes(storage));
  
  
  
  router.use('/', createConfigMapVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createContainerRoutes(storage));
  
  
  
  router.use('/', createContainerImageRoutes(storage));
  
  
  
  router.use('/', createContainerPortRoutes(storage));
  
  
  
  router.use('/', createContainerResizePolicyRoutes(storage));
  
  
  
  router.use('/', createContainerStateRoutes(storage));
  
  
  
  router.use('/', createContainerStateRunningRoutes(storage));
  
  
  
  router.use('/', createContainerStateTerminatedRoutes(storage));
  
  
  
  router.use('/', createContainerStateWaitingRoutes(storage));
  
  
  
  router.use('/', createContainerStatusRoutes(storage));
  
  
  
  router.use('/', createContainerUserRoutes(storage));
  
  
  
  router.use('/', createDaemonEndpointRoutes(storage));
  
  
  
  router.use('/', createDownwardAPIProjectionRoutes(storage));
  
  
  
  router.use('/', createDownwardAPIVolumeFileRoutes(storage));
  
  
  
  router.use('/', createDownwardAPIVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createEmptyDirVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createEndpointAddressRoutes(storage));
  
  
  
  router.use('/', createEndpointPortRoutes(storage));
  
  
  
  router.use('/', createEndpointSubsetRoutes(storage));
  
  
  
  router.use('/', createEndpointsRoutes(storage));
  
  
  
  router.use('/', createEndpointsListRoutes(storage));
  
  
  
  router.use('/', createEnvFromSourceRoutes(storage));
  
  
  
  router.use('/', createEnvVarRoutes(storage));
  
  
  
  router.use('/', createEnvVarSourceRoutes(storage));
  
  
  
  router.use('/', createEphemeralContainerRoutes(storage));
  
  
  
  router.use('/', createEphemeralVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createEventRoutes(storage));
  
  
  
  router.use('/', createEventListRoutes(storage));
  
  
  
  router.use('/', createEventSeriesRoutes(storage));
  
  
  
  router.use('/', createEventSourceRoutes(storage));
  
  
  
  router.use('/', createExecActionRoutes(storage));
  
  
  
  router.use('/', createFCVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createFlexPersistentVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createFlexVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createFlockerVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createGCEPersistentDiskVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createGRPCActionRoutes(storage));
  
  
  
  router.use('/', createGitRepoVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createGlusterfsPersistentVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createGlusterfsVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createHTTPGetActionRoutes(storage));
  
  
  
  router.use('/', createHTTPHeaderRoutes(storage));
  
  
  
  router.use('/', createHostAliasRoutes(storage));
  
  
  
  router.use('/', createHostIPRoutes(storage));
  
  
  
  router.use('/', createHostPathVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createISCSIPersistentVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createISCSIVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createImageVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createKeyToPathRoutes(storage));
  
  
  
  router.use('/', createLifecycleRoutes(storage));
  
  
  
  router.use('/', createLifecycleHandlerRoutes(storage));
  
  
  
  router.use('/', createLimitRangeRoutes(storage));
  
  
  
  router.use('/', createLimitRangeItemRoutes(storage));
  
  
  
  router.use('/', createLimitRangeListRoutes(storage));
  
  
  
  router.use('/', createLimitRangeSpecRoutes(storage));
  
  
  
  router.use('/', createLinuxContainerUserRoutes(storage));
  
  
  
  router.use('/', createLoadBalancerIngressRoutes(storage));
  
  
  
  router.use('/', createLoadBalancerStatusRoutes(storage));
  
  
  
  router.use('/', createLocalObjectReferenceRoutes(storage));
  
  
  
  router.use('/', createLocalVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createModifyVolumeStatusRoutes(storage));
  
  
  
  router.use('/', createNFSVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createNamespaceRoutes(storage));
  
  
  
  router.use('/', createNamespaceConditionRoutes(storage));
  
  
  
  router.use('/', createNamespaceListRoutes(storage));
  
  
  
  router.use('/', createNamespaceSpecRoutes(storage));
  
  
  
  router.use('/', createNamespaceStatusRoutes(storage));
  
  
  
  router.use('/', createNodeRoutes(storage));
  
  
  
  router.use('/', createNodeAddressRoutes(storage));
  
  
  
  router.use('/', createNodeAffinityRoutes(storage));
  
  
  
  router.use('/', createNodeConditionRoutes(storage));
  
  
  
  router.use('/', createNodeConfigSourceRoutes(storage));
  
  
  
  router.use('/', createNodeConfigStatusRoutes(storage));
  
  
  
  router.use('/', createNodeDaemonEndpointsRoutes(storage));
  
  
  
  router.use('/', createNodeFeaturesRoutes(storage));
  
  
  
  router.use('/', createNodeListRoutes(storage));
  
  
  
  router.use('/', createNodeRuntimeHandlerRoutes(storage));
  
  
  
  router.use('/', createNodeRuntimeHandlerFeaturesRoutes(storage));
  
  
  
  router.use('/', createNodeSelectorRoutes(storage));
  
  
  
  router.use('/', createNodeSelectorRequirementRoutes(storage));
  
  
  
  router.use('/', createNodeSelectorTermRoutes(storage));
  
  
  
  router.use('/', createNodeSpecRoutes(storage));
  
  
  
  router.use('/', createNodeStatusRoutes(storage));
  
  
  
  router.use('/', createNodeSystemInfoRoutes(storage));
  
  
  
  router.use('/', createObjectFieldSelectorRoutes(storage));
  
  
  
  router.use('/', createObjectReferenceRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeClaimRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeClaimConditionRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeClaimListRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeClaimSpecRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeClaimStatusRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeClaimTemplateRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeClaimVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeListRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeSpecRoutes(storage));
  
  
  
  router.use('/', createPersistentVolumeStatusRoutes(storage));
  
  
  
  router.use('/', createPhotonPersistentDiskVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createPodRoutes(storage));
  
  
  
  router.use('/', createPodAffinityRoutes(storage));
  
  
  
  router.use('/', createPodAffinityTermRoutes(storage));
  
  
  
  router.use('/', createPodAntiAffinityRoutes(storage));
  
  
  
  router.use('/', createPodConditionRoutes(storage));
  
  
  
  router.use('/', createPodDNSConfigRoutes(storage));
  
  
  
  router.use('/', createPodDNSConfigOptionRoutes(storage));
  
  
  
  router.use('/', createPodIPRoutes(storage));
  
  
  
  router.use('/', createPodListRoutes(storage));
  
  
  
  router.use('/', createPodOSRoutes(storage));
  
  
  
  router.use('/', createPodReadinessGateRoutes(storage));
  
  
  
  router.use('/', createPodResourceClaimRoutes(storage));
  
  
  
  router.use('/', createPodResourceClaimStatusRoutes(storage));
  
  
  
  router.use('/', createPodSchedulingGateRoutes(storage));
  
  
  
  router.use('/', createPodSecurityContextRoutes(storage));
  
  
  
  router.use('/', createPodSpecRoutes(storage));
  
  
  
  router.use('/', createPodStatusRoutes(storage));
  
  
  
  router.use('/', createPodTemplateRoutes(storage));
  
  
  
  router.use('/', createPodTemplateListRoutes(storage));
  
  
  
  router.use('/', createPodTemplateSpecRoutes(storage));
  
  
  
  router.use('/', createPortStatusRoutes(storage));
  
  
  
  router.use('/', createPortworxVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createPreferredSchedulingTermRoutes(storage));
  
  
  
  router.use('/', createProbeRoutes(storage));
  
  
  
  router.use('/', createProjectedVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createQuobyteVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createRBDPersistentVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createRBDVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createReplicationControllerRoutes(storage));
  
  
  
  router.use('/', createReplicationControllerConditionRoutes(storage));
  
  
  
  router.use('/', createReplicationControllerListRoutes(storage));
  
  
  
  router.use('/', createReplicationControllerSpecRoutes(storage));
  
  
  
  router.use('/', createReplicationControllerStatusRoutes(storage));
  
  
  
  router.use('/', createResourceClaimRoutes(storage));
  
  
  
  router.use('/', createResourceFieldSelectorRoutes(storage));
  
  
  
  router.use('/', createResourceHealthRoutes(storage));
  
  
  
  router.use('/', createResourceQuotaRoutes(storage));
  
  
  
  router.use('/', createResourceQuotaListRoutes(storage));
  
  
  
  router.use('/', createResourceQuotaSpecRoutes(storage));
  
  
  
  router.use('/', createResourceQuotaStatusRoutes(storage));
  
  
  
  router.use('/', createResourceRequirementsRoutes(storage));
  
  
  
  router.use('/', createResourceStatusRoutes(storage));
  
  
  
  router.use('/', createSELinuxOptionsRoutes(storage));
  
  
  
  router.use('/', createScaleIOPersistentVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createScaleIOVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createScopeSelectorRoutes(storage));
  
  
  
  router.use('/', createScopedResourceSelectorRequirementRoutes(storage));
  
  
  
  router.use('/', createSeccompProfileRoutes(storage));
  
  
  
  router.use('/', createSecretRoutes(storage));
  
  
  
  router.use('/', createSecretEnvSourceRoutes(storage));
  
  
  
  router.use('/', createSecretKeySelectorRoutes(storage));
  
  
  
  router.use('/', createSecretListRoutes(storage));
  
  
  
  router.use('/', createSecretProjectionRoutes(storage));
  
  
  
  router.use('/', createSecretReferenceRoutes(storage));
  
  
  
  router.use('/', createSecretVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createSecurityContextRoutes(storage));
  
  
  
  router.use('/', createServiceRoutes(storage));
  
  
  
  router.use('/', createServiceAccountRoutes(storage));
  
  
  
  router.use('/', createServiceAccountListRoutes(storage));
  
  
  
  router.use('/', createServiceAccountTokenProjectionRoutes(storage));
  
  
  
  router.use('/', createServiceListRoutes(storage));
  
  
  
  router.use('/', createServicePortRoutes(storage));
  
  
  
  router.use('/', createServiceSpecRoutes(storage));
  
  
  
  router.use('/', createServiceStatusRoutes(storage));
  
  
  
  router.use('/', createSessionAffinityConfigRoutes(storage));
  
  
  
  router.use('/', createSleepActionRoutes(storage));
  
  
  
  router.use('/', createStorageOSPersistentVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createStorageOSVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createSysctlRoutes(storage));
  
  
  
  router.use('/', createTCPSocketActionRoutes(storage));
  
  
  
  router.use('/', createTaintRoutes(storage));
  
  
  
  router.use('/', createTolerationRoutes(storage));
  
  
  
  router.use('/', createTopologySelectorLabelRequirementRoutes(storage));
  
  
  
  router.use('/', createTopologySelectorTermRoutes(storage));
  
  
  
  router.use('/', createTopologySpreadConstraintRoutes(storage));
  
  
  
  router.use('/', createTypedLocalObjectReferenceRoutes(storage));
  
  
  
  router.use('/', createTypedObjectReferenceRoutes(storage));
  
  
  
  router.use('/', createVolumeRoutes(storage));
  
  
  
  router.use('/', createVolumeDeviceRoutes(storage));
  
  
  
  router.use('/', createVolumeMountRoutes(storage));
  
  
  
  router.use('/', createVolumeMountStatusRoutes(storage));
  
  
  
  router.use('/', createVolumeNodeAffinityRoutes(storage));
  
  
  
  router.use('/', createVolumeProjectionRoutes(storage));
  
  
  
  router.use('/', createVolumeResourceRequirementsRoutes(storage));
  
  
  
  router.use('/', createVsphereVirtualDiskVolumeSourceRoutes(storage));
  
  
  
  router.use('/', createWeightedPodAffinityTermRoutes(storage));
  
  
  
  router.use('/', createWindowsSecurityContextOptionsRoutes(storage));
  
  
  
  router.use('/', createEndpointRoutes(storage));
  
  
  
  router.use('/', createEndpointConditionsRoutes(storage));
  
  
  
  router.use('/', createEndpointHintsRoutes(storage));
  
  
  
  router.use('/', createEndpointPortRoutes(storage));
  
  
  
  router.use('/', createEndpointSliceRoutes(storage));
  
  
  
  router.use('/', createEndpointSliceListRoutes(storage));
  
  
  
  router.use('/', createForZoneRoutes(storage));
  
  
  
  router.use('/', createEventRoutes(storage));
  
  
  
  router.use('/', createEventListRoutes(storage));
  
  
  
  router.use('/', createEventSeriesRoutes(storage));
  
  
  
  router.use('/', createExemptPriorityLevelConfigurationRoutes(storage));
  
  
  
  router.use('/', createFlowDistinguisherMethodRoutes(storage));
  
  
  
  router.use('/', createFlowSchemaRoutes(storage));
  
  
  
  router.use('/', createFlowSchemaConditionRoutes(storage));
  
  
  
  router.use('/', createFlowSchemaListRoutes(storage));
  
  
  
  router.use('/', createFlowSchemaSpecRoutes(storage));
  
  
  
  router.use('/', createFlowSchemaStatusRoutes(storage));
  
  
  
  router.use('/', createGroupSubjectRoutes(storage));
  
  
  
  router.use('/', createLimitResponseRoutes(storage));
  
  
  
  router.use('/', createLimitedPriorityLevelConfigurationRoutes(storage));
  
  
  
  router.use('/', createNonResourcePolicyRuleRoutes(storage));
  
  
  
  router.use('/', createPolicyRulesWithSubjectsRoutes(storage));
  
  
  
  router.use('/', createPriorityLevelConfigurationRoutes(storage));
  
  
  
  router.use('/', createPriorityLevelConfigurationConditionRoutes(storage));
  
  
  
  router.use('/', createPriorityLevelConfigurationListRoutes(storage));
  
  
  
  router.use('/', createPriorityLevelConfigurationReferenceRoutes(storage));
  
  
  
  router.use('/', createPriorityLevelConfigurationSpecRoutes(storage));
  
  
  
  router.use('/', createPriorityLevelConfigurationStatusRoutes(storage));
  
  
  
  router.use('/', createQueuingConfigurationRoutes(storage));
  
  
  
  router.use('/', createResourcePolicyRuleRoutes(storage));
  
  
  
  router.use('/', createServiceAccountSubjectRoutes(storage));
  
  
  
  router.use('/', createSubjectRoutes(storage));
  
  
  
  router.use('/', createUserSubjectRoutes(storage));
  
  
  
  router.use('/', createHTTPIngressPathRoutes(storage));
  
  
  
  router.use('/', createHTTPIngressRuleValueRoutes(storage));
  
  
  
  router.use('/', createIPBlockRoutes(storage));
  
  
  
  router.use('/', createIngressRoutes(storage));
  
  
  
  router.use('/', createIngressBackendRoutes(storage));
  
  
  
  router.use('/', createIngressClassRoutes(storage));
  
  
  
  router.use('/', createIngressClassListRoutes(storage));
  
  
  
  router.use('/', createIngressClassParametersReferenceRoutes(storage));
  
  
  
  router.use('/', createIngressClassSpecRoutes(storage));
  
  
  
  router.use('/', createIngressListRoutes(storage));
  
  
  
  router.use('/', createIngressLoadBalancerIngressRoutes(storage));
  
  
  
  router.use('/', createIngressLoadBalancerStatusRoutes(storage));
  
  
  
  router.use('/', createIngressPortStatusRoutes(storage));
  
  
  
  router.use('/', createIngressRuleRoutes(storage));
  
  
  
  router.use('/', createIngressServiceBackendRoutes(storage));
  
  
  
  router.use('/', createIngressSpecRoutes(storage));
  
  
  
  router.use('/', createIngressStatusRoutes(storage));
  
  
  
  router.use('/', createIngressTLSRoutes(storage));
  
  
  
  router.use('/', createNetworkPolicyRoutes(storage));
  
  
  
  router.use('/', createNetworkPolicyEgressRuleRoutes(storage));
  
  
  
  router.use('/', createNetworkPolicyIngressRuleRoutes(storage));
  
  
  
  router.use('/', createNetworkPolicyListRoutes(storage));
  
  
  
  router.use('/', createNetworkPolicyPeerRoutes(storage));
  
  
  
  router.use('/', createNetworkPolicyPortRoutes(storage));
  
  
  
  router.use('/', createNetworkPolicySpecRoutes(storage));
  
  
  
  router.use('/', createServiceBackendPortRoutes(storage));
  
  
  
  router.use('/', createOverheadRoutes(storage));
  
  
  
  router.use('/', createRuntimeClassRoutes(storage));
  
  
  
  router.use('/', createRuntimeClassListRoutes(storage));
  
  
  
  router.use('/', createSchedulingRoutes(storage));
  
  
  
  router.use('/', createEvictionRoutes(storage));
  
  
  
  router.use('/', createPodDisruptionBudgetRoutes(storage));
  
  
  
  router.use('/', createPodDisruptionBudgetListRoutes(storage));
  
  
  
  router.use('/', createPodDisruptionBudgetSpecRoutes(storage));
  
  
  
  router.use('/', createPodDisruptionBudgetStatusRoutes(storage));
  
  
  
  router.use('/', createAggregationRuleRoutes(storage));
  
  
  
  router.use('/', createClusterRoleRoutes(storage));
  
  
  
  router.use('/', createClusterRoleBindingRoutes(storage));
  
  
  
  router.use('/', createClusterRoleBindingListRoutes(storage));
  
  
  
  router.use('/', createClusterRoleListRoutes(storage));
  
  
  
  router.use('/', createPolicyRuleRoutes(storage));
  
  
  
  router.use('/', createRoleRoutes(storage));
  
  
  
  router.use('/', createRoleBindingRoutes(storage));
  
  
  
  router.use('/', createRoleBindingListRoutes(storage));
  
  
  
  router.use('/', createRoleListRoutes(storage));
  
  
  
  router.use('/', createRoleRefRoutes(storage));
  
  
  
  router.use('/', createSubjectRoutes(storage));
  
  
  
  router.use('/', createPriorityClassRoutes(storage));
  
  
  
  router.use('/', createPriorityClassListRoutes(storage));
  
  
  
  router.use('/', createCSIDriverRoutes(storage));
  
  
  
  router.use('/', createCSIDriverListRoutes(storage));
  
  
  
  router.use('/', createCSIDriverSpecRoutes(storage));
  
  
  
  router.use('/', createCSINodeRoutes(storage));
  
  
  
  router.use('/', createCSINodeDriverRoutes(storage));
  
  
  
  router.use('/', createCSINodeListRoutes(storage));
  
  
  
  router.use('/', createCSINodeSpecRoutes(storage));
  
  
  
  router.use('/', createCSIStorageCapacityRoutes(storage));
  
  
  
  router.use('/', createCSIStorageCapacityListRoutes(storage));
  
  
  
  router.use('/', createStorageClassRoutes(storage));
  
  
  
  router.use('/', createStorageClassListRoutes(storage));
  
  
  
  router.use('/', createTokenRequestRoutes(storage));
  
  
  
  router.use('/', createVolumeAttachmentRoutes(storage));
  
  
  
  router.use('/', createVolumeAttachmentListRoutes(storage));
  
  
  
  router.use('/', createVolumeAttachmentSourceRoutes(storage));
  
  
  
  router.use('/', createVolumeAttachmentSpecRoutes(storage));
  
  
  
  router.use('/', createVolumeAttachmentStatusRoutes(storage));
  
  
  
  router.use('/', createVolumeErrorRoutes(storage));
  
  
  
  router.use('/', createVolumeNodeResourcesRoutes(storage));
  
  
  
  router.use('/', createCustomResourceColumnDefinitionRoutes(storage));
  
  
  
  router.use('/', createCustomResourceConversionRoutes(storage));
  
  
  
  router.use('/', createCustomResourceDefinitionRoutes(storage));
  
  
  
  router.use('/', createCustomResourceDefinitionConditionRoutes(storage));
  
  
  
  router.use('/', createCustomResourceDefinitionListRoutes(storage));
  
  
  
  router.use('/', createCustomResourceDefinitionNamesRoutes(storage));
  
  
  
  router.use('/', createCustomResourceDefinitionSpecRoutes(storage));
  
  
  
  router.use('/', createCustomResourceDefinitionStatusRoutes(storage));
  
  
  
  router.use('/', createCustomResourceDefinitionVersionRoutes(storage));
  
  
  
  router.use('/', createCustomResourceSubresourceScaleRoutes(storage));
  
  
  
  router.use('/', createCustomResourceSubresourceStatusRoutes(storage));
  
  
  
  router.use('/', createCustomResourceSubresourcesRoutes(storage));
  
  
  
  router.use('/', createCustomResourceValidationRoutes(storage));
  
  
  
  router.use('/', createExternalDocumentationRoutes(storage));
  
  
  
  router.use('/', createJSONRoutes(storage));
  
  
  
  router.use('/', createJSONSchemaPropsOrArrayRoutes(storage));
  
  
  
  router.use('/', createJSONSchemaPropsOrBoolRoutes(storage));
  
  
  
  router.use('/', createJSONSchemaPropsOrStringArrayRoutes(storage));
  
  
  
  router.use('/', createSelectableFieldRoutes(storage));
  
  
  
  router.use('/', createServiceReferenceRoutes(storage));
  
  
  
  router.use('/', createValidationRuleRoutes(storage));
  
  
  
  router.use('/', createWebhookClientConfigRoutes(storage));
  
  
  
  router.use('/', createWebhookConversionRoutes(storage));
  
  
  
  router.use('/', createQuantityRoutes(storage));
  
  
  
  router.use('/', createAPIGroupRoutes(storage));
  
  
  
  router.use('/', createAPIGroupListRoutes(storage));
  
  
  
  router.use('/', createAPIResourceRoutes(storage));
  
  
  
  router.use('/', createAPIResourceListRoutes(storage));
  
  
  
  router.use('/', createAPIVersionsRoutes(storage));
  
  
  
  router.use('/', createConditionRoutes(storage));
  
  
  
  router.use('/', createDeleteOptionsRoutes(storage));
  
  
  
  router.use('/', createFieldSelectorRequirementRoutes(storage));
  
  
  
  router.use('/', createFieldsV1Routes(storage));
  
  
  
  router.use('/', createGroupVersionForDiscoveryRoutes(storage));
  
  
  
  router.use('/', createLabelSelectorRoutes(storage));
  
  
  
  router.use('/', createLabelSelectorRequirementRoutes(storage));
  
  
  
  router.use('/', createListMetaRoutes(storage));
  
  
  
  router.use('/', createManagedFieldsEntryRoutes(storage));
  
  
  
  router.use('/', createMicroTimeRoutes(storage));
  
  
  
  router.use('/', createObjectMetaRoutes(storage));
  
  
  
  router.use('/', createOwnerReferenceRoutes(storage));
  
  
  
  router.use('/', createPatchRoutes(storage));
  
  
  
  router.use('/', createPreconditionsRoutes(storage));
  
  
  
  router.use('/', createServerAddressByClientCIDRRoutes(storage));
  
  
  
  router.use('/', createStatusRoutes(storage));
  
  
  
  router.use('/', createStatusCauseRoutes(storage));
  
  
  
  router.use('/', createStatusDetailsRoutes(storage));
  
  
  
  router.use('/', createTimeRoutes(storage));
  
  
  
  router.use('/', createWatchEventRoutes(storage));
  
  
  
  router.use('/', createRawExtensionRoutes(storage));
  
  
  
  router.use('/', createIntOrStringRoutes(storage));
  
  
  
  router.use('/', createInfoRoutes(storage));
  
  
  
  router.use('/', createAPIServiceRoutes(storage));
  
  
  
  router.use('/', createAPIServiceConditionRoutes(storage));
  
  
  
  router.use('/', createAPIServiceListRoutes(storage));
  
  
  
  router.use('/', createAPIServiceSpecRoutes(storage));
  
  
  
  router.use('/', createAPIServiceStatusRoutes(storage));
  
  
  
  router.use('/', createServiceReferenceRoutes(storage));
  
  
  return router;
}
