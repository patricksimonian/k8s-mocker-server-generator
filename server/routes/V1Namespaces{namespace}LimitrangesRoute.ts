// Path: routes/V1Namespaces{namespace}LimitrangesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteCoreV1CollectionNamespacedLimitRange } from '../controllers/CoreV1Controller'
import { listCoreV1NamespacedLimitRange } from '../controllers/CoreV1Controller'
import { createCoreV1NamespacedLimitRange } from '../controllers/CoreV1Controller'

import {router} from './router';

router.delete('/api/v1/namespaces/:namespace/limitranges', deleteCoreV1CollectionNamespacedLimitRange)

router.get('/api/v1/namespaces/:namespace/limitranges', listCoreV1NamespacedLimitRange)

router.post('/api/v1/namespaces/:namespace/limitranges', createCoreV1NamespacedLimitRange)

export default router;
