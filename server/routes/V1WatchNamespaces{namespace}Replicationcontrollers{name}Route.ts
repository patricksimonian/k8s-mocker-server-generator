// Path: routes/V1WatchNamespaces{namespace}Replicationcontrollers{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchCoreV1NamespacedReplicationController } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/watch/namespaces/:namespace/replicationcontrollers/:name', watchCoreV1NamespacedReplicationController)

export default router;
