// Path: routes/V1Namespaces{namespace}Resourcequotas{name}StatusRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { readCoreV1NamespacedResourceQuotaStatus } from '../controllers/CoreV1Controller'
import { patchCoreV1NamespacedResourceQuotaStatus } from '../controllers/CoreV1Controller'
import { replaceCoreV1NamespacedResourceQuotaStatus } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/namespaces/:namespace/resourcequotas/:name/status', readCoreV1NamespacedResourceQuotaStatus)

router.patch('/api/v1/namespaces/:namespace/resourcequotas/:name/status', patchCoreV1NamespacedResourceQuotaStatus)

router.put('/api/v1/namespaces/:namespace/resourcequotas/:name/status', replaceCoreV1NamespacedResourceQuotaStatus)

export default router;
