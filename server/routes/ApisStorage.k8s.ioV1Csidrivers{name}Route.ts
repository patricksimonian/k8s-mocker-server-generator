// Path: routes/ApisStorage.k8s.ioV1Csidrivers{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteStorageV1CSIDriver } from '../controllers/StorageV1Controller'
import { readStorageV1CSIDriver } from '../controllers/StorageV1Controller'
import { patchStorageV1CSIDriver } from '../controllers/StorageV1Controller'
import { replaceStorageV1CSIDriver } from '../controllers/StorageV1Controller'

import {router} from './router';

router.delete('/apis/storage.k8s.io/v1/csidrivers/:name', deleteStorageV1CSIDriver)

router.get('/apis/storage.k8s.io/v1/csidrivers/:name', readStorageV1CSIDriver)

router.patch('/apis/storage.k8s.io/v1/csidrivers/:name', patchStorageV1CSIDriver)

router.put('/apis/storage.k8s.io/v1/csidrivers/:name', replaceStorageV1CSIDriver)

export default router;
