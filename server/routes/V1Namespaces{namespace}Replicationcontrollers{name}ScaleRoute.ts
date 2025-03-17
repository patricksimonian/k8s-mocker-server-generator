// Path: routes/V1Namespaces{namespace}Replicationcontrollers{name}ScaleRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { readCoreV1NamespacedReplicationControllerScale } from '../controllers/CoreV1Controller'
import { patchCoreV1NamespacedReplicationControllerScale } from '../controllers/CoreV1Controller'
import { replaceCoreV1NamespacedReplicationControllerScale } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', readCoreV1NamespacedReplicationControllerScale)

router.patch('/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', patchCoreV1NamespacedReplicationControllerScale)

router.put('/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', replaceCoreV1NamespacedReplicationControllerScale)

export default router;
