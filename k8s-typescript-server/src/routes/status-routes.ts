import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { 
fetchResourceList, 
validateResource, 
applyPatch, 
handleResourceError,
createNotFoundResponse
} from '../utils';



/**
* Create routes for status resources
* @resourceType status
*/
export function createstatusRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
 * read status of the specified ValidatingAdmissionPolicy
 */
router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
 * replace status of the specified ValidatingAdmissionPolicy
 */
router.put('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
 * partially update status of the specified ValidatingAdmissionPolicy
 */
router.patch('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/batch/v1/namespaces/:namespace/jobs/:name/status
 * partially update status of the specified Job
 */
router.patch('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/namespaces/:namespace/jobs/:name/status
 * read status of the specified Job
 */
router.get('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/batch/v1/namespaces/:namespace/jobs/:name/status
 * replace status of the specified Job
 */
router.put('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
 * read status of the specified CustomResourceDefinition
 */
router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
 * replace status of the specified CustomResourceDefinition
 */
router.put('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
 * partially update status of the specified CustomResourceDefinition
 */
router.patch('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
 * read status of the specified PriorityLevelConfiguration
 */
router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
 * replace status of the specified PriorityLevelConfiguration
 */
router.put('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
 * partially update status of the specified PriorityLevelConfiguration
 */
router.patch('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
 * read status of the specified ReplicaSet
 */
router.get('/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
 * replace status of the specified ReplicaSet
 */
router.put('/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
 * partially update status of the specified ReplicaSet
 */
router.patch('/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/deployments/:name/status
 * read status of the specified Deployment
 */
router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apps/v1/namespaces/:namespace/deployments/:name/status
 * replace status of the specified Deployment
 */
router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name/status
 * partially update status of the specified Deployment
 */
router.patch('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
 * read status of the specified StatefulSet
 */
router.get('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
 * replace status of the specified StatefulSet
 */
router.put('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
 * partially update status of the specified StatefulSet
 */
router.patch('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apiregistration.k8s.io/v1/apiservices/:name/status
 * read status of the specified APIService
 */
router.get('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apiregistration.k8s.io/v1/apiservices/:name/status
 * replace status of the specified APIService
 */
router.put('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apiregistration.k8s.io/v1/apiservices/:name/status
 * partially update status of the specified APIService
 */
router.patch('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/services/:name/status
 * read status of the specified Service
 */
router.get('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Services__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/services/:name/status
 * replace status of the specified Service
 */
router.put('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Services__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/services/:name/status
 * partially update status of the specified Service
 */
router.patch('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Services__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:name/status
 * read status of the specified Namespace
 */
router.get('/api/v1/namespaces/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:name/status
 * replace status of the specified Namespace
 */
router.put('/api/v1/namespaces/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:name/status
 * partially update status of the specified Namespace
 */
router.patch('/api/v1/namespaces/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/nodes/:name/status
 * partially update status of the specified Node
 */
router.patch('/api/v1/nodes/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Nodes__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/nodes/:name/status
 * read status of the specified Node
 */
router.get('/api/v1/nodes/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Nodes__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/nodes/:name/status
 * replace status of the specified Node
 */
router.put('/api/v1/nodes/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Nodes__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
 * read status of the specified PersistentVolumeClaim
 */
router.get('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
 * replace status of the specified PersistentVolumeClaim
 */
router.put('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
 * partially update status of the specified PersistentVolumeClaim
 */
router.patch('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/storage.k8s.io/v1/volumeattachments/:name/status
 * replace status of the specified VolumeAttachment
 */
router.put('/apis/storage.k8s.io/v1/volumeattachments/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/storage.k8s.io/v1/volumeattachments/:name/status
 * partially update status of the specified VolumeAttachment
 */
router.patch('/apis/storage.k8s.io/v1/volumeattachments/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/volumeattachments/:name/status
 * read status of the specified VolumeAttachment
 */
router.get('/apis/storage.k8s.io/v1/volumeattachments/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/resourcequotas/:name/status
 * read status of the specified ResourceQuota
 */
router.get('/api/v1/namespaces/:namespace/resourcequotas/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Resourcequotas__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/resourcequotas/:name/status
 * replace status of the specified ResourceQuota
 */
router.put('/api/v1/namespaces/:namespace/resourcequotas/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Resourcequotas__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/resourcequotas/:name/status
 * partially update status of the specified ResourceQuota
 */
router.patch('/api/v1/namespaces/:namespace/resourcequotas/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Resourcequotas__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
 * read status of the specified HorizontalPodAutoscaler
 */
router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
 * replace status of the specified HorizontalPodAutoscaler
 */
router.put('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
 * partially update status of the specified HorizontalPodAutoscaler
 */
router.patch('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
 * read status of the specified CronJob
 */
router.get('/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
 * replace status of the specified CronJob
 */
router.put('/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
 * partially update status of the specified CronJob
 */
router.patch('/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/pods/:name/status
 * read status of the specified Pod
 */
router.get('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/pods/:name/status
 * replace status of the specified Pod
 */
router.put('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Pods__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/pods/:name/status
 * partially update status of the specified Pod
 */
router.patch('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Pods__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
 * partially update status of the specified ReplicationController
 */
router.patch('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
 * read status of the specified ReplicationController
 */
router.get('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
 * replace status of the specified ReplicationController
 */
router.put('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
 * read status of the specified Ingress
 */
router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
 * replace status of the specified Ingress
 */
router.put('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
 * partially update status of the specified Ingress
 */
router.patch('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status
 * read status of the specified CertificateSigningRequest
 */
router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status
 * replace status of the specified CertificateSigningRequest
 */
router.put('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status
 * partially update status of the specified CertificateSigningRequest
 */
router.patch('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
 * read status of the specified PodDisruptionBudget
 */
router.get('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
 * replace status of the specified PodDisruptionBudget
 */
router.put('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
 * partially update status of the specified PodDisruptionBudget
 */
router.patch('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
 * read status of the specified HorizontalPodAutoscaler
 */
router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
 * replace status of the specified HorizontalPodAutoscaler
 */
router.put('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
 * partially update status of the specified HorizontalPodAutoscaler
 */
router.patch('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/persistentvolumes/:name/status
 * read status of the specified PersistentVolume
 */
router.get('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Persistentvolumes__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/persistentvolumes/:name/status
 * replace status of the specified PersistentVolume
 */
router.put('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Persistentvolumes__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/persistentvolumes/:name/status
 * partially update status of the specified PersistentVolume
 */
router.patch('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Persistentvolumes__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
 * read status of the specified DaemonSet
 */
router.get('/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
 * replace status of the specified DaemonSet
 */
router.put('/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
 * partially update status of the specified DaemonSet
 */
router.patch('/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
 * replace status of the specified FlowSchema
 */
router.put('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', async (req, res, next) => {
  try {
    await handleputModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
 * partially update status of the specified FlowSchema
 */
router.patch('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
 * read status of the specified FlowSchema
 */
router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name_Status(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
* read status of the specified ValidatingAdmissionPolicy
* @resourceType status
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
* replace status of the specified ValidatingAdmissionPolicy
* @resourceType status
*/
async function handleputModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
* partially update status of the specified ValidatingAdmissionPolicy
* @resourceType status
*/
async function handlepatchModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/batch/v1/namespaces/:namespace/jobs/:name/status
* partially update status of the specified Job
* @resourceType status
*/
async function handlepatchModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/batch/v1/namespaces/:namespace/jobs/:name/status
* read status of the specified Job
* @resourceType status
*/
async function handlegetModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/batch/v1/namespaces/:namespace/jobs/:name/status
* replace status of the specified Job
* @resourceType status
*/
async function handleputModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
* read status of the specified CustomResourceDefinition
* @resourceType status
*/
async function handlegetModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
* replace status of the specified CustomResourceDefinition
* @resourceType status
*/
async function handleputModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
* partially update status of the specified CustomResourceDefinition
* @resourceType status
*/
async function handlepatchModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
* read status of the specified PriorityLevelConfiguration
* @resourceType status
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
* replace status of the specified PriorityLevelConfiguration
* @resourceType status
*/
async function handleputModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
* partially update status of the specified PriorityLevelConfiguration
* @resourceType status
*/
async function handlepatchModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
* read status of the specified ReplicaSet
* @resourceType status
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
* replace status of the specified ReplicaSet
* @resourceType status
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
* partially update status of the specified ReplicaSet
* @resourceType status
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/apps/v1/namespaces/:namespace/deployments/:name/status
* read status of the specified Deployment
* @resourceType status
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/deployments/:name/status
* replace status of the specified Deployment
* @resourceType status
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name/status
* partially update status of the specified Deployment
* @resourceType status
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
* read status of the specified StatefulSet
* @resourceType status
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
* replace status of the specified StatefulSet
* @resourceType status
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
* partially update status of the specified StatefulSet
* @resourceType status
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/apiregistration.k8s.io/v1/apiservices/:name/status
* read status of the specified APIService
* @resourceType status
*/
async function handlegetModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apiregistration.k8s.io/v1/apiservices/:name/status
* replace status of the specified APIService
* @resourceType status
*/
async function handleputModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/apiregistration.k8s.io/v1/apiservices/:name/status
* partially update status of the specified APIService
* @resourceType status
*/
async function handlepatchModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /api/v1/namespaces/:namespace/services/:name/status
* read status of the specified Service
* @resourceType status
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Services__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/services/:name/status
* replace status of the specified Service
* @resourceType status
*/
async function handleputModel_Api_V1_Namespaces__namespace_Services__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/services/:name/status
* partially update status of the specified Service
* @resourceType status
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Services__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /api/v1/namespaces/:name/status
* read status of the specified Namespace
* @resourceType status
*/
async function handlegetModel_Api_V1_Namespaces__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:name/status
* replace status of the specified Namespace
* @resourceType status
*/
async function handleputModel_Api_V1_Namespaces__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /api/v1/namespaces/:name/status
* partially update status of the specified Namespace
* @resourceType status
*/
async function handlepatchModel_Api_V1_Namespaces__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /api/v1/nodes/:name/status
* partially update status of the specified Node
* @resourceType status
*/
async function handlepatchModel_Api_V1_Nodes__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /api/v1/nodes/:name/status
* read status of the specified Node
* @resourceType status
*/
async function handlegetModel_Api_V1_Nodes__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/nodes/:name/status
* replace status of the specified Node
* @resourceType status
*/
async function handleputModel_Api_V1_Nodes__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
* read status of the specified PersistentVolumeClaim
* @resourceType status
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
* replace status of the specified PersistentVolumeClaim
* @resourceType status
*/
async function handleputModel_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
* partially update status of the specified PersistentVolumeClaim
* @resourceType status
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PUT /apis/storage.k8s.io/v1/volumeattachments/:name/status
* replace status of the specified VolumeAttachment
* @resourceType status
*/
async function handleputModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/storage.k8s.io/v1/volumeattachments/:name/status
* partially update status of the specified VolumeAttachment
* @resourceType status
*/
async function handlepatchModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/storage.k8s.io/v1/volumeattachments/:name/status
* read status of the specified VolumeAttachment
* @resourceType status
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/namespaces/:namespace/resourcequotas/:name/status
* read status of the specified ResourceQuota
* @resourceType status
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Resourcequotas__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/resourcequotas/:name/status
* replace status of the specified ResourceQuota
* @resourceType status
*/
async function handleputModel_Api_V1_Namespaces__namespace_Resourcequotas__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/resourcequotas/:name/status
* partially update status of the specified ResourceQuota
* @resourceType status
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Resourcequotas__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
* read status of the specified HorizontalPodAutoscaler
* @resourceType status
*/
async function handlegetModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
* replace status of the specified HorizontalPodAutoscaler
* @resourceType status
*/
async function handleputModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
* partially update status of the specified HorizontalPodAutoscaler
* @resourceType status
*/
async function handlepatchModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
* read status of the specified CronJob
* @resourceType status
*/
async function handlegetModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
* replace status of the specified CronJob
* @resourceType status
*/
async function handleputModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
* partially update status of the specified CronJob
* @resourceType status
*/
async function handlepatchModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /api/v1/namespaces/:namespace/pods/:name/status
* read status of the specified Pod
* @resourceType status
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/pods/:name/status
* replace status of the specified Pod
* @resourceType status
*/
async function handleputModel_Api_V1_Namespaces__namespace_Pods__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/pods/:name/status
* partially update status of the specified Pod
* @resourceType status
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Pods__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
* partially update status of the specified ReplicationController
* @resourceType status
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
* read status of the specified ReplicationController
* @resourceType status
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
* replace status of the specified ReplicationController
* @resourceType status
*/
async function handleputModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
* read status of the specified Ingress
* @resourceType status
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
* replace status of the specified Ingress
* @resourceType status
*/
async function handleputModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
* partially update status of the specified Ingress
* @resourceType status
*/
async function handlepatchModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status
* read status of the specified CertificateSigningRequest
* @resourceType status
*/
async function handlegetModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status
* replace status of the specified CertificateSigningRequest
* @resourceType status
*/
async function handleputModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status
* partially update status of the specified CertificateSigningRequest
* @resourceType status
*/
async function handlepatchModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
* read status of the specified PodDisruptionBudget
* @resourceType status
*/
async function handlegetModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
* replace status of the specified PodDisruptionBudget
* @resourceType status
*/
async function handleputModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
* partially update status of the specified PodDisruptionBudget
* @resourceType status
*/
async function handlepatchModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
* read status of the specified HorizontalPodAutoscaler
* @resourceType status
*/
async function handlegetModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
* replace status of the specified HorizontalPodAutoscaler
* @resourceType status
*/
async function handleputModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
* partially update status of the specified HorizontalPodAutoscaler
* @resourceType status
*/
async function handlepatchModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /api/v1/persistentvolumes/:name/status
* read status of the specified PersistentVolume
* @resourceType status
*/
async function handlegetModel_Api_V1_Persistentvolumes__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/persistentvolumes/:name/status
* replace status of the specified PersistentVolume
* @resourceType status
*/
async function handleputModel_Api_V1_Persistentvolumes__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /api/v1/persistentvolumes/:name/status
* partially update status of the specified PersistentVolume
* @resourceType status
*/
async function handlepatchModel_Api_V1_Persistentvolumes__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
* read status of the specified DaemonSet
* @resourceType status
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
* replace status of the specified DaemonSet
* @resourceType status
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
* partially update status of the specified DaemonSet
* @resourceType status
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PUT /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
* replace status of the specified FlowSchema
* @resourceType status
*/
async function handleputModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating status ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('status', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
* partially update status of the specified FlowSchema
* @resourceType status
*/
async function handlepatchModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching status ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'status',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
* read status of the specified FlowSchema
* @resourceType status
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name_Status(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting status ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('status', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('status', name, namespace));
    return;
  }
  throw error;
}


}


