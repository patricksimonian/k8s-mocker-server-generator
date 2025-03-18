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

// Import all models to ensure we have what we need
import * as models from '../models';

export function createstorage_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /apis/storage.k8s.io/v1/watch/csistoragecapacities
   * watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/storage.k8s.io/v1/watch/csistoragecapacities', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Csistoragecapacities(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities/:name
   * watch changes to an object of kind CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Namespaces-_namespace-Csistoragecapacities-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/csistoragecapacities
   * list or watch objects of kind CSIStorageCapacity
   */
  router.get('/apis/storage.k8s.io/v1/csistoragecapacities', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Csistoragecapacities(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/storage.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/watch/storageclasses
   * watch individual changes to a list of StorageClass. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/storage.k8s.io/v1/watch/storageclasses', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Storageclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/storage.k8s.io/v1/csidrivers/:name
   * partially update the specified CSIDriver
   */
  router.patch('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Storage.K8s.Io-V1-Csidrivers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/csidrivers/:name
   * read the specified CSIDriver
   */
  router.get('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Csidrivers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/storage.k8s.io/v1/csidrivers/:name
   * replace the specified CSIDriver
   */
  router.put('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Storage.K8s.Io-V1-Csidrivers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/storage.k8s.io/v1/csidrivers/:name
   * delete a CSIDriver
   */
  router.delete('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Storage.K8s.Io-V1-Csidrivers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/watch/volumeattachments/:name
   * watch changes to an object of kind VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/storage.k8s.io/v1/watch/volumeattachments/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Volumeattachments-_name(req, res, storage);
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
      await handleGet-Apis-Storage.K8s.Io-V1-Volumeattachments-_name-Status(req, res, storage);
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
      await handlePut-Apis-Storage.K8s.Io-V1-Volumeattachments-_name-Status(req, res, storage);
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
      await handlePatch-Apis-Storage.K8s.Io-V1-Volumeattachments-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
   * list or watch objects of kind CSIStorageCapacity
   */
  router.get('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Namespaces-_namespace-Csistoragecapacities(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
   * create a CSIStorageCapacity
   */
  router.post('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
    try {
      await handlePost-Apis-Storage.K8s.Io-V1-Namespaces-_namespace-Csistoragecapacities(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
   * delete collection of CSIStorageCapacity
   */
  router.delete('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
    try {
      await handleDelete-Apis-Storage.K8s.Io-V1-Namespaces-_namespace-Csistoragecapacities(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/watch/volumeattachments
   * watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/storage.k8s.io/v1/watch/volumeattachments', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Volumeattachments(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/watch/csidrivers
   * watch individual changes to a list of CSIDriver. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/storage.k8s.io/v1/watch/csidrivers', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Csidrivers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/watch/storageclasses/:name
   * watch changes to an object of kind StorageClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/storage.k8s.io/v1/watch/storageclasses/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Storageclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/csidrivers
   * list or watch objects of kind CSIDriver
   */
  router.get('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Csidrivers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/storage.k8s.io/v1/csidrivers
   * create a CSIDriver
   */
  router.post('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
    try {
      await handlePost-Apis-Storage.K8s.Io-V1-Csidrivers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/storage.k8s.io/v1/csidrivers
   * delete collection of CSIDriver
   */
  router.delete('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
    try {
      await handleDelete-Apis-Storage.K8s.Io-V1-Csidrivers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/csinodes
   * list or watch objects of kind CSINode
   */
  router.get('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Csinodes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/storage.k8s.io/v1/csinodes
   * create a CSINode
   */
  router.post('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
    try {
      await handlePost-Apis-Storage.K8s.Io-V1-Csinodes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/storage.k8s.io/v1/csinodes
   * delete collection of CSINode
   */
  router.delete('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
    try {
      await handleDelete-Apis-Storage.K8s.Io-V1-Csinodes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/storage.k8s.io/v1/csinodes/:name
   * replace the specified CSINode
   */
  router.put('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Storage.K8s.Io-V1-Csinodes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/storage.k8s.io/v1/csinodes/:name
   * delete a CSINode
   */
  router.delete('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Storage.K8s.Io-V1-Csinodes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/storage.k8s.io/v1/csinodes/:name
   * partially update the specified CSINode
   */
  router.patch('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Storage.K8s.Io-V1-Csinodes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/csinodes/:name
   * read the specified CSINode
   */
  router.get('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Csinodes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/volumeattachments
   * list or watch objects of kind VolumeAttachment
   */
  router.get('/apis/storage.k8s.io/v1/volumeattachments', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Volumeattachments(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/storage.k8s.io/v1/volumeattachments
   * create a VolumeAttachment
   */
  router.post('/apis/storage.k8s.io/v1/volumeattachments', async (req, res, next) => {
    try {
      await handlePost-Apis-Storage.K8s.Io-V1-Volumeattachments(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/storage.k8s.io/v1/volumeattachments
   * delete collection of VolumeAttachment
   */
  router.delete('/apis/storage.k8s.io/v1/volumeattachments', async (req, res, next) => {
    try {
      await handleDelete-Apis-Storage.K8s.Io-V1-Volumeattachments(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/storage.k8s.io/v1/storageclasses/:name
   * replace the specified StorageClass
   */
  router.put('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Storage.K8s.Io-V1-Storageclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/storage.k8s.io/v1/storageclasses/:name
   * delete a StorageClass
   */
  router.delete('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Storage.K8s.Io-V1-Storageclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/storage.k8s.io/v1/storageclasses/:name
   * partially update the specified StorageClass
   */
  router.patch('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Storage.K8s.Io-V1-Storageclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/storageclasses/:name
   * read the specified StorageClass
   */
  router.get('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Storageclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities
   * watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Namespaces-_namespace-Csistoragecapacities(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/storage.k8s.io/v1/volumeattachments/:name
   * replace the specified VolumeAttachment
   */
  router.put('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Storage.K8s.Io-V1-Volumeattachments-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/storage.k8s.io/v1/volumeattachments/:name
   * delete a VolumeAttachment
   */
  router.delete('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Storage.K8s.Io-V1-Volumeattachments-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/storage.k8s.io/v1/volumeattachments/:name
   * partially update the specified VolumeAttachment
   */
  router.patch('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Storage.K8s.Io-V1-Volumeattachments-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/volumeattachments/:name
   * read the specified VolumeAttachment
   */
  router.get('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Volumeattachments-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/watch/csinodes/:name
   * watch changes to an object of kind CSINode. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/storage.k8s.io/v1/watch/csinodes/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Csinodes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/
   * get information of a group
   */
  router.get('/apis/storage.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/watch/csidrivers/:name
   * watch changes to an object of kind CSIDriver. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/storage.k8s.io/v1/watch/csidrivers/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Csidrivers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/watch/csinodes
   * watch individual changes to a list of CSINode. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/storage.k8s.io/v1/watch/csinodes', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Watch-Csinodes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/storageclasses
   * list or watch objects of kind StorageClass
   */
  router.get('/apis/storage.k8s.io/v1/storageclasses', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Storageclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/storage.k8s.io/v1/storageclasses
   * create a StorageClass
   */
  router.post('/apis/storage.k8s.io/v1/storageclasses', async (req, res, next) => {
    try {
      await handlePost-Apis-Storage.K8s.Io-V1-Storageclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/storage.k8s.io/v1/storageclasses
   * delete collection of StorageClass
   */
  router.delete('/apis/storage.k8s.io/v1/storageclasses', async (req, res, next) => {
    try {
      await handleDelete-Apis-Storage.K8s.Io-V1-Storageclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
   * read the specified CSIStorageCapacity
   */
  router.get('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Storage.K8s.Io-V1-Namespaces-_namespace-Csistoragecapacities-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
   * replace the specified CSIStorageCapacity
   */
  router.put('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Storage.K8s.Io-V1-Namespaces-_namespace-Csistoragecapacities-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
   * delete a CSIStorageCapacity
   */
  router.delete('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Storage.K8s.Io-V1-Namespaces-_namespace-Csistoragecapacities-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
   * partially update the specified CSIStorageCapacity
   */
  router.patch('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Storage.K8s.Io-V1-Namespaces-_namespace-Csistoragecapacities-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/csistoragecapacities
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Csistoragecapacities(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities/:name
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Namespaces__namespace_Csistoragecapacities__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/csistoragecapacities
 */
async function handleget_Apis_Storage_K8s_Io_V1_Csistoragecapacities(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/
 */
async function handleget_Apis_Storage_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/storageclasses
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Storageclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for PATCH /apis/storage.k8s.io/v1/csidrivers/:name
 */
async function handlepatch_Apis_Storage_K8s_Io_V1_Csidrivers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.storage_k8s_io>(
      storage, 
      'storage.k8s.io',
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
 * Handler for GET /apis/storage.k8s.io/v1/csidrivers/:name
 */
async function handleget_Apis_Storage_K8s_Io_V1_Csidrivers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/storage.k8s.io/v1/csidrivers/:name
 */
async function handleput_Apis_Storage_K8s_Io_V1_Csidrivers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Updating storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('storage.k8s.io', name, resource, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/storage.k8s.io/v1/csidrivers/:name
 */
async function handledelete_Apis_Storage_K8s_Io_V1_Csidrivers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('storage.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `storage.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/volumeattachments/:name
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Volumeattachments__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/volumeattachments/:name/status
 */
async function handleget_Apis_Storage_K8s_Io_V1_Volumeattachments__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/storage.k8s.io/v1/volumeattachments/:name/status
 */
async function handleput_Apis_Storage_K8s_Io_V1_Volumeattachments__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Updating storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('storage.k8s.io', name, resource, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/storage.k8s.io/v1/volumeattachments/:name/status
 */
async function handlepatch_Apis_Storage_K8s_Io_V1_Volumeattachments__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.storage_k8s_io>(
      storage, 
      'storage.k8s.io',
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
 * Handler for GET /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
 */
async function handleget_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
 */
async function handlepost_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Creating storage.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.storage_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
 */
async function handledelete_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('storage.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `storage.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/volumeattachments
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Volumeattachments(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/csidrivers
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Csidrivers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/storageclasses/:name
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Storageclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/csidrivers
 */
async function handleget_Apis_Storage_K8s_Io_V1_Csidrivers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for POST /apis/storage.k8s.io/v1/csidrivers
 */
async function handlepost_Apis_Storage_K8s_Io_V1_Csidrivers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Creating storage.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.storage_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/storage.k8s.io/v1/csidrivers
 */
async function handledelete_Apis_Storage_K8s_Io_V1_Csidrivers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('storage.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `storage.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/csinodes
 */
async function handleget_Apis_Storage_K8s_Io_V1_Csinodes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for POST /apis/storage.k8s.io/v1/csinodes
 */
async function handlepost_Apis_Storage_K8s_Io_V1_Csinodes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Creating storage.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.storage_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/storage.k8s.io/v1/csinodes
 */
async function handledelete_Apis_Storage_K8s_Io_V1_Csinodes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('storage.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `storage.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/storage.k8s.io/v1/csinodes/:name
 */
async function handleput_Apis_Storage_K8s_Io_V1_Csinodes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Updating storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('storage.k8s.io', name, resource, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/storage.k8s.io/v1/csinodes/:name
 */
async function handledelete_Apis_Storage_K8s_Io_V1_Csinodes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('storage.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `storage.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/storage.k8s.io/v1/csinodes/:name
 */
async function handlepatch_Apis_Storage_K8s_Io_V1_Csinodes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.storage_k8s_io>(
      storage, 
      'storage.k8s.io',
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
 * Handler for GET /apis/storage.k8s.io/v1/csinodes/:name
 */
async function handleget_Apis_Storage_K8s_Io_V1_Csinodes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/volumeattachments
 */
async function handleget_Apis_Storage_K8s_Io_V1_Volumeattachments(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for POST /apis/storage.k8s.io/v1/volumeattachments
 */
async function handlepost_Apis_Storage_K8s_Io_V1_Volumeattachments(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Creating storage.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.storage_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/storage.k8s.io/v1/volumeattachments
 */
async function handledelete_Apis_Storage_K8s_Io_V1_Volumeattachments(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('storage.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `storage.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/storage.k8s.io/v1/storageclasses/:name
 */
async function handleput_Apis_Storage_K8s_Io_V1_Storageclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Updating storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('storage.k8s.io', name, resource, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/storage.k8s.io/v1/storageclasses/:name
 */
async function handledelete_Apis_Storage_K8s_Io_V1_Storageclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('storage.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `storage.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/storage.k8s.io/v1/storageclasses/:name
 */
async function handlepatch_Apis_Storage_K8s_Io_V1_Storageclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.storage_k8s_io>(
      storage, 
      'storage.k8s.io',
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
 * Handler for GET /apis/storage.k8s.io/v1/storageclasses/:name
 */
async function handleget_Apis_Storage_K8s_Io_V1_Storageclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Namespaces__namespace_Csistoragecapacities(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/storage.k8s.io/v1/volumeattachments/:name
 */
async function handleput_Apis_Storage_K8s_Io_V1_Volumeattachments__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Updating storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('storage.k8s.io', name, resource, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/storage.k8s.io/v1/volumeattachments/:name
 */
async function handledelete_Apis_Storage_K8s_Io_V1_Volumeattachments__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('storage.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `storage.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/storage.k8s.io/v1/volumeattachments/:name
 */
async function handlepatch_Apis_Storage_K8s_Io_V1_Volumeattachments__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.storage_k8s_io>(
      storage, 
      'storage.k8s.io',
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
 * Handler for GET /apis/storage.k8s.io/v1/volumeattachments/:name
 */
async function handleget_Apis_Storage_K8s_Io_V1_Volumeattachments__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/csinodes/:name
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Csinodes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/
 */
async function handleget_Apis_Storage_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/csidrivers/:name
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Csidrivers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/watch/csinodes
 */
async function handleget_Apis_Storage_K8s_Io_V1_Watch_Csinodes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/storageclasses
 */
async function handleget_Apis_Storage_K8s_Io_V1_Storageclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing storage.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.storage_k8s_io>(
    storage, 
    'storage.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for POST /apis/storage.k8s.io/v1/storageclasses
 */
async function handlepost_Apis_Storage_K8s_Io_V1_Storageclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Creating storage.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.storage_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/storage.k8s.io/v1/storageclasses
 */
async function handledelete_Apis_Storage_K8s_Io_V1_Storageclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('storage.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `storage.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
 */
async function handleget_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('storage.k8s.io', name, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
 */
async function handleput_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.storage_k8s_io;
  
  logger.info(`Updating storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('storage.k8s.io', name, resource, namespace) as models.storage_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
 */
async function handledelete_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('storage.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `storage.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('storage.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
 */
async function handlepatch_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching storage.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.storage_k8s_io>(
      storage, 
      'storage.k8s.io',
      namespace, 
      name, 
      patchData
    );
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}
