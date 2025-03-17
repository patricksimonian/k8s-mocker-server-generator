// Path: routes/V1Namespaces{namespace}ConfigmapsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteCoreV1CollectionNamespacedConfigMap } from '../controllers/CoreV1Controller'
import { listCoreV1NamespacedConfigMap } from '../controllers/CoreV1Controller'
import { createCoreV1NamespacedConfigMap } from '../controllers/CoreV1Controller'

import {router} from './router';

router.delete('/api/v1/namespaces/:namespace/configmaps', deleteCoreV1CollectionNamespacedConfigMap)

router.get('/api/v1/namespaces/:namespace/configmaps', listCoreV1NamespacedConfigMap)

router.post('/api/v1/namespaces/:namespace/configmaps', createCoreV1NamespacedConfigMap)

export default router;
