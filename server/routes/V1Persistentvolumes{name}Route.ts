// Path: routes/V1Persistentvolumes{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteCoreV1PersistentVolume } from '../controllers/CoreV1Controller'
import { readCoreV1PersistentVolume } from '../controllers/CoreV1Controller'
import { patchCoreV1PersistentVolume } from '../controllers/CoreV1Controller'
import { replaceCoreV1PersistentVolume } from '../controllers/CoreV1Controller'

import {router} from './router';

router.delete('/api/v1/persistentvolumes/:name', deleteCoreV1PersistentVolume)

router.get('/api/v1/persistentvolumes/:name', readCoreV1PersistentVolume)

router.patch('/api/v1/persistentvolumes/:name', patchCoreV1PersistentVolume)

router.put('/api/v1/persistentvolumes/:name', replaceCoreV1PersistentVolume)

export default router;
