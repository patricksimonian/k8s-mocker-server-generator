// Path: routes/V1PersistentvolumesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteCoreV1CollectionPersistentVolume } from '../controllers/CoreV1Controller'
import { listCoreV1PersistentVolume } from '../controllers/CoreV1Controller'
import { createCoreV1PersistentVolume } from '../controllers/CoreV1Controller'

import {router} from './router';

router.delete('/api/v1/persistentvolumes', deleteCoreV1CollectionPersistentVolume)

router.get('/api/v1/persistentvolumes', listCoreV1PersistentVolume)

router.post('/api/v1/persistentvolumes', createCoreV1PersistentVolume)

export default router;
