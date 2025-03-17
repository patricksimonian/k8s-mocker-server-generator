// Path: routes/ApisStorage.k8s.ioV1beta1Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { getStorageV1beta1APIResources } from '../controllers/StorageV1beta1Controller'

import {router} from './router';

router.get('/apis/storage.k8s.io/v1beta1/', getStorageV1beta1APIResources)

export default router;
