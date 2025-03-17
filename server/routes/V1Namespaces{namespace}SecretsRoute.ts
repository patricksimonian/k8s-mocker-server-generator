// Path: routes/V1Namespaces{namespace}SecretsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteCoreV1CollectionNamespacedSecret } from '../controllers/CoreV1Controller'
import { listCoreV1NamespacedSecret } from '../controllers/CoreV1Controller'
import { createCoreV1NamespacedSecret } from '../controllers/CoreV1Controller'

import {router} from './router';

router.delete('/api/v1/namespaces/:namespace/secrets', deleteCoreV1CollectionNamespacedSecret)

router.get('/api/v1/namespaces/:namespace/secrets', listCoreV1NamespacedSecret)

router.post('/api/v1/namespaces/:namespace/secrets', createCoreV1NamespacedSecret)

export default router;
